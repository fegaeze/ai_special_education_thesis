/*
  Warnings:

  - You are about to drop the column `problemId` on the `GroundTruth` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "GroundTruth" DROP CONSTRAINT "GroundTruth_problemId_fkey";

-- DropIndex
DROP INDEX "GroundTruth_problemId_key";

-- AlterTable
ALTER TABLE "GroundTruth" DROP COLUMN "problemId";

-- AddForeignKey
ALTER TABLE "Problem" ADD CONSTRAINT "Problem_groundTruthId_fkey" FOREIGN KEY ("groundTruthId") REFERENCES "GroundTruth"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
