import { mockHistoryResponse } from "mocks/servicesMocks";
import { fetchRideHistory } from "./fetchRideHistory";

const BASE_URL = "http://localhost:8080";

describe("fetchRideHistory", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("deve retornar os dados do histórico em caso de sucesso", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockHistoryResponse),
      } as Response)
    );

    const result = await fetchRideHistory({ customer_id: "12345" });

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(`${BASE_URL}/ride/12345`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    expect(result).toEqual(mockHistoryResponse);
  });

  it("deve retornar um erro em caso de falha na requisição", async () => {
    const mockErrorResponse = {
      error_code: "INVALID_CUSTOMER_ID",
      error_description: "ID do cliente inválido.",
    };

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        json: () => Promise.resolve(mockErrorResponse),
      } as Response)
    );

    const result = await fetchRideHistory({ customer_id: "00000" });

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(`${BASE_URL}/ride/00000`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    expect(result).toEqual({
      error_code: "INVALID_CUSTOMER_ID",
      error_description: "ID do cliente inválido.",
    });
  });
});
