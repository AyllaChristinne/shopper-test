import { Request, Response } from "express";
import { RideEstimateService } from "../services/RideEstimateService";
import { ErrorCodes, errorResponse } from "../../../shared/utils/errorResponse";

class RideController {
  public async estimate(req: Request, res: Response) {
    const estimateService = new RideEstimateService();
    const { origin, destination } = req.body;

    try {
      const response = await estimateService.estimate(origin, destination);
      res.status(200).json(response);
    } catch (err) {
      console.error("Error in estimate controller:", err);
      res
        .status(400)
        .json(
          errorResponse(ErrorCodes.INVALID_DATA, "Failed to estimate ride")
        );
    }
  }
}

export default RideController;
