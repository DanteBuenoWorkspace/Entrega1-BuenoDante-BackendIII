const mongoose = require('mongoose');

const MONGO_URL = process.env.MONGO_URL || "mongodb+srv://dantebueno155_db_user:coder123@cluster0.ltuujro.mongodb.net/?appName=Cluster0";

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("Database connected");
    } catch (error) {
        console.log(`MongoDB connection error: ${error}`)
        process.exit(1);
    }
};

module.exports = connectDB;