import { TRideData } from "../types";
import { RideRepository } from "../typeorm/RideRepository";

export class RideConfirmService {
  public async saveRide(rideData: TRideData) {
    const ride = RideRepository.create(rideData);
    await RideRepository.save(ride);
  }
}
