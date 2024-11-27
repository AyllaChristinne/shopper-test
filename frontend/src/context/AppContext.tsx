import React, { createContext, useContext, useState } from "react";
import { AppContextType, IRouteData } from "types";

interface IProps {
  children: React.ReactNode;
  initialValue?: AppContextType;
}

const initialContext: AppContextType = {
  error: null,
  setError: () => {},
  isLoading: false,
  setIsLoading: () => {},
  routeData: null,
  setRouteData: () => {},
  customerId: "",
  setCustomerId: () => {},
  origin: "",
  setOrigin: () => {},
  destination: "",
  setDestination: () => {},
};

const AppContext = createContext<AppContextType>(initialContext);

export const AppProvider = ({ children, initialValue }: IProps) => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [routeData, setRouteData] = useState<IRouteData | null>(null);
  const [customerId, setCustomerId] = useState<string>("");
  const [origin, setOrigin] = useState<string>("");
  const [destination, setDestination] = useState<string>("");

  console.log("error", error);
  console.log("loading", isLoading);

  return (
    <AppContext.Provider
      value={
        initialValue || {
          error,
          setError,
          isLoading,
          setIsLoading,
          customerId,
          setCustomerId,
          routeData,
          setRouteData,
          origin,
          setOrigin,
          destination,
          setDestination,
        }
      }
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
