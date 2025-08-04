-- AlterTable
ALTER TABLE "ModelEvaluation" ALTER COLUMN "answer" DROP NOT NULL,
ALTER COLUMN "modelAnswers" DROP NOT NULL,
ALTER COLUMN "storyGrammarPrompts" DROP NOT NULL,
ALTER COLUMN "modelAnswerReasoning" DROP NOT NULL,
ALTER COLUMN "subCategoryReasoning" DROP NOT NULL;
