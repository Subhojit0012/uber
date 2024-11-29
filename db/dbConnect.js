const mongoose = require("mongoose");
const db = require('../connectStr')

const coonectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${db}`);
    console.log('DB connection successfull!');
    
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = coonectDB;
