/* eslint-disable no-useless-escape */
import mongoose, { Document } from "mongoose";
import { encryptPassword } from "../helpers/passwordEncDec";
import generateToken from "../helpers/token";

export interface UserDoc extends Document {
  username: string;
  email: string;
  password: string;
  createJWT: () => string;
}
const UserSchema = new mongoose.Schema<UserDoc>({
  username: {
    type: String,
    required: [true, "please provide username"],
    minLength: 3,
    maxLength: 50,
  },
  email: {
    type: String,
    required: [true, "please provide email"],
    match: [
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
      "Please provide a valid email address",
    ],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "please provide username"],
    minLength: 6,
  },
});

UserSchema.pre<UserDoc>("save", async function () {
  if (typeof this.password === "string") {
    this.password = await encryptPassword(this.password);
  }
});

UserSchema.methods.createJWT = function () {
  return generateToken(this._id, this.username);
};

export default mongoose.model<UserDoc>("User", UserSchema);
