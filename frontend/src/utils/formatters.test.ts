import { formatTime, formatDistance } from "./formatters";

describe("formatTime", () => {
  it("deve formatar tempo em horas e minutos corretamente", () => {
    expect(formatTime("3600s")).toBe("1h 0min");
    expect(formatTime("7260s")).toBe("2h 1min");
  });

  it("deve formatar tempo apenas em minutos se menor que uma hora", () => {
    expect(formatTime("1800s")).toBe("30min");
  });
});

describe("formatDistance", () => {
  it("deve formatar corretamente distâncias em metros para quilômetros", () => {
    expect(formatDistance(1000)).toBe("1.0km");
    expect(formatDistance(12345)).toBe("12.3km");
  });

  it("deve tratar valores muito pequenos corretamente", () => {
    expect(formatDistance(100)).toBe("0.1km");
    expect(formatDistance(0)).toBe("0.0km");
  });
});
