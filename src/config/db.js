const mongoose = require("mongoose");

const connectDB = async () => {
  const MONGO_URL = process.env.MONGO_URL;

  if (!MONGO_URL) {
    throw new Error("Falta MONGO_URL en .env");
  }

  try {
    await mongoose.connect(MONGO_URL);
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ Error connecting to MongoDB:", err.message);
    throw err;
  }
};

module.exports = connectDB;
