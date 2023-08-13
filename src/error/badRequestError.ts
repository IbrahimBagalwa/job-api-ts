import { StatusCodes } from "http-status-codes";
import CustomErrorApi from "./customErrApi";

class BadRequestError extends CustomErrorApi {
  statusCode: StatusCodes;
  constructor(message: string) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}
export default BadRequestError;
