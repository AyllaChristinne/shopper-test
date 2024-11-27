const BASE_URL = "http://localhost:8080";

export const estimateRoute = async ({
  customer_id,
  origin,
  destination,
}: {
  customer_id: string;
  origin: string;
  destination: string;
}) => {
  try {
    const response = await fetch(`${BASE_URL}/ride/estimate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        customer_id,
        origin,
        destination,
      }),
    });

    console.log("response", response);

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
