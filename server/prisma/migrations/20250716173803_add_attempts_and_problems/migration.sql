/*
  Warnings:

  - You are about to drop the `StudentProgress` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "StudentProgress" DROP CONSTRAINT "StudentProgress_studentId_fkey";

-- DropTable
DROP TABLE "StudentProgress";

-- CreateTable
CREATE TABLE "Problem" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "Problem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Attempt" (
    "id" SERIAL NOT NULL,
    "studentId" INTEGER NOT NULL,
    "problemId" INTEGER NOT NULL,
    "isCorrect" BOOLEAN NOT NULL,
    "attempts" INTEGER NOT NULL,
    "timeSpent" INTEGER NOT NULL,
    "revealed" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Attempt_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Attempt" ADD CONSTRAINT "Attempt_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attempt" ADD CONSTRAINT "Attempt_problemId_fkey" FOREIGN KEY ("problemId") REFERENCES "Problem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
