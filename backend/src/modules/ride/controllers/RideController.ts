import { NextFunction, Request, Response } from "express";
import { RideEstimateService } from "../services/RideEstimateService";
import RequestError, { ErrorCodes } from "../../../shared/error/RequestError";
import {
  isValidDistanceForDriver,
  isValidDriverId,
} from "../utils/driver.utils";
import { RideConfirmService } from "../services/RideConfirmService";
import { handleAsyncErrors } from "../../../shared/error/handleAsyncErrors";

class RideController {
  public estimate = handleAsyncErrors(
    async (req: Request, res: Response, next: NextFunction) => {
      const estimateService = new RideEstimateService();
      const { origin, destination } = req.body;

      try {
        const response = await estimateService.estimate(origin, destination);
        res.status(200).json(response);
      } catch (err) {
        console.error("Error in estimate controller:", err);
        return next(
          new RequestError(ErrorCodes.INVALID_DATA, "Failed to estimate ride")
        );
      }
    }
  );

  public confirm = handleAsyncErrors(
    async (req: Request, res: Response, next: NextFunction) => {
      const confirmService = new RideConfirmService();
      const {
        customer_id,
        origin,
        destination,
        distance,
        duration,
        driver,
        value,
      } = req.body;

      console.log("driver", driver);

      if (!isValidDriverId(driver.id)) {
        return next(
          new RequestError(ErrorCodes.DRIVER_NOT_FOUND, "Invalid driver id")
        );
      }

      if (!isValidDistanceForDriver(driver.id, distance)) {
        return next(
          new RequestError(
            ErrorCodes.INVALID_DISTANCE,
            "Invalid distance for selected driver"
          )
        );
      }

      try {
        confirmService.saveRide({
          customer_id,
          origin,
          destination,
          distance,
          duration,
          driver,
          value,
        });

        res.status(200).json({ success: true });
      } catch (err) {
        console.error("Error in estimate controller:", err);
        return next(
          new RequestError(ErrorCodes.INVALID_DATA, "Failed to estimate ride")
        );
      }
    }
  );
}

export default RideController;
