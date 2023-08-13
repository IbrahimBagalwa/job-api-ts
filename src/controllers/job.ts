import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

function createJob(req: Request, res: Response) {
  res.status(StatusCodes.CREATED).json({
    success: true,
    status: StatusCodes.CREATED,
    message: "Job created successfully",
  });
}
function getAllJobs(req: Request, res: Response) {
  res.status(StatusCodes.OK).json({
    success: true,
    status: StatusCodes.OK,
    message: "Jobs retrieved successfully",
  });
}

function getJob(req: Request, res: Response) {
  res.status(StatusCodes.OK).json({
    success: true,
    status: StatusCodes.OK,
    message: "Retrieved job successfuly",
  });
}
function updateJob(req: Request, res: Response) {
  res.status(StatusCodes.OK).json({
    success: true,
    status: StatusCodes.OK,
    message: "Job updated successfully",
  });
}
function deleteJob(req: Request, res: Response) {
  res.status(StatusCodes.OK).json({
    success: true,
    status: StatusCodes.OK,
    message: "Job deleted successfully",
  });
}

export { createJob, getAllJobs, getJob, updateJob, deleteJob };
