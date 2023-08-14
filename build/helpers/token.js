"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var _a = process.env, JWT_EXPIRE_IN_HRS = _a.JWT_EXPIRE_IN_HRS, JWT_SECRET_KEY = _a.JWT_SECRET_KEY;
var generateToken = function (userId, username) {
    if (typeof JWT_SECRET_KEY !== "string")
        throw new Error("not secret key provided");
    var token = jsonwebtoken_1.default.sign({ userId: userId, username: username }, JWT_SECRET_KEY, {
        expiresIn: JWT_EXPIRE_IN_HRS,
    });
    return token;
};
var verifyToken = function (token) {
    if (typeof JWT_SECRET_KEY !== "string")
        throw new Error("not secret key provided");
    return jsonwebtoken_1.default.verify(token, JWT_SECRET_KEY);
};
exports.verifyToken = verifyToken;
exports.default = generateToken;
