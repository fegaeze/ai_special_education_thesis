import "dotenv/config";
import express, { Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet";

import teacherAuthRoutes from "./routes/teacher-auth.route";
import classRoutes from "./routes/classes.route";
import problemsRoutes from "./routes/problems.route";
import quizRoutes from "./routes/quiz.route";
import { errorHandler } from "./middleware/error-handler";
import { SERVER_CONFIG, CORS_CONFIG } from "./config/server";
import { logger } from "./lib/logger";

const app = express();

app.use(helmet());
app.use(cors(CORS_CONFIG));
app.use(cookieParser());
app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  res.json({
    message: "Nutikas API Server",
    status: "running",
    timestamp: new Date().toISOString(),
  });
});

app.use("/api/classes", classRoutes);
app.use("/api/teachers/auth", teacherAuthRoutes);
app.use("/api/problems", problemsRoutes);
app.use("/api/quiz", quizRoutes);

app.use(errorHandler);

app.listen(SERVER_CONFIG.PORT, () => {
  logger.info(
    { port: SERVER_CONFIG.PORT, env: SERVER_CONFIG.NODE_ENV },
    "Server started",
  );
});
