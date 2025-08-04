/*
  Warnings:

  - You are about to drop the column `maxScore` on the `QuizAttempt` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `QuizAttempt` table. All the data in the column will be lost.
  - You are about to drop the column `totalScore` on the `QuizAttempt` table. All the data in the column will be lost.
  - You are about to drop the column `hintsUsed` on the `QuizResponse` table. All the data in the column will be lost.
  - You are about to drop the column `questionOrder` on the `QuizResponse` table. All the data in the column will be lost.
  - You are about to drop the column `endTime` on the `QuizSession` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `QuizSession` table. All the data in the column will be lost.
  - You are about to drop the column `settings` on the `QuizSession` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `QuizSession` table. All the data in the column will be lost.
  - You are about to drop the `ProblemAttempt` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProblemAttempt" DROP CONSTRAINT "ProblemAttempt_problemId_fkey";

-- DropForeignKey
ALTER TABLE "ProblemAttempt" DROP CONSTRAINT "ProblemAttempt_studentId_fkey";

-- AlterTable
ALTER TABLE "QuizAttempt" DROP COLUMN "maxScore",
DROP COLUMN "status",
DROP COLUMN "totalScore";

-- AlterTable
ALTER TABLE "QuizResponse" DROP COLUMN "hintsUsed",
DROP COLUMN "questionOrder",
ADD COLUMN     "finalAnswerCorrect" BOOLEAN,
ADD COLUMN     "storyGrammarAnswers" JSONB;

-- AlterTable
ALTER TABLE "QuizSession" DROP COLUMN "endTime",
DROP COLUMN "name",
DROP COLUMN "settings",
DROP COLUMN "status";

-- DropTable
DROP TABLE "ProblemAttempt";
