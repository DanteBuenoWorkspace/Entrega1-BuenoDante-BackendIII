const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    age: Number,
    email: String,
    password: String,
    role: String,
    pets: { type: Array, default: [] }
});

module.exports = mongoose.model("user", userSchema);