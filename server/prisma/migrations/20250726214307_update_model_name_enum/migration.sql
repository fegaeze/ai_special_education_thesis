/*
  Warnings:

  - Changed the type of `modelName` on the `ModelEvaluation` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "AIModelName" AS ENUM ('OPENAI_GPT_4_1', 'ANTHROPIC_CLAUDE_SONNET_4', 'GOOGLE_GEMINI_2_5_FLASH');

-- AlterTable
ALTER TABLE "ModelEvaluation" DROP COLUMN "modelName",
ADD COLUMN     "modelName" "AIModelName" NOT NULL;

-- DropEnum
DROP TYPE "ModelName";
