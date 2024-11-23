import { IDriver } from "../types";
const drivers = require("../../../data/drivers.json");

function getDriversOptions(distance: number) {
  return (drivers as Array<IDriver>).filter(
    (driver) => distance >= driver.minDistance
  );
}

function isValidDistanceForDriver(
  driver_id: number,
  distance: number
): boolean {
  const driver = drivers.find((driver: IDriver) => driver_id === driver.id);
  if (driver) {
    return distance >= driver.minDistance;
  }
  return false;
}

function isValidDriverId(id: number): boolean {
  return (drivers as Array<IDriver>).some((driver) => driver.id === id);
}

export { getDriversOptions, isValidDistanceForDriver, isValidDriverId };
