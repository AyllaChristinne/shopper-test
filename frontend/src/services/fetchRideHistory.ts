const BASE_URL = "http://localhost:8080";

interface IHistoryProps {
  customer_id: string;
  driver_id?: number;
}

export const fetchRideHistory = async ({
  customer_id,
  driver_id,
}: IHistoryProps) => {
  const queryParams = driver_id ? `?driver_id=${driver_id}` : "";
  try {
    const response = await fetch(
      `${BASE_URL}/ride/${customer_id}${queryParams}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      console.log("!response.ok");
      const errorData = await response.json();
      console.log("errorData", errorData);
      return {
        error_code: errorData.error_code || "UNKNOWN_ERROR",
        error_description: errorData.error_description || "Erro desconhecido",
      };
    }

    return response.json();
  } catch (error: any) {
    console.error("Erro na API:", error.message);
    return {
      error_code: "NETWORK_ERROR",
      error_description: "Erro na comunicação com o servidor. Tente novamente.",
    };
  }
};
