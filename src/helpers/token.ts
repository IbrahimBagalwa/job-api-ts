import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const { JWT_EXPIRE_IN_HRS, JWT_SECRET_KEY } = process.env;

const generateToken = (userId: string, username: string): string => {
  console.log(typeof JWT_EXPIRE_IN_HRS);
  if (typeof JWT_SECRET_KEY !== "string")
    throw new Error("not secret key provided");
  const token = jwt.sign({ userId, username }, JWT_SECRET_KEY, {
    expiresIn: JWT_EXPIRE_IN_HRS,
  });
  return token;
};
export default generateToken;
