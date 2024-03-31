// //connection instance live here
// const mongoose = require("mongoose");

// mongoose.set("strictQuery", false);

// mongoose
//   .connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/pctestDB", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: true,
//   })
//   .then(() => console.log("connectedtomongodb"));

// module.exports = mongoose.connection;

import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/pctestDB"
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
};
