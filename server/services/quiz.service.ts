import { AIModelName } from "@prisma/client";
import prisma from "../config/prisma";
import { SERVER_CONFIG } from "../config/server";
import { createAppError } from "../middleware/error-handler";

type QuizSettingsInput = {
  problemCount?: number;
  problemType?: string;
  selectedTypes?: string[];
};

function generateJoinCode(length = 6) {
  return Math.random()
    .toString(36)
    .slice(2)
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "")
    .slice(0, length);
}

function getSubcategoryCodes(problemType: string, selectedTypes?: string[]) {
  const changeCodes = ["CJPU", "CJWU", "CSPU", "CSWU"];
  const combineCodes = ["CPU", "CWU"];
  const compareCodes = ["CLDU", "CLLQU", "CLSQU", "CMDU", "CMLQU", "CMSQU"];

  if (problemType === "All") {
    return [...changeCodes, ...combineCodes, ...compareCodes];
  }

  if (problemType === "Change") return changeCodes;
  if (problemType === "Combine") return combineCodes;
  if (problemType === "Compare") return compareCodes;

  return [...changeCodes, ...combineCodes, ...compareCodes];
}

export async function createQuizSession(input: {
  classId: number;
  teacherId: number;
  settings?: QuizSettingsInput;
}) {
  const { classId, teacherId, settings = {} } = input;
  const {
    problemCount: initialProblemCount = 10,
    problemType: initialProblemType,
    selectedTypes: initialSelectedTypes,
  } = settings;

  const classExists = await prisma.class.findFirst({
    where: { id: classId, teacherId },
  });
  if (!classExists) {
    throw createAppError("Class not found or access denied", 404, "NOT_FOUND");
  }

  const existingActive = await prisma.quizSession.findFirst({
    where: { classId, status: "ACTIVE" },
  });
  if (existingActive) {
    throw createAppError(
      "A quiz is already active for this class. All students must complete it, or delete it, before starting a new one.",
      409,
      "CONFLICT",
    );
  }

  const problemType = initialProblemType || "All";
  const selectedTypes = initialSelectedTypes || [];
  const subcategoryCodes = getSubcategoryCodes(problemType, selectedTypes);

  const problems = await prisma.problem.findMany({
    where: {
      groundTruth: {
        subcategory: { in: subcategoryCodes as any },
      },
      modelEvaluations: {
        some: {
          modelName: SERVER_CONFIG.DEFAULT_MODEL as AIModelName,
          isAnswerCorrect: true,
          isModelMappingCorrect: true,
          predictedCategory: { not: null },
          predictedSubcategory: { not: null },
        },
      },
    },
    orderBy: { id: "asc" },
    include: {
      groundTruth: true,
      modelEvaluations: {
        where: { modelName: SERVER_CONFIG.DEFAULT_MODEL as AIModelName },
        take: 1,
      },
    },
  });

  if (problems.length === 0) {
    throw createAppError(
      "No suitable problems found for the selected criteria",
      400,
      "BAD_REQUEST",
    );
  }

  if (problems.length < initialProblemCount) {
    throw createAppError(
      `Only ${problems.length} problem${problems.length === 1 ? "" : "s"} are available for the selected criteria. Please enter a number between 1 and ${problems.length}.`,
      400,
      "BAD_REQUEST",
    );
  }

  const selectedProblems = problems
    .slice(0, initialProblemCount)
    .map((problem, index) => ({
      id: problem.id,
      order: index + 1,
    }));

  const students = await prisma.student.findMany({
    where: { classId },
    select: { id: true, name: true },
  });

  const { quizSession, codes } = await prisma.$transaction(async (tx) => {
    const quizSession = await tx.quizSession.create({
      data: {
        classId,
        teacherId,
        status: "ACTIVE",
        settings: {
          problemCount: initialProblemCount,
          problemType: initialProblemType,
          selectedTypes: initialSelectedTypes,
          selectedProblems,
        },
      },
      include: {
        class: { select: { name: true } },
      },
    });

    const codes: Array<{
      code: string;
      sessionId: number;
      studentId: number;
      studentName: string;
    }> = [];

    for (const student of students) {
      // Retry on unique code collisions (code is primary key).
      for (let attempt = 0; attempt < 10; attempt++) {
        const code = generateJoinCode(6);
        try {
          await tx.quizCode.create({
            data: {
              code,
              sessionId: quizSession.id,
              studentId: student.id,
            },
          });
          codes.push({
            code,
            sessionId: quizSession.id,
            studentId: student.id,
            studentName: student.name,
          });
          break;
        } catch (err: any) {
          // Prisma unique violation: retry with a new code.
          if (err?.code === "P2002") continue;
          throw err;
        }
      }
    }

    return { quizSession, codes };
  });

  return {
    success: true,
    session: {
      id: quizSession.id,
      startTime: quizSession.startTime,
      endTime: quizSession.endTime,
      status: quizSession.status,
      class: quizSession.class,
      settings:
        (quizSession.settings as any) || ({
          problemCount: 10,
          problemType: "All",
          selectedTypes: [],
        } satisfies any),
      attempts: [],
      codes: codes.map((c) => ({
        code: c.code,
        studentId: c.studentId,
        studentName: c.studentName,
      })),
    },
    message: "Quiz session created successfully",
  };
}

