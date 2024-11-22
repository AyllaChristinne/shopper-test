import { Router } from "express";
import RideController from "../controllers/RideController";
import { validateRideEstimateData } from "../middlewares/validateRideData";

const routes = Router();
const rideController = new RideController();

routes.post("/estimate", validateRideEstimateData, rideController.estimate);
routes.route("/confirm").patch(rideController.confirm);
routes.route("/:customerId").get();

export default routes;
