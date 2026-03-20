import pino from "pino";
import { SERVER_CONFIG } from "../config/server";

/**
 * Structured logger.
 * - Development: human-readable coloured output via pino-pretty.
 * - Production:  JSON to stdout, ready to be shipped to any log aggregator
 *   (Datadog, Logtail, Railway, etc.) with zero extra configuration.
 */
export const logger = pino(
  {
    level: SERVER_CONFIG.IS_DEVELOPMENT ? "debug" : "info",
    base: { service: "nutikas-api" },
    timestamp: pino.stdTimeFunctions.isoTime,
  },
  // pino-pretty is a devDependency — only loaded when its transport is set
  SERVER_CONFIG.IS_DEVELOPMENT
    ? pino.transport({
        target: "pino-pretty",
        options: {
          colorize: true,
          translateTime: "SYS:HH:MM:ss",
          ignore: "pid,hostname,service",
        },
      })
    : undefined,
);
