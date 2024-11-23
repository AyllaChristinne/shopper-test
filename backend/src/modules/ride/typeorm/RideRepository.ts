import { AppDataSource } from "../../../shared/typeorm/data-source";
import Ride from "./RideEntity";

export const RideRepository = AppDataSource.getRepository(Ride).extend({
  async findByCustomer(customer_id: string) {
    return this.createQueryBuilder("ride")
      .where("ride.customer_id = :customer_id", { customer_id })
      .orderBy("ride.created_at", "DESC")
      .getMany();
  },

  async findByDriver(customer_id: string, driver_id: number) {
    return this.createQueryBuilder("ride")
      .where("ride.customer_id = :customer_id", { customer_id })
      .andWhere("ride.driver ->> 'id' = :driver_id", {
        driver_id: String(driver_id),
      })
      .orderBy("ride.created_at", "DESC")
      .getMany();
  },
});
