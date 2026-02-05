const { getMockingUsersService, getMockingPetsService, generateMockData } = require("../services/mocks.service.js");

const getMockingUsers = (req, res) => {
    const users = getMockingUsersService(50)
    res.status(200).json(users)
};

const getMockingPets = (req, res) => {
    const pets = getMockingPetsService(50)
    res.status(200).json(pets)
};

const generateData = async (req, res) => {
    try {
        const usersQuantity = Number(req.body.users);
        const petsQuantity = Number(req.body.pets);

        if (!Number.isInteger(usersQuantity) || usersQuantity < 0) {
            return res.status(400).json({ error: "Users must be an integer >= 0" })
        }

        if (!Number.isInteger(petsQuantity) || petsQuantity < 0) {
            return res.status(400).json({ error: "Pets must be an integer >= 0" })
        }

        const result = await generateMockData(usersQuantity, petsQuantity);

        return res.status(200).json({ status: "success", ...result });

    } catch (error) {

        return res.status(500).json({ error: error.message });
    }
}

module.exports = { getMockingUsers, getMockingPets, generateData };