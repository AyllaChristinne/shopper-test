interface ILocation {
  latLng: {
    latitude: number;
    longitude: number;
  };
}

interface IRouteData {
  routes: Array<{
    legs: Array<{
      startLocation: ILocation;
      endLocation: ILocation;
    }>;
    distanceMeters: number;
    duration: string;
    polyline: {
      encodedPolyline: string;
    };
  }>;
}

interface IDriver {
  id: number;
  name: string;
  description: string;
  vehicle: string;
  review: {
    rating: number;
    comment: string;
  };
  value: number;
  minDistance: number;
}

type TRideData = {
  customer_id: string;
  origin: string;
  destination: string;
  distance: number;
  duration: string;
  value: number;
  driver: Pick<IDriver, "id" | "name">;
};

export { ILocation, IRouteData, IDriver, TRideData };
