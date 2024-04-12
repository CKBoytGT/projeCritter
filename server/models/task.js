import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },
    taskbody: {
      type: String,
      required: true,
    },
    taskstate: {
      type: String,
      enum: ["Backlog", "Ready", "In Progress", "Done"],
    },
  },
  { timestamps: true }
);

export default taskSchema;
