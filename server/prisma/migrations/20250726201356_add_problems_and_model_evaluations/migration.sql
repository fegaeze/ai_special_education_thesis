/*
  Warnings:

  - Added the required column `groundTruthCategory` to the `Problem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `groundTruthSubcategory` to the `Problem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Problem" ADD COLUMN     "answer" INTEGER,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "groundTruthCategory" TEXT NOT NULL,
ADD COLUMN     "groundTruthSubcategory" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "ModelEvaluation" (
    "id" SERIAL NOT NULL,
    "problemId" INTEGER NOT NULL,
    "modelName" TEXT NOT NULL,
    "predictedCategory" TEXT NOT NULL,
    "predictedSubcategory" TEXT NOT NULL,
    "output" TEXT NOT NULL,
    "subReasoning" TEXT NOT NULL,
    "confidenceScore" INTEGER,
    "agreementScore" DOUBLE PRECISION,
    "tokenUsage" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ModelEvaluation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ModelEvaluation" ADD CONSTRAINT "ModelEvaluation_problemId_fkey" FOREIGN KEY ("problemId") REFERENCES "Problem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
