import { NextFunction, Request, Response } from "express";

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log(req, res, next);
};
export default authMiddleware;
