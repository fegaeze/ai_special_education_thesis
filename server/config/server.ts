import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Environment Configuration
const PORT = process.env.PORT || 4000;
const NODE_ENV = process.env.NODE_ENV || "development";
const DATABASE_URL = process.env.DATABASE_URL;
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "7d";
const DEFAULT_MODEL = process.env.DEFAULT_MODEL || "ANTHROPIC_CLAUDE_SONNET_4";

// Configuration validation
if (!DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is required");
}

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET environment variable is required");
}

export const SERVER_CONFIG = {
  PORT: parseInt(PORT.toString(), 10),
  NODE_ENV,
  DATABASE_URL,
  JWT_SECRET,
  JWT_EXPIRES_IN,
  DEFAULT_MODEL,
  IS_PRODUCTION: NODE_ENV === "production",
  IS_DEVELOPMENT: NODE_ENV === "development",
} as const;

// CORS Configuration
export const CORS_CONFIG = {
  origin: process.env.NODE_ENV === "production" 
    ? [process.env.CORS_ORIGIN || "https://nutikas.vercel.app"]
    : ["http://localhost:3000", "http://localhost:3001"],
  credentials: true,
  optionsSuccessStatus: 200,
} as const;
