import { mockRideData } from "mocks/servicesMocks";
import { saveRide } from "./saveRide";

const BASE_URL = "http://localhost:8080";

describe("saveRide", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("deve salvar a corrida com sucesso", async () => {
    const mockResponse = {
      success: true,
    };

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse),
      } as Response)
    );

    await saveRide(mockRideData);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(`${BASE_URL}/ride/confirm`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mockRideData),
    });
  });

  it("deve retornar um erro em caso de falha na requisição", async () => {
    const mockErrorResponse = {
      error_code: "INVALID_RIDE_DATA",
      error_description: "Dados da corrida inválidos.",
    };

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        json: () => Promise.resolve(mockErrorResponse),
      } as Response)
    );

    await expect(saveRide(mockRideData)).rejects.toThrow("Erro na requisição");
  });
});
