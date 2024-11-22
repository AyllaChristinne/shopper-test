import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";

import UserController from "../controllers/UserController";

const routes = Router();
const userController = new UserController();

routes.post(
  "/",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string().email().required(),
    }),
  }),
  userController.createOrLogin
);

export default routes;
