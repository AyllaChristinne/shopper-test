import { AppDataSource } from "../../../shared/typeorm/data-source";
import Driver from "./DriverEntity";

export const DriverRepository = AppDataSource.getRepository(Driver).extend({
  async findByDistance(distance: number) {
    return this.createQueryBuilder("driver")
      .where("driver.mindistance >= :distance", { distance })
      .getMany();
  },
});
