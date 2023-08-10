import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { StatusCodes } from "http-status-codes";
dotenv.config();

const app: Express = express();

app.use(express.json());

app.get("/api/v2", (req: Request, res: Response) => {
  res.status(StatusCodes.OK).json({
    success: true,
    status: StatusCodes.OK,
    message: "Welcom to our Job API",
  });
});

export default app;
