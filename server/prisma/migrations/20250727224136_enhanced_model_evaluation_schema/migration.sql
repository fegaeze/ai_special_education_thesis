/*
  Warnings:

  - You are about to drop the column `groundTruthCategory` on the `Problem` table. All the data in the column will be lost.
  - You are about to drop the column `groundTruthSubcategory` on the `Problem` table. All the data in the column will be lost.
  - You are about to drop the column `modelAnswers` on the `Problem` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[groundTruthId]` on the table `Problem` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `groundTruthId` to the `Problem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ModelEvaluation" ADD COLUMN     "answer" INTEGER,
ADD COLUMN     "isAnswerCorrect" BOOLEAN,
ADD COLUMN     "isModelMappingCorrect" BOOLEAN,
ADD COLUMN     "modelAnswers" JSONB,
ADD COLUMN     "reasoning" TEXT,
ADD COLUMN     "storyGrammarPrompts" JSONB;

-- AlterTable
ALTER TABLE "Problem" DROP COLUMN "groundTruthCategory",
DROP COLUMN "groundTruthSubcategory",
DROP COLUMN "modelAnswers",
ADD COLUMN     "groundTruthId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "GroundTruth" (
    "id" SERIAL NOT NULL,
    "category" "Category" NOT NULL,
    "subcategory" "Subcategory" NOT NULL,
    "answer" INTEGER NOT NULL,
    "modelAnswers" JSONB NOT NULL,

    CONSTRAINT "GroundTruth_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Problem_groundTruthId_key" ON "Problem"("groundTruthId");

-- AddForeignKey
ALTER TABLE "Problem" ADD CONSTRAINT "Problem_groundTruthId_fkey" FOREIGN KEY ("groundTruthId") REFERENCES "GroundTruth"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
