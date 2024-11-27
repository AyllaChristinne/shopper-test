import { NextFunction, Request, Response } from "express";

import RequestError, { ErrorCodes } from "../../../shared/error/RequestError";
import { handleAsyncErrors } from "../../../shared/error/handleAsyncErrors";
import { DriverRetrieveService } from "../services/DriverRetrieveService";

class DriverController {
  public listDrivers = handleAsyncErrors(
    async (req: Request, res: Response, next: NextFunction) => {
      const driverService = new DriverRetrieveService();
      const { distance } = req.query;
      let response;

      try {
        if (distance) {
          response = await driverService.listByDistance(Number(distance));
        } else {
          response = await driverService.listAll();
        }

        res.status(200).json(response);
      } catch (err) {
        console.error("Error getting drivers:", err);
        return next(
          new RequestError(ErrorCodes.INVALID_DATA, "Error getting drivers")
        );
      }
    }
  );
}

export default DriverController;
