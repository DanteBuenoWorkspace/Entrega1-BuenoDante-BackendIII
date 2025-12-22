const { Router } = require('express');
const router = Router();
const createUsers = require('../mocks/user.mock.js');
const createPets = require('../mocks/pets.mock.js');
const usersModel = require('../models/User.model.js');
const petsModel = require('../models/Pets.model.js');

router.get('/mockingusers', (req, res) => {
    res.status(200).json(createUsers(50))
});

router.get('/mockingpets', (req, res) => {
    res.status(200).json(createPets(50))
});

router.post('/generateData', async (req, res) => {
    try {
        const usersQuantity = req.body.users;
        const petsQuantity = req.body.pets;

        const usersGenerates = createUsers(usersQuantity);
        const petsGenerates = createPets(petsQuantity);

        await usersModel.insertMany(usersGenerates);
        await petsModel.insertMany(petsGenerates);

        res.status(200).json({
            status: 'success',
            insertedUsers: usersGenerates.length,
            insertedPets: petsGenerates.length
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;