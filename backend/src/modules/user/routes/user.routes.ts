import { Router } from "express";
import UserController from "../controllers/UserController";

const routes = Router();
const userController = new UserController();

routes.route("/user").post(userController.createOrLogin);

export default routes;
