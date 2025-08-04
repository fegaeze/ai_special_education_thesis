-- AlterTable
ALTER TABLE "QuizSession" ADD COLUMN     "endTime" TIMESTAMP(3),
ADD COLUMN     "status" "QuizStatus" NOT NULL DEFAULT 'ACTIVE';
