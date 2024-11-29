import mongoose from "mongoose";

const coonectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}`);
    console.log("DB connection successfull!");
  } catch (error) {
    console.log(error.message);
  }
};

export default coonectDB;
