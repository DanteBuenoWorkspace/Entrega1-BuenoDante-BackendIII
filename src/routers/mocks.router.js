const { Router } = require('express');
const router = Router();
const { getMockingUsers, getMockingPets, generateData} = require("../controllers/mocks.controller.js");

router.get('/mockingusers', getMockingUsers);

router.get('/mockingpets',  getMockingPets);

router.post('/generateData', generateData);

module.exports = router;