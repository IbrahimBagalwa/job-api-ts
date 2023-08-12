import { StatusCodes } from "http-status-codes";
import CustomErrorApi from "./customErrApi";

class UnauthorizedError extends CustomErrorApi {
  statusCode: StatusCodes;
  constructor(message: string) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

export default UnauthorizedError;
