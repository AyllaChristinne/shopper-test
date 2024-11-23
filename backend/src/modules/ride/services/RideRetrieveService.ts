import Ride from "../typeorm/RideEntity";
import { RideRepository } from "../typeorm/RideRepository";

interface IListAllRequest {
  customer_id: string;
}

interface IListByDriverRequest {
  customer_id: string;
  driver_id: number;
}

export class RideRetrieveService {
  private formatResponse(rideResponse: Array<Ride>) {
    return rideResponse.map((ride) => {
      const {
        origin,
        destination,
        distance,
        duration,
        driver,
        value,
        created_at,
      } = ride;

      return {
        origin,
        destination,
        distance,
        duration,
        driver,
        value,
        date: new Date(created_at).toLocaleString("en-GB", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
    });
  }

  public async listAll({ customer_id }: IListAllRequest) {
    const rides = await RideRepository.findByCustomer(customer_id);
    return this.formatResponse(rides);
  }

  public async listByDriver({ customer_id, driver_id }: IListByDriverRequest) {
    const rides = await RideRepository.findByDriver(customer_id, driver_id);
    return this.formatResponse(rides);
  }
}
