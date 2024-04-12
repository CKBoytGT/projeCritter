import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
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
      enum: ["Giant Panda", "Red Panda", "Trash Panda"],
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
