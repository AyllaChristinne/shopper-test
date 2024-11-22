import { Router } from "express";
import RideController from "../modules/ride/controllers/RideController";
import { validateRideEstimateData } from "../modules/ride/middlewares/validateRideData";

const routes = Router();
const rideController = new RideController();

routes.post(
  "/ride/estimate",
  validateRideEstimateData,
  rideController.estimate
);
routes.route("/ride/confirm").patch();
routes.route("/ride/confirm/:customerId").get();

routes.route("/user").get().post();

export default routes;
