import { NextFunction, Request, Response } from "express";
import { CelebrateError } from "celebrate";
import RequestError, { ErrorCodes } from "./RequestError";

export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof CelebrateError) {
    const errorDetails = err.details;

    if (errorDetails) {
      const errorMessages = Array.from(errorDetails.values())
        .map((validationError) => validationError.message)
        .join(", ");

      return res.status(400).json({
        error_code: ErrorCodes.INVALID_DATA,
        message: errorMessages,
      });
    }
  } else if (err instanceof RequestError) {
    return res.status(400).json({
      error_code: err.error_code,
      error_description: err.error_description,
    });
  }

  return res.status(500).json({
    status: "error",
    message: "Internal server error!",
  });
}
