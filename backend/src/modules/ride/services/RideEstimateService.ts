import { IDriver, IRouteData } from "../types";
import { getDriversOptions } from "../utils/driver.utils";
const driversData = require("../../../data/drivers.json");

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

  private formatResponse(
    routeResponse: IRouteData,
    driversOptions: Array<IDriver>
  ) {
    const availableDrivers = driversOptions.map((driver) => ({
      id: driver.id,
      name: driver.name,
      description: driver.description,
      vehicle: driver.vehicle,
      review: driver.review,
      value:
        Math.round(
          (routeResponse.routes[0].distanceMeters / 1000) * driver.value * 100
        ) / 100,
    }));

    return {
      origin: {
        latitude: routeResponse.routes[0].legs[0].startLocation.latLng.latitude,
        longitude:
          routeResponse.routes[0].legs[0].startLocation.latLng.longitude,
      },
      destination: {
        latitude: routeResponse.routes[0].legs[0].endLocation.latLng.latitude,
        longitude: routeResponse.routes[0].legs[0].endLocation.latLng.longitude,
      },
      distance: routeResponse.routes[0].distanceMeters,
      duration: routeResponse.routes[0].duration,
      options: availableDrivers,
      routeResponse,
    };
  }

  public async estimate(origin: string, destination: string) {
    try {
      const routeData = await this.getRoute(origin, destination);
      const driversOptions = getDriversOptions(
        routeData.routes[0].distanceMeters
      );

      return this.formatResponse(routeData, driversOptions);
    } catch (error) {
      console.error("Error estimating ride:", error);
      throw new Error("Failed to estimate ride");
    }
  }
}
