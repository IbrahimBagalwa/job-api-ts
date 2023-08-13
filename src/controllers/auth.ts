import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

async function register(req: Request, res: Response) {
  res.status(StatusCodes.CREATED).json({
    success: true,
    status: StatusCodes.CREATED,
    message: "User created successfully",
  });
}

async function login(req: Request, res: Response) {
  res.status(StatusCodes.OK).json({
    success: true,
    status: StatusCodes.OK,
    message: "User logged in successfully",
  });
}
export { register, login };
