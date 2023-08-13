import { NextFunction, Request, Response } from "express";
import { UnauthorizedError } from "../error";
import { verifyToken } from "../helpers/token";

async function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith("Bearer ")) {
    throw new UnauthorizedError("Authication invalid");
  }
  const token = authorization.split(" ")[1];
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const payload: any = verifyToken(token);
    req.user = { userId: payload.userId, username: payload.username };
    next();
  } catch (error) {
    throw new UnauthorizedError("Authication invalid");
  }
}
export default authMiddleware;
