import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    // formerly username
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      match: [/.+@.+\..+/, "use valid email"],
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const User = mongoose.model("User", userSchema);

export default User;
