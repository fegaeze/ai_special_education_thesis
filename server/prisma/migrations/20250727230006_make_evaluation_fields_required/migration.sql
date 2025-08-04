/*
  Warnings:

  - A unique constraint covering the columns `[problemId]` on the table `GroundTruth` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `problemId` to the `GroundTruth` table without a default value. This is not possible if the table is not empty.
  - Made the column `tokenUsage` on table `ModelEvaluation` required. This step will fail if there are existing NULL values in that column.
  - Made the column `modelAnswers` on table `ModelEvaluation` required. This step will fail if there are existing NULL values in that column.
  - Made the column `storyGrammarPrompts` on table `ModelEvaluation` required. This step will fail if there are existing NULL values in that column.
  - Made the column `modelAnswerReasoning` on table `ModelEvaluation` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Problem" DROP CONSTRAINT "Problem_groundTruthId_fkey";

-- AlterTable
ALTER TABLE "GroundTruth" ADD COLUMN     "problemId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "ModelEvaluation" ALTER COLUMN "tokenUsage" SET NOT NULL,
ALTER COLUMN "modelAnswers" SET NOT NULL,
ALTER COLUMN "storyGrammarPrompts" SET NOT NULL,
ALTER COLUMN "modelAnswerReasoning" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "GroundTruth_problemId_key" ON "GroundTruth"("problemId");

-- AddForeignKey
ALTER TABLE "GroundTruth" ADD CONSTRAINT "GroundTruth_problemId_fkey" FOREIGN KEY ("problemId") REFERENCES "Problem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
