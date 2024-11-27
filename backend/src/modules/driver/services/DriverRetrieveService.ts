import Driver from "../typeorm/DriverEntity";
import { DriverRepository } from "../typeorm/DriverRepository";

export class DriverRetrieveService {
  public async listAll() {
    const drivers = await DriverRepository.find();
    return drivers;
  }

  public async listByDistance(distance: number) {
    const drivers = await DriverRepository.findByDistance(distance);
    return drivers;
  }
}
