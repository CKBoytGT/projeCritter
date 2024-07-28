import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    projectName: {
      type: String,
      required: true,
      default: "Untitled Project",
      set: (v) => (v === "" ? "Untitled Project" : v),
    },
    critterName: {
      type: String,
      required: true,
      default: "Name me!",
      set: (v) => (v === "" ? "Name me!" : v),
    },
    critterSpecies: {
      type: String,
      required: true,
      enum: ["Giant Panda", "Red Panda", "Trash Panda"],
      default: "Giant Panda",
    },
  },
  {
    timestamps: true,
  },
);

const Project = mongoose.model("Project", projectSchema);

export default Project;
