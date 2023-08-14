import express, { Express, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import notFoundMiddleware from "./middlewares/notFound";
import errorHandler from "./middlewares/errorHandler";
import dotenv from "dotenv";
import "express-async-errors";
import jobRouter from "./routes/jobRoutes";
import authRouter from "./routes/authRoutes";
import authMiddleware from "./middlewares/auth";
import helmet from "helmet";
import cors from "cors";
import rateLimiter from "express-rate-limit";
import xss from "xss-clean";
import swaggerUI from "swagger-ui-express";
import YAML from "yamljs";
import { responseHTML } from "./helpers/responseHTML";
dotenv.config();
const app: Express = express();

const swaggerDocumentation = YAML.load("./swagger.yaml");

app.set("trust proxy", 1);
app.use(
  rateLimiter({
    windowMs: 5 * 60 * 1000, // 5 minutes
    max: 7, // Limit each IP to 100 requests per `window` (here, per 5 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    // store: ... , // Use an external store for more precise rate limiting
  })
);
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());

app.get("/", (req: Request, res: Response) => {
  res.status(StatusCodes.OK).send(responseHTML);
});
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocumentation));
app.use("/api/v2/auth", authRouter);
app.use("/api/v2/jobs", authMiddleware, jobRouter);

app.use(notFoundMiddleware);
app.use(errorHandler);

export default app;
