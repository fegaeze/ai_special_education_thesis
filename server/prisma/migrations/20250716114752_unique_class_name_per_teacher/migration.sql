/*
  Warnings:

  - A unique constraint covering the columns `[teacherId,name]` on the table `Class` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Class_teacherId_name_key" ON "Class"("teacherId", "name");
