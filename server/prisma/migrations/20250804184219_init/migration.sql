-- CreateEnum
CREATE TYPE "public"."Category" AS ENUM ('Change', 'Combine', 'Compare', 'Unknown');

-- CreateEnum
CREATE TYPE "public"."Subcategory" AS ENUM ('CWU', 'CPU', 'CJWU', 'CJPU', 'CSWU', 'CSPU', 'CMDU', 'CMLQU', 'CMSQU', 'CLDU', 'CLLQU', 'CLSQU');

-- CreateEnum
CREATE TYPE "public"."AIModelName" AS ENUM ('OPENAI_GPT_4_1', 'ANTHROPIC_CLAUDE_SONNET_4', 'GOOGLE_GEMINI_2_5_FLASH');

-- CreateEnum
CREATE TYPE "public"."QuizStatus" AS ENUM ('ACTIVE', 'COMPLETED');

-- CreateTable
CREATE TABLE "public"."Teacher" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "hashedPassword" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,

    CONSTRAINT "Teacher_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Class" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "teacherId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Class_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Student" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "classId" INTEGER NOT NULL,
    "userName" TEXT NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Problem" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "answer" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "groundTruthId" INTEGER NOT NULL,

    CONSTRAINT "Problem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."GroundTruth" (
    "id" SERIAL NOT NULL,
    "category" "public"."Category" NOT NULL,
    "subcategory" "public"."Subcategory" NOT NULL,
    "answer" INTEGER NOT NULL,
    "modelAnswers" JSONB NOT NULL,

    CONSTRAINT "GroundTruth_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ModelEvaluation" (
    "id" SERIAL NOT NULL,
    "problemId" INTEGER NOT NULL,
    "tokenUsage" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "predictedCategory" "public"."Category",
    "predictedSubcategory" "public"."Subcategory",
    "modelName" "public"."AIModelName" NOT NULL,
    "answer" INTEGER,
    "isAnswerCorrect" BOOLEAN NOT NULL,
    "isModelMappingCorrect" BOOLEAN NOT NULL,
    "modelAnswers" JSONB,
    "storyGrammarPrompts" JSONB,
    "groundTruthId" INTEGER NOT NULL,
    "modelAnswerReasoning" TEXT,
    "subCategoryReasoning" TEXT,
    "supercategoryReasoning" TEXT NOT NULL,

    CONSTRAINT "ModelEvaluation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."QuizSession" (
    "id" SERIAL NOT NULL,
    "classId" INTEGER NOT NULL,
    "teacherId" INTEGER NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endTime" TIMESTAMP(3),
    "status" "public"."QuizStatus" NOT NULL DEFAULT 'ACTIVE',
    "settings" JSONB,

    CONSTRAINT "QuizSession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."QuizCode" (
    "code" TEXT NOT NULL,
    "sessionId" INTEGER NOT NULL,
    "studentId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "QuizCode_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "public"."QuizAttempt" (
    "id" SERIAL NOT NULL,
    "sessionId" INTEGER NOT NULL,
    "studentId" INTEGER NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endTime" TIMESTAMP(3),

    CONSTRAINT "QuizAttempt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."QuizResponse" (
    "id" SERIAL NOT NULL,
    "attemptId" INTEGER NOT NULL,
    "problemId" INTEGER NOT NULL,
    "studentAnswer" INTEGER,
    "timeSpent" INTEGER NOT NULL,
    "storyGrammarAnswers" JSONB,
    "finalAnswerCorrect" BOOLEAN,
    "storyGrammarCorrect" BOOLEAN,

    CONSTRAINT "QuizResponse_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Teacher_email_key" ON "public"."Teacher"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Class_teacherId_name_key" ON "public"."Class"("teacherId", "name");

-- CreateIndex
CREATE UNIQUE INDEX "Student_userName_key" ON "public"."Student"("userName");

-- CreateIndex
CREATE UNIQUE INDEX "Problem_groundTruthId_key" ON "public"."Problem"("groundTruthId");

-- CreateIndex
CREATE UNIQUE INDEX "QuizCode_code_key" ON "public"."QuizCode"("code");

-- AddForeignKey
ALTER TABLE "public"."Class" ADD CONSTRAINT "Class_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "public"."Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Student" ADD CONSTRAINT "Student_classId_fkey" FOREIGN KEY ("classId") REFERENCES "public"."Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Problem" ADD CONSTRAINT "Problem_groundTruthId_fkey" FOREIGN KEY ("groundTruthId") REFERENCES "public"."GroundTruth"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ModelEvaluation" ADD CONSTRAINT "ModelEvaluation_groundTruthId_fkey" FOREIGN KEY ("groundTruthId") REFERENCES "public"."GroundTruth"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ModelEvaluation" ADD CONSTRAINT "ModelEvaluation_problemId_fkey" FOREIGN KEY ("problemId") REFERENCES "public"."Problem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."QuizSession" ADD CONSTRAINT "QuizSession_classId_fkey" FOREIGN KEY ("classId") REFERENCES "public"."Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."QuizSession" ADD CONSTRAINT "QuizSession_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "public"."Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."QuizCode" ADD CONSTRAINT "QuizCode_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "public"."QuizSession"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."QuizCode" ADD CONSTRAINT "QuizCode_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "public"."Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."QuizAttempt" ADD CONSTRAINT "QuizAttempt_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "public"."QuizSession"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."QuizAttempt" ADD CONSTRAINT "QuizAttempt_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "public"."Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."QuizResponse" ADD CONSTRAINT "QuizResponse_attemptId_fkey" FOREIGN KEY ("attemptId") REFERENCES "public"."QuizAttempt"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."QuizResponse" ADD CONSTRAINT "QuizResponse_problemId_fkey" FOREIGN KEY ("problemId") REFERENCES "public"."Problem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
