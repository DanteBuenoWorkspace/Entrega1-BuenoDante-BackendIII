const userModel = require("../models/User.model.js");
const petsModel = require("../models/Pets.model.js");

const insertUsers = (users) => {
    return userModel.insertMany(users);
};

const insertPets = (pets) => {
    return petsModel.insertMany(pets);
};

module.exports = { insertUsers, insertPets };