export async function getQuizSessionsByClass(input: {
  classId: number;
  teacherId: number;
}) {
  const sessions = await prisma.quizSession.findMany({
    where: {
      classId: input.classId,
      teacherId: input.teacherId,
    },
    include: {
      class: { select: { name: true } },
      attempts: {
        include: { student: { select: { id: true, name: true } } },
      },
      quizCodes: {
        include: { student: { select: { id: true, name: true } } },
      },
    },
    orderBy: { startTime: "desc" },
  });

  return sessions.map((session) => ({
    id: session.id,
    startTime: session.startTime,
    endTime: session.endTime,
    status: session.status,
    class: session.class,
    settings: session.settings || {
      problemCount: 10,
      problemType: "All",
      selectedTypes: [],
    },
    attempts: session.attempts.map((attempt) => ({
      id: attempt.id,
      student: attempt.student,
      startTime: attempt.startTime,
      endTime: attempt.endTime,
    })),
    codes: session.quizCodes.map((code) => ({
      code: code.code,
      studentId: code.student.id,
      studentName: code.student.name,
    })),
  }));
}

export async function getQuizSessionDetail(input: {
  sessionId: number;
  teacherId: number;
}) {
  const session = await prisma.quizSession.findFirst({
    where: { id: input.sessionId, teacherId: input.teacherId },
    include: {
      class: { select: { name: true } },
      attempts: {
        include: {
          student: { select: { id: true, name: true } },
          responses: { include: { problem: { select: { content: true } } } },
        },
      },
      quizCodes: {
        include: { student: { select: { id: true, name: true } } },
      },
    },
  });

  if (!session) {
    throw createAppError("Quiz session not found", 404, "NOT_FOUND");
  }

  return {
    session: {
      id: session.id,
      startTime: session.startTime,
      endTime: session.endTime,
      status: session.status,
      class: session.class,
      settings:
        (session.settings as any) || ({
          problemCount: 10,
          problemType: "All",
          selectedTypes: [],
        } satisfies any),
      attempts: session.attempts.map((attempt) => ({
        id: attempt.id,
        student: attempt.student,
        startTime: attempt.startTime,
        endTime: attempt.endTime,
      })),
      codes: session.quizCodes.map((code) => ({
        code: code.code,
        studentId: code.student.id,
        studentName: code.student.name,
      })),
    },
  };
}

export async function deleteQuizSession(input: {
  sessionId: number;
  teacherId: number;
}) {
  const session = await prisma.quizSession.findFirst({
    where: { id: input.sessionId, teacherId: input.teacherId },
  });
  if (!session) {
    throw createAppError("Quiz session not found", 404, "NOT_FOUND");
  }

  await prisma.$transaction(async (tx) => {
    await tx.quizCode.deleteMany({ where: { sessionId: input.sessionId } });
    await tx.quizResponse.deleteMany({
      where: { attempt: { sessionId: input.sessionId } },
    });
    await tx.quizAttempt.deleteMany({ where: { sessionId: input.sessionId } });
    await tx.quizSession.delete({ where: { id: input.sessionId } });
  });

  return { success: true, message: "Quiz session deleted successfully" };
}

