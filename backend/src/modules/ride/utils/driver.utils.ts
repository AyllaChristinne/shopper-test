import { DriverRetrieveService } from "../../driver/services/DriverRetrieveService";
import { IDriver } from "../types";

async function getDrivers() {
  const driverService = new DriverRetrieveService();
  return await driverService.listAll();
}

async function getDriversOptions(distance: number) {
  const drivers = await getDrivers();
  return drivers.filter((driver) => distance >= driver.mindistance);
}

async function isValidDistanceForDriver(driver_id: number, distance: number) {
  const drivers = await getDrivers();
  const driver = drivers.find((driver: IDriver) => driver_id === driver.id);
  if (driver) {
    return distance >= driver.mindistance;
  }

  return false;
}

async function isValidDriverId(id: number) {
  const drivers = await getDrivers();
  return (drivers as Array<IDriver>).some((driver) => driver.id === id);
}

export { getDriversOptions, isValidDistanceForDriver, isValidDriverId };
