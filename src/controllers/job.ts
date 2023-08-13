import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Job from "../models/Job";
import { BadRequestError, NotFoundError } from "../error";

async function createJob(req: Request, res: Response) {
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);

  res.status(StatusCodes.CREATED).json({
    success: true,
    status: StatusCodes.CREATED,
    message: "Job created successfully",
    job,
  });
}

async function getAllJobs(req: Request, res: Response) {
  const jobs = await Job.find({ createdBy: req.user.userId }).sort("createdAt");
  res.status(StatusCodes.OK).json({
    success: true,
    status: StatusCodes.OK,
    message: "Jobs retrieved successfully",
    jobs,
  });
}

async function getJob(req: Request, res: Response) {
  const {
    user: { userId },
    params: { id: jobId },
  } = req;
  const job = await Job.findOne({ _id: jobId, createdBy: userId });
  if (!job) {
    throw new NotFoundError(`No Job found with this id ${jobId}`);
  }
  res.status(StatusCodes.OK).json({
    success: true,
    status: StatusCodes.OK,
    message: "Retrieved job successfuly",
    job,
  });
}
async function updateJob(req: Request, res: Response) {
  const {
    body: { company, position },
    user: { userId },
    params: { id: jobId },
  } = req;
  if (!company || !position) {
    throw new BadRequestError("company and position are required");
  }

  const job = await Job.findOneAndUpdate(
    { _id: jobId, createdBy: userId },
    req.body,
    { new: true, runValidators: true }
  );

  if (!job) {
    throw new NotFoundError(`No Job found with this id ${jobId}`);
  }

  res.status(StatusCodes.OK).json({
    success: true,
    status: StatusCodes.OK,
    message: "Job updated successfully",
    job,
  });
}
async function deleteJob(req: Request, res: Response) {
  const {
    user: { userId },
    params: { id: jobId },
  } = req;
  const job = await Job.findByIdAndRemove({ _id: jobId, createdBy: userId });
  if (!job) {
    throw new NotFoundError(`No Job found with this id ${jobId}`);
  }
  res.status(StatusCodes.OK).json({
    success: true,
    status: StatusCodes.OK,
    message: "Job deleted successfully",
  });
}

export { createJob, getAllJobs, getJob, updateJob, deleteJob };