export async function getQuizByCode(quizCode: string) {
  const quizCodeEntry = await prisma.quizCode.findUnique({
    where: { code: quizCode },
  });
  if (!quizCodeEntry) {
    throw createAppError("Invalid or expired quiz code", 404, "NOT_FOUND");
  }

  const session = await prisma.quizSession.findFirst({
    where: { id: quizCodeEntry.sessionId },
    include: {
      class: { select: { name: true } },
    },
  });
  if (!session) {
    throw createAppError("Quiz session not found", 404, "NOT_FOUND");
  }

  const student = await prisma.student.findFirst({
    where: {
      id: quizCodeEntry.studentId,
      classId: session.classId,
    },
  });
  if (!student) {
    throw createAppError(
      "Student not found or not in this class",
      404,
      "NOT_FOUND",
    );
  }

  const attempt = await prisma.quizAttempt.findFirst({
    where: {
      sessionId: session.id,
      studentId: student.id,
    },
    include: {
      student: {
        select: { name: true },
      },
      responses: {
        select: {
          id: true,
          problemId: true,
          finalAnswerCorrect: true,
          storyGrammarCorrect: true,
        },
      },
    },
  });

  if (attempt?.endTime) {
    return {
      completed: true,
      payload: {
        error: "Quiz already completed",
        completed: true,
        attempt: {
          id: attempt.id,
          startTime: attempt.startTime,
          endTime: attempt.endTime,
          responses: attempt.responses,
        },
      },
    };
  }

  const settings = session.settings as any;
  const selectedProblems = settings?.selectedProblems || [];
  if (!selectedProblems || selectedProblems.length === 0) {
    throw createAppError(
      "No problems selected for this quiz session",
      500,
      "INTERNAL_ERROR",
    );
  }

  const problemIds = selectedProblems.map((p: any) => p.id);
  const problems = await prisma.problem.findMany({
    where: { id: { in: problemIds } },
    include: {
      modelEvaluations: {
        where: {
          modelName: SERVER_CONFIG.DEFAULT_MODEL as AIModelName,
        },
        select: {
          id: true,
          modelName: true,
          predictedCategory: true,
          predictedSubcategory: true,
          modelAnswers: true,
          answer: true,
          modelAnswerReasoning: true,
          storyGrammarPrompts: true,
        },
      },
    },
    orderBy: { id: "asc" },
  });

  const orderedProblems = selectedProblems
    .map((selectedProblem: any) => problems.find((p) => p.id === selectedProblem.id))
    .filter(Boolean);

  return {
    completed: false,
    payload: {
      student: { id: student.id, name: student.name },
      problems: orderedProblems.map((problem: any, index: number) => ({
        id: problem.id,
        content: problem.content,
        modelEvaluations: problem.modelEvaluations,
        questionOrder: index + 1,
      })),
    },
  };
}

export async function startQuizAttemptByCode(quizCode: string) {
  const quizCodeEntry = await prisma.quizCode.findUnique({
    where: { code: quizCode },
  });
  if (!quizCodeEntry) {
    throw createAppError("Invalid or expired quiz code", 404, "NOT_FOUND");
  }

  const { sessionId, studentId } = quizCodeEntry;
  const existingAttempt = await prisma.quizAttempt.findFirst({
    where: { sessionId, studentId },
  });
  if (existingAttempt) {
    return {
      success: true,
      attempt: existingAttempt,
      message: "Attempt already exists",
    };
  }

  const attempt = await prisma.quizAttempt.create({
    data: { sessionId, studentId },
    include: {
      student: { select: { name: true } },
    },
  });

  return {
    success: true,
    attempt,
    message: "Quiz attempt started successfully",
  };
}

