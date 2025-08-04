/*
  Warnings:

  - Changed the type of `modelName` on the `ModelEvaluation` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `predictedCategory` on the `ModelEvaluation` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `predictedSubcategory` on the `ModelEvaluation` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Made the column `answer` on table `Problem` required. This step will fail if there are existing NULL values in that column.
  - Changed the type of `groundTruthCategory` on the `Problem` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `groundTruthSubcategory` on the `Problem` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Category" AS ENUM ('Change', 'Combine', 'Compare', 'Unknown');

-- CreateEnum
CREATE TYPE "Subcategory" AS ENUM ('CWU', 'CPU', 'CJWU', 'CJPU', 'CSWU', 'CSPU', 'CMDU', 'CMLQU', 'CMSQU', 'CLDU', 'CLLQU', 'CLSQU');

-- CreateEnum
CREATE TYPE "ModelName" AS ENUM ('OPENAI_GPT_4_1', 'ANTHROPIC_CLAUDE_SONNET_4', 'GOOGLE_GEMINI_2_5_FLASH');

-- AlterTable
ALTER TABLE "ModelEvaluation" DROP COLUMN "modelName",
ADD COLUMN     "modelName" "ModelName" NOT NULL,
DROP COLUMN "predictedCategory",
ADD COLUMN     "predictedCategory" "Category" NOT NULL,
DROP COLUMN "predictedSubcategory",
ADD COLUMN     "predictedSubcategory" "Subcategory" NOT NULL;

-- AlterTable
ALTER TABLE "Problem" ALTER COLUMN "answer" SET NOT NULL,
DROP COLUMN "groundTruthCategory",
ADD COLUMN     "groundTruthCategory" "Category" NOT NULL,
DROP COLUMN "groundTruthSubcategory",
ADD COLUMN     "groundTruthSubcategory" "Subcategory" NOT NULL;
