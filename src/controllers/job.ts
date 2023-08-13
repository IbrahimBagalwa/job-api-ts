import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

async function createJob(req: Request, res: Response) {
  if (req.user) {
    console.log(req.user.username);
  }

  res.status(StatusCodes.CREATED).json({
    success: true,
    status: StatusCodes.CREATED,
    message: "Job created successfully",
  });
}
async function getAllJobs(req: Request, res: Response) {
  res.status(StatusCodes.OK).json({
    success: true,
    status: StatusCodes.OK,
    message: "Jobs retrieved successfully",
  });
}

async function getJob(req: Request, res: Response) {
  res.status(StatusCodes.OK).json({
    success: true,
    status: StatusCodes.OK,
    message: "Retrieved job successfuly",
  });
}
async function updateJob(req: Request, res: Response) {
  res.status(StatusCodes.OK).json({
    success: true,
    status: StatusCodes.OK,
    message: "Job updated successfully",
  });
}
async function deleteJob(req: Request, res: Response) {
  res.status(StatusCodes.OK).json({
    success: true,
    status: StatusCodes.OK,
    message: "Job deleted successfully",
  });
}

export { createJob, getAllJobs, getJob, updateJob, deleteJob };
