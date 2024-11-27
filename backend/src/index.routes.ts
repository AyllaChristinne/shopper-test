import { Router } from "express";
import rideRoutes from "./modules/ride/routes/ride.routes";
import driverRoutes from "./modules/driver/routes/driver.routes";

const routes = Router();

routes.use("/ride", rideRoutes);
routes.use("/driver", driverRoutes);

export default routes;
