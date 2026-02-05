const createUsers = require("../mocks/user.mock.js")
const createPets = require("../mocks/pets.mock.js")

const { insertUsers, insertPets } = require("../repositories/mocks.repository.js");

const getMockingUsersService = (quantity) => {
    return createUsers(quantity)
};

const getMockingPetsService = (quantity) => {
    return createPets(quantity)
};

const generateMockData = async (usersQuantity, petsQuantity) => {
    const usersGenerated = createUsers(usersQuantity);
    const petsGenerated = createPets(petsQuantity)

    await insertUsers(usersGenerated);
    await insertPets(petsGenerated);

    return {
        insertedUsers: usersGenerated.length,
        insertedPets: petsGenerated.length
    };
};

module.exports = {
    getMockingUsersService,
    getMockingPetsService,
    generateMockData
};