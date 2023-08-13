import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import User from "../models/User";
import { encryptPassword } from "../helpers/passwordEncDec";

async function register(req: Request, res: Response) {
  const { username, email, password } = req.body;

  const tempUser = {
    username,
    email,
    password: await encryptPassword(password),
  };

  const user = await User.create({ ...tempUser });
  res.status(StatusCodes.CREATED).json({
    success: true,
    status: StatusCodes.CREATED,
    message: "User created successfully",
    user,
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
