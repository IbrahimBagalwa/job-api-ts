import mongoose, { Document, ObjectId } from "mongoose";
export interface JobDoc extends Document {
  company: string;
  position: string;
  status: string;
  createdBy: ObjectId;
}
const JobSchema = new mongoose.Schema<JobDoc>(
  {
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
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide a user"],
    },
  },
  { timestamps: true }
);

export default mongoose.model<JobDoc>("Job", JobSchema);
