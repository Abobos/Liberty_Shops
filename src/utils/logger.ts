import { createLogger, format, transports } from "winston";

const logger = createLogger({
  level: "info",
  format: format.combine(
    format.json(),
    format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    })
  ),
  transports: [new transports.File({ filename: "error.log", level: "error" })],
  exitOnError: false,
});

process.env.NODE_ENV !== "production" &&
  logger.add(
    new transports.Console({
      format: format.simple(),
    })
  );

export default logger;
