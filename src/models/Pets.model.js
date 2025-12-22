const mongoose = require('mongoose');

const petsSchema = new mongoose.Schema({
    animal: String,
    species: String,
    age: Number,
    name: String,
    race: String
});

module.exports = mongoose.model("pet", petsSchema);