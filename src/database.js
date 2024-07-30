const mongoose = require("mongoose");

async function connectToMongo() {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("MongoDB connection succeeded!");
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = {
  connectToMongo,
};
