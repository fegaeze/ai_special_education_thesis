import "dotenv/config";
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";

import teacherAuthRoutes from "./routes/teacherAuth.route";
import classRoutes from "./routes/classes.route";
import problemsRoutes from "./routes/problems.route";
import quizRoutes from "./routes/quiz.route";
import { errorHandler } from "./middleware/errorHandler";
import { SERVER_CONFIG, CORS_CONFIG } from "./config/server";

const app = express();

app.use(cors(CORS_CONFIG));
app.use(express.json());

// Health check route
app.get("/", (req: Request, res: Response) => {
  res.json({ 
    message: "Nutikas API Server", 
    status: "running",
    timestamp: new Date().toISOString()
  });
});

app.use("/api/classes", classRoutes);
app.use("/api/teachers/auth", teacherAuthRoutes);
app.use("/api/problems", problemsRoutes);
app.use("/api/quiz", quizRoutes);

// Global error handler
app.use(errorHandler);

module.exports = app;

app.listen(SERVER_CONFIG.PORT, () => {
  console.log(
    `Server running on port ${SERVER_CONFIG.PORT} in ${SERVER_CONFIG.NODE_ENV} mode`,
  );
});
