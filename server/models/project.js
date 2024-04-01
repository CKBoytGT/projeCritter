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
      default: "Name me!",
    },
    critterSpecies: {
      type: String,
      enum: ["giant panda", "red panda", "trash panda"],
    },
    // projectstatus: {
    //   type: Number,
    // },
  },
  {
    timestamps: true,
  }
);

export default projectSchema;
