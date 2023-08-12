import { StatusCodes } from "http-status-codes";
import CustomErrorApi from "./customErrApi";

class NotFoundError extends CustomErrorApi {
  statusCode: StatusCodes;
  constructor(message: string) {
    super(message);
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}
export default NotFoundError;
