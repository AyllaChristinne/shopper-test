import { Router } from "express";
import RideController from "../controllers/RideController";
import { celebrate, Joi, Segments } from "celebrate";

const routes = Router();
const rideController = new RideController();

routes.post(
  "/estimate",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      customer_id: Joi.string().required(),
      origin: Joi.string().required(),
      destination: Joi.string()
        .required()
        .disallow(Joi.ref("origin"))
        .messages({
          "any.invalid": "destination cannot be the same as origin",
        }),
    }),
  }),
  rideController.estimate
);
routes.patch(
  "/confirm",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      customer_id: Joi.string().required(),
      origin: Joi.string().required(),
      destination: Joi.string().required(),
      distance: Joi.number().required(),
      duration: Joi.string().required(),
      driver: Joi.object().required(),
      value: Joi.number().required(),
    }),
  }),
  rideController.confirm
);
routes.get(
  "/:customer_id",
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      customer_id: Joi.string().required(),
    }),
    [Segments.QUERY]: Joi.object().keys({
      driver_id: Joi.number().optional(),
    }),
  }),
  rideController.retrieve
);

export default routes;
