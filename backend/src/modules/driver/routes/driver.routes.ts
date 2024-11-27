import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";
import DriverController from "../controllers/DriverController";

const routes = Router();
const driverController = new DriverController();

routes.get(
  "/",
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      distance: Joi.number().optional(),
    }),
  }),
  driverController.listDrivers
);

export default routes;
