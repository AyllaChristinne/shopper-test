import { NextFunction, Request, Response } from "express";

import RequestError, { ErrorCodes } from "../../../shared/error/RequestError";
import { RideEstimateService } from "../services/RideEstimateService";
import { RideConfirmService } from "../services/RideConfirmService";
import { RideRetrieveService } from "../services/RideRetrieveService";
import { handleAsyncErrors } from "../../../shared/error/handleAsyncErrors";
import {
  isValidDistanceForDriver,
  isValidDriverId,
} from "../utils/driver.utils";

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
          new RequestError(ErrorCodes.INVALID_DATA, "Erro ao solicitar viagem")
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
      const isValidId = await isValidDriverId(driver.id);
      const isValidDistance = await isValidDistanceForDriver(
        driver.id,
        distance
      );

      if (!isValidId) {
        return next(
          new RequestError(
            ErrorCodes.DRIVER_NOT_FOUND,
            "ID de motorista inválido"
          )
        );
      }

      if (!isValidDistance) {
        return next(
          new RequestError(
            ErrorCodes.INVALID_DISTANCE,
            "Distância invalida para o motorista selecionado"
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
          new RequestError(ErrorCodes.INVALID_DATA, "Erro ao solicitar viagem")
        );
      }
    }
  );

  public retrieve = handleAsyncErrors(
    async (req: Request, res: Response, next: NextFunction) => {
      const retrieveService = new RideRetrieveService();
      const { customer_id } = req.params;
      const driver_id = Number(req.query.driver_id);
      const isValidId = await isValidDriverId(driver_id);
      let ridesHistory;

      try {
        if (!driver_id) {
          ridesHistory = await retrieveService.listAll({ customer_id });
        } else if (!isValidId) {
          return next(
            new RequestError(
              ErrorCodes.INVALID_DRIVER,
              "ID de motorista inválido"
            )
          );
        } else {
          ridesHistory = await retrieveService.listByDriver({
            customer_id,
            driver_id,
          });
        }

        if (!ridesHistory.length) {
          return next(
            new RequestError(
              ErrorCodes.NO_RIDES_FOUND,
              "Nenhuma corrida encontrada para esse usuário"
            )
          );
        }

        res.status(200).json({ customer_id, rides: ridesHistory });
      } catch (err) {
        return next(
          new RequestError(ErrorCodes.INVALID_DATA, "Erro ao solicitar viagem")
        );
      }
    }
  );
}

export default RideController;
