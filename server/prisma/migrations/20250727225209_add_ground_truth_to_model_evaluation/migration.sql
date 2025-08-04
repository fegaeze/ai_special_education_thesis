/*
  Warnings:

  - You are about to drop the column `agreementScore` on the `ModelEvaluation` table. All the data in the column will be lost.
  - You are about to drop the column `confidenceScore` on the `ModelEvaluation` table. All the data in the column will be lost.
  - You are about to drop the column `output` on the `ModelEvaluation` table. All the data in the column will be lost.
  - You are about to drop the column `reasoning` on the `ModelEvaluation` table. All the data in the column will be lost.
  - You are about to drop the column `subReasoning` on the `ModelEvaluation` table. All the data in the column will be lost.
  - Added the required column `groundTruthId` to the `ModelEvaluation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subCategoryReasoning` to the `ModelEvaluation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `supercategoryReasoning` to the `ModelEvaluation` table without a default value. This is not possible if the table is not empty.
  - Made the column `answer` on table `ModelEvaluation` required. This step will fail if there are existing NULL values in that column.
  - Made the column `isAnswerCorrect` on table `ModelEvaluation` required. This step will fail if there are existing NULL values in that column.
  - Made the column `isModelMappingCorrect` on table `ModelEvaluation` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "ModelEvaluation" DROP COLUMN "agreementScore",
DROP COLUMN "confidenceScore",
DROP COLUMN "output",
DROP COLUMN "reasoning",
DROP COLUMN "subReasoning",
ADD COLUMN     "groundTruthId" INTEGER NOT NULL,
ADD COLUMN     "modelAnswerReasoning" TEXT,
ADD COLUMN     "subCategoryReasoning" TEXT NOT NULL,
ADD COLUMN     "supercategoryReasoning" TEXT NOT NULL,
ALTER COLUMN "answer" SET NOT NULL,
ALTER COLUMN "isAnswerCorrect" SET NOT NULL,
ALTER COLUMN "isModelMappingCorrect" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "ModelEvaluation" ADD CONSTRAINT "ModelEvaluation_groundTruthId_fkey" FOREIGN KEY ("groundTruthId") REFERENCES "GroundTruth"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
