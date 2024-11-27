interface ILocation {
  latitude: number;
  longitude: number;
}

export interface IRouteData {
  origin: ILocation;
  destination: ILocation;
  distance: number;
  duration: string;
  options: Array<Omit<IDriver, "minDistance">>;
  routeResponse: {
    encodedPolyline: string;
  };
}

export interface IDriver {
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

export type TRideData = {
  customer_id: string;
  origin: string;
  destination: string;
  distance: number;
  duration: string;
  value: number;
  driver: Pick<IDriver, "id" | "name">;
};

export type TRideHistory = Array<
  Omit<TRideData, "customer_id"> & { date: string }
>;

export interface AppContextType {
  error: string | null;
  setError: (error: string | null) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  routeData: IRouteData | null;
  setRouteData: (data: IRouteData) => void;
  customerId: string;
  setCustomerId: (id: string) => void;
  origin: string;
  setOrigin: (origin: string) => void;
  destination: string;
  setDestination: (dest: string) => void;
}
