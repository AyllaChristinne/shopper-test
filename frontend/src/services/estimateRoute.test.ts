import { mockEstimateResponse } from "mocks/servicesMocks";
import { estimateRoute } from "./estimateRoute";

const BASE_URL = "http://localhost:8080";

describe("estimateRoute", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("deve retornar os dados da estimativa em caso de sucesso", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockEstimateResponse),
      } as Response)
    );

    await estimateRoute({
      customer_id: "12345",
      origin: "A",
      destination: "B",
    });

    expect(fetch).toHaveBeenCalled();
    expect(fetch).toHaveBeenCalledWith(`${BASE_URL}/ride/estimate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        customer_id: "12345",
        origin: "A",
        destination: "B",
      }),
    });
  });

  it("deve lançar um erro com a mensagem correta quando response.ok for falso", async () => {
    const mockErrorResponse = {
      error_code: "ERROR",
      error_description: "Erro na requisição",
    };

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        json: () => Promise.resolve(mockErrorResponse),
      } as Response)
    );

    await expect(
      estimateRoute({
        customer_id: "12345",
        origin: "A",
        destination: "",
      })
    ).rejects.toThrow("Erro na requisição");
  });
});
