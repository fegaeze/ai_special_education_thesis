/*
  Warnings:

  - You are about to drop the column `loginCode` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `nickname` on the `Student` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userName]` on the table `Student` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userName` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Student_loginCode_key";

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "loginCode",
DROP COLUMN "nickname",
ADD COLUMN     "userName" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Student_userName_key" ON "Student"("userName");
