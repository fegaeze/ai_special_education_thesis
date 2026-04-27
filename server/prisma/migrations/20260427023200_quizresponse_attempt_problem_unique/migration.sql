-- Add uniqueness so quiz submit can be idempotent.
CREATE UNIQUE INDEX "QuizResponse_attemptId_problemId_key"
ON "public"."QuizResponse"("attemptId", "problemId");

