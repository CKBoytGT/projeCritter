import mongoose from "mongoose";
import taskSchema from "./task.js";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    critterName: {
      type: String,
      required: true,
      default: "Name me!",
    },
    projectstatus: {
      type: Number,
    },
    tasks: [taskSchema],
  },
  {
    timestamps: true,
  }
);

export default projectSchema;