export async function submitQuizByCode(input: {
  quizCode: string;
  answers: any[];
}) {
  const { quizCode, answers } = input;
  const quizCodeEntry = await prisma.quizCode.findUnique({
    where: { code: quizCode },
  });
  if (!quizCodeEntry) {
    throw createAppError("Invalid or expired quiz code", 404, "NOT_FOUND");
  }

  const { sessionId, studentId } = quizCodeEntry;
  const problemIds = Array.isArray(answers)
    ? answers
        .map((a: any) => Number(a?.problemId))
        .filter((id: number) => Number.isFinite(id))
    : [];

  const modelEvaluations = await prisma.modelEvaluation.findMany({
    where: {
      problemId: { in: problemIds },
      modelName: SERVER_CONFIG.DEFAULT_MODEL as AIModelName,
    },
    select: { problemId: true, modelAnswers: true, answer: true },
  });
  const expectedByProblemId = new Map<
    number,
    { modelAnswers: Record<string, number | null> | null; answer: number | null }
  >(
    modelEvaluations.map((me) => [
      me.problemId,
      {
        modelAnswers: (me.modelAnswers as any) || null,
        answer: typeof me.answer === "number" ? me.answer : null,
      },
    ]),
  );

  const { attempt, responses } = await prisma.$transaction(async (tx) => {
    const attempt =
      (await tx.quizAttempt.findFirst({
        where: { sessionId, studentId },
      })) ||
      (await tx.quizAttempt.create({
        data: { sessionId, studentId },
      }));

    const responses = await Promise.all(
      (answers || []).map(async (answer: any) => {
        const problemId = Number(answer?.problemId);
        const timeSpent = Number(answer?.timeSpent) || 0;
        const finalAnswer = Number(answer?.finalAnswer);

        // Normalize box answers to { [boxKey]: number|null }
        const rawBoxStates = answer?.boxStates || {};
        const normalizedBoxAnswers: Record<string, number | null> = {};
        if (rawBoxStates && typeof rawBoxStates === "object") {
          for (const [k, v] of Object.entries(rawBoxStates)) {
            if (v && typeof v === "object" && "value" in (v as any)) {
              normalizedBoxAnswers[k] = (v as any).value ?? null;
            } else {
              normalizedBoxAnswers[k] = (v as any) ?? null;
            }
          }
        }

        const expected = expectedByProblemId.get(problemId);
        const expectedModelAnswers = expected?.modelAnswers || null;
        const expectedFinal = expected?.answer ?? null;

        const finalAnswerCorrect =
          typeof expectedFinal === "number" &&
          Number.isFinite(finalAnswer) &&
          finalAnswer === expectedFinal;

        let storyGrammarCorrect: boolean | null = null;
        if (expectedModelAnswers) {
          const keys = Object.keys(expectedModelAnswers);
          if (keys.length > 0) {
            storyGrammarCorrect = keys.every((key) => {
              const expectedVal = expectedModelAnswers[key];
              if (expectedVal === null) return true; // unknown box
              return normalizedBoxAnswers[key] === expectedVal;
            });
          }
        }

        return tx.quizResponse.upsert({
          where: {
            // Requires @@unique([attemptId, problemId]) in Prisma schema.
            attemptId_problemId: {
              attemptId: attempt.id,
              problemId,
            },
          } as any,
          create: {
            attemptId: attempt.id,
            problemId,
            studentAnswer: Number.isFinite(finalAnswer) ? finalAnswer : null,
            timeSpent,
            storyGrammarAnswers: normalizedBoxAnswers,
            finalAnswerCorrect,
            storyGrammarCorrect,
          },
          update: {
            studentAnswer: Number.isFinite(finalAnswer) ? finalAnswer : null,
            timeSpent,
            storyGrammarAnswers: normalizedBoxAnswers,
            finalAnswerCorrect,
            storyGrammarCorrect,
          },
        });
      }),
    );

    await tx.quizAttempt.update({
      where: { id: attempt.id },
      data: { endTime: new Date() },
    });

    const session = await tx.quizSession.findUnique({
      where: { id: sessionId },
      include: { quizCodes: true, attempts: true },
    });

    if (session) {
      const totalStudents = session.quizCodes.length;
      const completedAttempts = session.attempts.filter((a) => a.endTime).length;
      if (totalStudents > 0 && completedAttempts === totalStudents) {
        await tx.quizSession.update({
          where: { id: sessionId },
          data: {
            status: "COMPLETED",
            endTime: new Date(),
          },
        });
      }
    }

    return { attempt, responses };
  });

  return {
    success: true,
    attempt,
    responses,
    message: "Quiz submitted successfully",
  };
}
