import { AppDataSource } from "../../../shared/typeorm/data-source";
import Ride from "./RideEntity";

export const RideRepository = AppDataSource.getRepository(Ride).extend({
  async findById(id: string) {
    return this.createQueryBuilder("ride")
      .where("ride.id = :id", { id })
      .getOne();
  },

  async findByDriver(id: number) {
    return this.createQueryBuilder("ride")
      .where("ride.driver.id = :id", { id })
      .getOne();
  },
});
