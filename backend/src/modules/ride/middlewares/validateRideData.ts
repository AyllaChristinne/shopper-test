import { Request, Response, NextFunction } from "express";
import { ErrorCodes, errorResponse } from "../../../shared/utils/errorResponse";

export const validateRideEstimateData = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { customer_id, origin, destination } = req.body;

  if (!customer_id || !origin || !destination) {
    res
      .status(400)
      .json(
        errorResponse(
          ErrorCodes.INVALID_DATA,
          "Todos os campos devem ser preenchidos"
        )
      );
    return;
  }

  if (origin === destination) {
    res
      .status(400)
      .json(
        errorResponse(
          ErrorCodes.INVALID_DATA,
          "Origem e destino não podem ser iguais"
        )
      );
    return;
  }

  return next();
};
