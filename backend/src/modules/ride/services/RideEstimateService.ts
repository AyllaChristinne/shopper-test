import "dotenv/config";
const driversData = require("../../../data/drivers.json");

interface ILocation {
  latitude: number;
  longitude: number;
}

interface IRouteData {
  routes: Array<{
    legs: Array<{
      startLocation: ILocation;
      endLocation: ILocation;
    }>;
    distanceMeters: number;
    duration: string;
  }>;
}

interface IDriverOption {
  id: number;
  name: string;
  description: string;
  vehicle: string;
  review: {
    rating: string;
    comment: string;
  };
  value: number;
}

type TDriverData = IDriverOption & { minDistance: number };

export class RideEstimateService {
  private async getRoute(
    origin: string,
    destination: string
  ): Promise<IRouteData> {
    const url = `https://routes.googleapis.com/directions/v2:computeRoutes`;
    const headers = new Headers({
      "Content-Type": "application/json",
      "X-Goog-Api-Key": process.env.GOOGLE_API_KEY || "",
      "X-Goog-FieldMask":
        "routes.legs.startLocation,routes.legs.endLocation,routes.distanceMeters,routes.duration",
    });

    try {
      const response = await fetch(url, {
        headers,
        method: "POST",
        body: JSON.stringify({
          origin: {
            address: origin,
          },
          destination: {
            address: destination,
          },
          travelMode: "DRIVE",
        }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      return data as IRouteData;
    } catch (error) {
      console.error("Erro ao fazer a requisição para a API:", error);
      throw new Error("Failed to fetch route data");
    }
  }

  private getDriversOptions(distance: number) {
    const availableDrivers = (
      driversData as Array<IDriverOption & { minDistance: number }>
    ).filter((driver) => distance >= driver.minDistance);

    const driverOptions = availableDrivers.map((driver) => ({
      id: driver.id,
      name: driver.name,
      description: driver.description,
      vehicle: driver.vehicle,
      review: driver.review,
      value: Math.round((distance / 1000) * driver.value * 100) / 100,
    }));

    return driverOptions;
  }

  private formatResponse(
    routeData: IRouteData,
    driversOptions: Array<IDriverOption>
  ) {
    return {
      origin: {
        latitude: routeData.routes[0].legs[0].startLocation.latitude,
        longitude: routeData.routes[0].legs[0].startLocation.longitude,
      },
      destination: {
        latitude: routeData.routes[0].legs[0].endLocation.latitude,
        longitude: routeData.routes[0].legs[0].endLocation.longitude,
      },
      distance: routeData.routes[0].distanceMeters,
      duration: routeData.routes[0].duration,
      options: driversOptions,
      routeResponse: {},
    };
  }

  public async estimate(origin: string, destination: string) {
    try {
      const routeData = await this.getRoute(origin, destination);
      const driversOptions = this.getDriversOptions(
        routeData.routes[0].distanceMeters
      );

      return this.formatResponse(routeData, driversOptions);
    } catch (error) {
      console.error("Error estimating ride:", error);
      throw new Error("Failed to estimate ride");
    }
  }
}
