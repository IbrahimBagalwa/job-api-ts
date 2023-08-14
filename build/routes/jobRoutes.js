"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var job_1 = require("../controllers/job");
var jobRouter = express_1.default.Router();
jobRouter.route("/").get(job_1.getAllJobs).post(job_1.createJob);
jobRouter.route("/:id").get(job_1.getJob).patch(job_1.updateJob).delete(job_1.deleteJob);
exports.default = jobRouter;
