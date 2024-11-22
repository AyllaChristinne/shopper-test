import { Router } from "express";
import RideController from "../controllers/RideController";
import { celebrate, Joi, Segments } from "celebrate";

const routes = Router();
const rideController = new RideController();

const validateRideEstimateData = celebrate({
  [Segments.BODY]: Joi.object()
    .keys({
      customer_id: Joi.string().uuid().required(),
      origin: Joi.string().required(),
      destination: Joi.string().required(),
    })
    .custom((value, helper) => {
      if (value.origin === value.destination) {
        return helper.error("Origin and destination must be different");
      }
      return value;
    }),
});

const validateRideConfirmData = celebrate({
  [Segments.BODY]: Joi.object().keys({
    customer_id: Joi.string().uuid().required(),
    origin: Joi.string().required(),
    destination: Joi.string().required(),
    distance: Joi.number().required(),
    duration: Joi.string().required(),
    driver: Joi.object().required(),
    value: Joi.number().required(),
  }),
});

routes.post("/estimate", validateRideEstimateData, rideController.estimate);
routes.patch("/confirm", validateRideConfirmData, rideController.confirm);
/* routes.get("/:customerId", , rideController.list); */

export default routes;
