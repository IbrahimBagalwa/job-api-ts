/* eslint-disable no-useless-escape */
import mongoose from "mongoose";
import { encryptPassword } from "../helpers/passwordEncDec";

const UserSchema = new mongoose.Schema({
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

UserSchema.pre("save", async function () {
  if (typeof this.password === "string") {
    this.password = await encryptPassword(this.password);
  }
});

export default mongoose.model("User", UserSchema);
