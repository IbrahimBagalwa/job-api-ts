"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var JobSchema = new mongoose_1.default.Schema({
    company: {
        type: String,
        required: [true, "Please provide a company"],
        minlength: 3,
        maxlength: 50,
    },
    position: {
        type: String,
        required: [true, "Please provide a position"],
        minlength: 3,
        maxlength: 50,
    },
    status: {
        type: String,
        required: [true, "Please provide a position"],
        enum: ["interview", "declined", "pending"],
        default: "pending",
    },
    createdBy: {
        type: mongoose_1.default.Types.ObjectId,
        ref: "User",
        required: [true, "Please provide a user"],
    },
}, { timestamps: true });
exports.default = mongoose_1.default.model("Job", JobSchema);
