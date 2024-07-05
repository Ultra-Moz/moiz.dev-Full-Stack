const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI;

const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Connection Successful to Database");
  } catch (error) {
    console.log("Database Connection Failed", error);
    process.exit(1);
  }
};

module.exports = connectDb;
