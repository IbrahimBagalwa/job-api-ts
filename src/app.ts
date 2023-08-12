import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { StatusCodes } from "http-status-codes";
import notFoundMiddleware from "./middlewares/notFound";
import errorHandler from "./middlewares/errorHandler";
dotenv.config();
import "express-async-errors";
const app: Express = express();

app.use(express.json());

app.get("/api/v2", (req: Request, res: Response) => {
  res.status(StatusCodes.OK).json({
    success: true,
    status: StatusCodes.OK,
    message: "Welcom to our Job API",
  });
});

app.use(notFoundMiddleware);
app.use(errorHandler);

export default app;
