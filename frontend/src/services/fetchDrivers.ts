const BASE_URL = "http://localhost:8080";

export const fetchDrivers = async (distance?: number) => {
  const queryParams = distance ? `?distance=${distance}` : "";
  try {
    const response = await fetch(`${BASE_URL}/driver/${queryParams}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      return {
        error_code: errorData.error_code || "UNKNOWN_ERROR",
        error_description:
          errorData.error_description ||
          "Erro desconhecido ao buscar motoristas",
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
