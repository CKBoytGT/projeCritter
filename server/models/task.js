import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },
    taskBody: {
      type: String,
      required: true,
    },
    taskState: {
      type: String,
      enum: ["Backlog", "Ready", "In Progress", "Done"],
    },
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", taskSchema);

export default Task;
