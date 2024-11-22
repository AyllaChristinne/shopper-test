import { Router } from "express";
import rideRoutes from "./modules/ride/routes/ride.routes";
import userRoutes from "./modules/user/routes/user.routes";

const routes = Router();

routes.use("/ride", rideRoutes);
routes.use("/user", userRoutes);

export default routes;
