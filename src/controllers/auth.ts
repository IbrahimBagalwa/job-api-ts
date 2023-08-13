import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import User from "../models/User";
import { BadRequestError, UnauthorizedError } from "../error";

async function register(req: Request, res: Response) {
  const user = await User.create({ ...req.body });
  const token = user.createJWT();

  res.status(StatusCodes.CREATED).json({
    success: true,
    status: StatusCodes.CREATED,
    message: "User created successfully",
    user: { username: user.username },
    token,
  });
}

async function login(req: Request, res: Response) {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError("Please provide eemail and password");
  }
  const user = await User.findOne({ email });
  if (!user) {
    throw new UnauthorizedError("Email and password incorrect.");
  }

  const isMatchedPassword = await user.matchPassword(password);
  if (!isMatchedPassword) {
    throw new UnauthorizedError("Email and password incorrect");
  }

  const token = user.createJWT();

  res.status(StatusCodes.OK).json({
    success: true,
    status: StatusCodes.OK,
    message: "User logged in successfully",
    user,
    token,
  });
}
export { register, login };
