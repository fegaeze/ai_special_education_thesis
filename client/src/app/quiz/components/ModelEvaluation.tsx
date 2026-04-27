import React, { useEffect, useReducer, useRef } from "react";
import { CheckCircle } from "lucide-react";
import { grammarPoints } from "@/lib/grammarpoints";
import {
  WordProblem,
  ModelAnswerKey,
  SingleQuestionResult,
  BoxState,
} from "@/lib/types/quiz";

// Simple state interface
interface State {
  phase: string;

  // Box values (null for unknown boxes)
  boxValues: Partial<Record<ModelAnswerKey, BoxState>>;

  // Final answer input
  finalAnswer: string;

  // Current prompt index for story grammar
  currentPromptIndex: number;
}

// Simple actions
type Action =
  | { type: "START_QUIZ" }
  | { type: "SET_BOX_VALUE"; box: ModelAnswerKey; value: BoxState }
  | { type: "SET_FINAL_ANSWER"; value: string }
  | { type: "NEXT_PROMPT" }
  | { type: "SHOW_FINAL_ANSWER_INPUT" }
  | { type: "SHOW_SUCCESS_MESSAGE" }
  | { type: "SHOW_FAILED_MESSAGE" }
  | { type: "SHOW_CORRECT_MODEL" };

const INITIAL_STATE: State = {
  phase: "story-grammar",
  boxValues: {},
  finalAnswer: "",
  currentPromptIndex: 0,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "START_QUIZ":
      return INITIAL_STATE;

    case "SET_BOX_VALUE":
      return {
        ...state,
        boxValues: {
          ...state.boxValues,
          [action.box]: action.value,
        },
      };

    case "NEXT_PROMPT":
      return { ...state, currentPromptIndex: state.currentPromptIndex + 1 };

    case "SHOW_FINAL_ANSWER_INPUT":
      return { ...state, phase: "final-answer" };

    case "SET_FINAL_ANSWER":
      return { ...state, finalAnswer: action.value };

    case "SHOW_SUCCESS_MESSAGE":
      return { ...state, phase: "show-success-message" };

    case "SHOW_FAILED_MESSAGE":
      return { ...state, phase: "show-failed-message" };

    case "SHOW_CORRECT_MODEL":
      return { ...state, phase: "show-correct-model" };

    default:
      return state;
  }
};

