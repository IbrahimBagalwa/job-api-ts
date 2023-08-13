import { NextFunction, Request, Response } from "express";
import { CustomErrorApi } from "../error";
import { StatusCodes } from "http-status-codes";

interface ErrorHandle {
  statusCode: StatusCodes;
  message: string;
}
function errorHandler(
  err: ErrorHandle,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  if (err instanceof CustomErrorApi) {
    return res
      .status(err.statusCode)
      .json({ success: true, status: err.statusCode, message: err.message });
  }

  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    success: false,
    status: StatusCodes.INTERNAL_SERVER_ERROR,
    message: "Something went wrong, please try again later.",
    err,
  });
}
export default errorHandler;
