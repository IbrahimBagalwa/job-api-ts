import { NextFunction, Request, Response } from "express";
import { CustomErrorApi } from "../error";
import { StatusCodes } from "http-status-codes";

interface ErrorHandle extends Error {
  statusCode: StatusCodes;
  message: string;
  code: number;
  keyValue: object;
}
function errorHandler(
  err: ErrorHandle,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  console.log(err);

  const customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    message: err.message || "Something went wrong, please try again later.",
  };
  if (err instanceof CustomErrorApi) {
    return res
      .status(err.statusCode)
      .json({ success: true, status: err.statusCode, message: err.message });
  }

  if (err.code && err.code === 11000) {
    customError.message = `Duplicate entered for ${Object.keys(
      err.keyValue
    )}, field please choose another value`;
    customError.statusCode = StatusCodes.BAD_REQUEST;
  }
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    err,
  });
  // res.status(customError.statusCode).json({
  //   success: false,
  //   status: customError.statusCode,
  //   message: customError.message,
  // });
}
export default errorHandler;
