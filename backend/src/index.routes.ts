import { Router } from "express";
import rideRoutes from "./modules/ride/routes/ride.routes";

const routes = Router();

routes.use("/ride", rideRoutes);

export default routes;
