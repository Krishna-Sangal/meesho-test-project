import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/Meesho");

    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.log("Database Connection Failed", error);
    process.exit(1);
  }
};

export default connectDB;