import { TRideData } from "types";

const BASE_URL = "http://localhost:8080";

export const saveRide = async ({
  customer_id,
  origin,
  destination,
  distance,
  driver,
  duration,
  value,
}: TRideData) => {
  try {
    const response = await fetch(`${BASE_URL}/ride/confirm`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        customer_id,
        origin,
        destination,
        driver,
        distance,
        duration,
        value,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.log("Error Data");
      throw new Error(errorData.message || "Erro na requisição");
    }

    return response.json();
  } catch (error: any) {
    console.error("Erro na API:", error.message);
    throw error;
  }
};
