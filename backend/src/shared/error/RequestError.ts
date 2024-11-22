export enum ErrorCodes {
  INVALID_DATA = "INVALID_DATA",
  INVALID_DRIVER = "INVALID_DRIVER",
  DRIVER_NOT_FOUND = "DRIVER_NOT_FOUND",
  INVALID_DISTANCE = "INVALID_DISTANCE",
  NO_RIDES_FOUND = "NO_RIDES_FOUND",
}

class RequestError {
  public readonly error_code: ErrorCodes;
  public readonly error_description: string;

  constructor(error_code: ErrorCodes, error_description: string) {
    this.error_code = error_code;
    this.error_description = error_description;
  }
}

export default RequestError;
