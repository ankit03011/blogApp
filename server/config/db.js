const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.Mongo_URL);
    console.log(
      `Connected to Mongodb Database`
    );
  } catch (error) {
    console.log(`MONGO Connect Error ${error}`);
  }
};

module.exports = connectDB;
