export enum ErrorCodes {
  INVALID_DATA = "INVALID_DATA",
  INVALID_DRIVER = "INVALID_DRIVER",
  DRIVER_NOT_FOUND = "DRIVER_NOT_FOUND",
  INVALID_DISTANCE = "INVALID_DISTANCE",
  NO_RIDES_FOUND = "NO_RIDES_FOUND",
}

export function errorResponse(code: ErrorCodes, description: string) {
  return {
    error_code: code,
    error_description: description,
  };
}