export const ModelEvaluation: React.FC<{
  problem: WordProblem;
  isLastQuestion: boolean;
  onNext?: (result: SingleQuestionResult) => void;
  onAnswered?: () => void;
}> = ({ problem, isLastQuestion, onNext, onAnswered }) => {
  const { modelEvaluations } = problem;
  const {
    predictedSubcategory: subtype,
    storyGrammarPrompts,
    modelAnswers: groundTruthModelMappedAnswers,
    answer: groundTruthUnknownAnswer,
  } = modelEvaluations[0];

  const startTimeRef = useRef<number | null>(null);
  const timeSpentRef = useRef<number | null>(null);
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    startTimeRef.current = Date.now();
    timeSpentRef.current = null;
    dispatch({ type: "START_QUIZ" });
  }, [problem.id]);

  if (!subtype || !grammarPoints[subtype]) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  const grammar = grammarPoints[subtype];
  const boxes = grammar.boxes;
  const symbols = grammar.symbols;
  const labels = grammar.labels;
  const prompts = storyGrammarPrompts || grammar.prompts;

  const currentPrompt = prompts[state.currentPromptIndex];
  const highlightedBox = currentPrompt?.boxTarget || null;
  const allPromptsComplete = state.currentPromptIndex >= prompts.length;
  const unknownBox = Object.entries(groundTruthModelMappedAnswers || {}).find(
    ([, v]) => v === null,
  )?.[0] as ModelAnswerKey;

  const handleSubmitFinalAnswer = () => {
    const boxValues = state.boxValues;
    const parsedFinal = Number.parseInt(state.finalAnswer, 10);
    const getEffectiveValue = (box: ModelAnswerKey) => {
      if (box === unknownBox) {
        return Number.isFinite(parsedFinal) ? parsedFinal : undefined;
      }
      return boxValues[box]?.value;
    };

    const boxValue1 = getEffectiveValue(boxes[0]);
    const boxValue2 = getEffectiveValue(boxes[1]);
    const boxValue3 = getEffectiveValue(boxes[2]);

    if (
      boxValue1 === undefined ||
      boxValue2 === undefined ||
      boxValue3 === undefined
    ) {
      // Guard against partial state; don't crash the whole quiz UI.
      return;
    }

    const isFirstBoxCorrect = checkIfStoryGrammarAnswerIsCorrect(
      boxes[0],
      boxValue1,
    );
    const isSecondBoxCorrect = checkIfStoryGrammarAnswerIsCorrect(
      boxes[1],
      boxValue2,
    );
    const isThirdBoxCorrect = checkIfStoryGrammarAnswerIsCorrect(
      boxes[2],
      boxValue3,
    );
    const isFinalAnswerCorrect = checkIfVisualAnswerIsCorrect(unknownBox);

    const isCorrect =
      isFirstBoxCorrect &&
      isSecondBoxCorrect &&
      isThirdBoxCorrect &&
      isFinalAnswerCorrect;

    onAnswered?.();

    if (isCorrect) {
      dispatch({ type: "SHOW_SUCCESS_MESSAGE" });
    } else {
      dispatch({ type: "SHOW_FAILED_MESSAGE" });
    }
  };

  const handleContinue = () => {
    // Calculate total time spent when moving to next question
    if (startTimeRef.current) {
      const endTime = Date.now();
      timeSpentRef.current = Math.floor(
        (endTime - startTimeRef.current) / 1000,
      );
    }

    if (onNext) {
      const finalAnswer = Number.parseInt(state.finalAnswer, 10);
      onNext({
        timeSpent: timeSpentRef.current || 0,
        finalAnswer: finalAnswer,
        finalAnswerCorrect: finalAnswer === groundTruthUnknownAnswer,
        boxStates: state.boxValues,
      });
    }
  };

  const getBorderColor = (box: ModelAnswerKey): string => {
    if (state.phase === "show-correct-model") {
      return "border-green-500";
    }
    if (state.phase === "show-success-message") {
      return "border-green-500";
    }
    if (state.phase === "show-failed-message") {
      const isBoxCorrect = checkIfVisualAnswerIsCorrect(box);
      return isBoxCorrect ? "border-green-500" : "border-red-500";
    }
    if (highlightedBox === box) {
      return "border-purple-700";
    }
    return "border-purple-200";
  };

  const getBoxDisplayValue = (box: ModelAnswerKey): string => {
    // Show correct answers when in success or correct model phase
    if (
      state.phase === "show-success-message" ||
      state.phase === "show-correct-model"
    ) {
      return box === unknownBox
        ? groundTruthUnknownAnswer.toString()
        : (groundTruthModelMappedAnswers?.[box] || "").toString();
    }

    // Show user's input when in failed phase (before they see correct answer)
    if (state.phase === "show-failed-message") {
      const userValue = state.boxValues?.[box]?.value;
      if (userValue !== undefined && userValue !== null) {
        return userValue.toString();
      }
      return state.finalAnswer ? state.finalAnswer.toString() : "?";
    }

    // Show user's input or "?" for empty boxes
    const userValue = state.boxValues?.[box]?.value;
    if (userValue === null) {
      return "?";
    }

    return userValue?.toString() || "";
  };

  const showCheckmark = (box: ModelAnswerKey): boolean => {
    if (state.phase === "show-correct-model") {
      return true;
    }
    if (state.phase === "show-success-message") {
      return true;
    }
    if (state.phase === "show-failed-message") {
      return checkIfVisualAnswerIsCorrect(box);
    }
    return false;
  };

  const checkIfStoryGrammarAnswerIsCorrect = (
    box: ModelAnswerKey,
    value: number | null,
  ): boolean => {
    const expectedValue = groundTruthModelMappedAnswers?.[box];
    // In this dataset/model mapping, the unknown box is represented as `null`.
    // That box should be graded via the final answer check, not by comparing to `null`.
    if (expectedValue === null) return true;
    return value === expectedValue;
  };

  const checkIfVisualAnswerIsCorrect = (box: ModelAnswerKey): boolean => {
    const boxValue = state.boxValues[box];

    if (boxValue === undefined) {
      return false;
    }

    const isBoxCorrect = checkIfStoryGrammarAnswerIsCorrect(
      box,
      boxValue.value,
    );

    if (box === unknownBox) {
      const finalAnswerNum = Number.parseInt(state.finalAnswer, 10);
      return isBoxCorrect && finalAnswerNum === groundTruthUnknownAnswer;
    }

    return isBoxCorrect;
  };

  return (
    <div className="flex flex-col items-center mb-6">
      {/* Equation display */}
      <div className="flex items-center mt-2 mb-12">
        {boxes.map((box, i) => (
          <React.Fragment key={box}>
            <div className="flex items-center">
              <div className="flex flex-col items-center relative">
                <div className="relative">
                  <input
                    type="text"
                    value={getBoxDisplayValue(box)}
                    readOnly={
                      state.phase !== "final-answer" || box !== unknownBox
                    }
                    onDrop={(e) => {
                      e.preventDefault();
                      const value = e.dataTransfer.getData("text/plain");
                      const parsedValue =
                        value === "?" ? null : parseInt(value);
                      dispatch({
                        type: "SET_BOX_VALUE",
                        box,
                        value: {
                          value: parsedValue,
                          isCorrect: checkIfStoryGrammarAnswerIsCorrect(
                            box,
                            parsedValue,
                          ),
                        },
                      });
                    }}
                    onDragOver={(e) => {
                      if (
                        highlightedBox === box ||
                        (state.phase === "final-answer" && box === unknownBox)
                      ) {
                        e.preventDefault();
                      }
                    }}
                    onChange={(e) => {
                      if (
                        state.phase === "final-answer" &&
                        box === unknownBox
                      ) {
                        dispatch({
                          type: "SET_FINAL_ANSWER",
                          value: e.target.value,
                        });
                      }
                    }}
                    className={`w-24 h-20 rounded-lg border-4 text-3xl text-center font-bold bg-white shadow-md outline-none transition-all duration-150 ${getBorderColor(box)}`}
                    placeholder={
                      state.phase === "final-answer" && box === unknownBox
                        ? "?"
                        : ""
                    }
                  />
                  {/* Show checkmark for success phases */}
                  {showCheckmark(box) && (
                    <div className="absolute -top-2 -right-2 bg-green-500 rounded-full p-1 shadow-lg">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                  )}
                </div>
                <span className="text-xs text-gray-700 capitalize tracking-wide mt-1">
                  {labels[box]}
                </span>
              </div>
              {symbols[i] && (
                <span className="text-3xl font-bold text-gray-700 mx-6 -mt-4">
                  {symbols[i]}
                </span>
              )}
            </div>
          </React.Fragment>
        ))}
      </div>

      {/* Submit Story Grammar Button */}
      {state.phase === "story-grammar" && allPromptsComplete && (
        <div className="min-w-120 min-h-40 flex flex-col items-center justify-center mb-4 p-4 bg-purple-50 border border-purple-300 rounded-md">
          <p className="text-center text-lg font-semibold text-purple-700 mb-4">
            Great! You&apos;ve completed all the story grammar prompts.
          </p>
          <button
            onClick={() => dispatch({ type: "SHOW_FINAL_ANSWER_INPUT" })}
            className="bg-purple-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-purple-700"
          >
            Find the missing number
          </button>
        </div>
      )}

      {/* Story Grammar Prompts */}
      {state.phase === "story-grammar" && currentPrompt && (
        <div className="min-w-120 min-h-40 flex flex-col items-center justify-center mb-4 p-4 bg-gray-100 border border-gray-300 rounded-md">
          <p className="text-center text-md font-semibold text-purple-700 mb-4 max-w-lg">
            {currentPrompt.text}
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            {Object.entries(groundTruthModelMappedAnswers || {}).map(
              ([key, value]) => (
                <div
                  key={key}
                  draggable={true}
                  onDragStart={(e) => {
                    const displayValue = value != null ? value.toString() : "?";
                    e.dataTransfer.setData("text/plain", displayValue);
                  }}
                  className="w-20 h-16 rounded-lg border-2 border-dashed flex items-center justify-center text-xl font-bold cursor-pointer transition-all duration-200 bg-blue-100 border-blue-400 text-blue-700 hover:bg-blue-200 hover:border-blue-500"
                >
                  {value !== null && value !== undefined ? value : "?"}
                </div>
              ),
            )}
          </div>
          <div className="flex justify-center mt-4">
            <button
              onClick={() => dispatch({ type: "NEXT_PROMPT" })}
              disabled={state.boxValues[currentPrompt.boxTarget] === undefined}
              className="min-w-30 px-6 py-2 rounded-lg text-white font-semibold transition bg-purple-600 hover:bg-purple-700 disabled:bg-purple-100 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Final Answer Input */}
      {state.phase === "final-answer" && (
        <div className="min-w-450 p-4 bg-gray-100 border border-grey-300 rounded-md">
          <p className="text-left text-lg font-semibold text-purple-700 mb-2">
            What is the missing number?
          </p>
          <div className="flex gap-4 w-full items-center justify-center">
            <input
              type="number"
              className=" border-2 rounded-lg px-4 py-2 border-purple-500 text-center"
              placeholder="Your answer"
              value={state.finalAnswer}
              onChange={(e) =>
                dispatch({ type: "SET_FINAL_ANSWER", value: e.target.value })
              }
            />
            <button
              onClick={handleSubmitFinalAnswer}
              disabled={!state.finalAnswer}
              className="bg-purple-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-purple-700 disabled:bg-gray-300"
            >
              Submit
            </button>
          </div>
        </div>
      )}

      {/* Success Message */}
      {state.phase === "show-success-message" && (
        <div className="min-w-120 min-h-40 flex flex-col items-center justify-center mb-4 p-4 bg-purple-50 border border-purple-300 rounded-md">
          <p className="text-md font-semibold text-green-700 mb-4">
            {isLastQuestion
              ? "🎉 Great job! You've completed the quiz!"
              : "🎉 Great job! Let's keep going :)"}
          </p>
          <p className="text-center text-md font-semibold text-purple-700 max-w-lg">
            Nutikas Guide:
          </p>
          <div className="text-center text-xs text-gray-600 mt-4 mb-6 max-w-xl">
            <p>{problem.modelEvaluations[0].modelAnswerReasoning ?? ""}</p>
          </div>
          <button
            onClick={handleContinue}
            className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-purple-700"
          >
            {isLastQuestion ? "Finish Quiz" : "Continue"}
          </button>
        </div>
      )}

      {/* Failed message: tell them they failed, then offer to see correct answer */}
      {state.phase === "show-failed-message" && (
        <div className="mt-6 text-center">
          <p className="text-md font-semibold text-orange-500 mb-4 max-w-lg mx-auto">
            Not quite — but that&apos;s okay, everyone learns! 💪 Let&apos;s
            see how to work it out together.
          </p>
          <button
            onClick={() => dispatch({ type: "SHOW_CORRECT_MODEL" })}
            className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-purple-700"
          >
            Show me how! 🌟
          </button>
        </div>
      )}

      {/* Show Correct Answer */}
      {state.phase === "show-correct-model" && (
        <div className="min-w-120 min-h-40 flex flex-col items-center justify-center mb-4 p-4 bg-purple-50 border border-purple-300 rounded-md">
          <p className="text-center text-md font-semibold text-purple-700 max-w-lg">
            Nutikas Guide:
          </p>

          {/* Placeholder explanation */}
          <div className="text-center text-xs text-gray-600 mt-4 mb-6 max-w-xl">
            <p>{problem.modelEvaluations[0].modelAnswerReasoning ?? ""}</p>
          </div>

          <button
            onClick={handleContinue}
            className="bg-purple-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-purple-700"
          >
            Continue
          </button>
        </div>
      )}
    </div>
  );
};

export default ModelEvaluation;
