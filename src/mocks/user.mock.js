const { faker } = require('@faker-js/faker');
const bcrypt = require('bcrypt');

const hashedPassword = bcrypt.hashSync("coder123", 10);

const createUser = () => ({
    _id: faker.database.mongodbObjectId(),
    firstname: faker.person.firstName(),
    lastname: faker.person.lastName(),
    age: faker.number.int({ min: 18, max: 65 }),
    email: faker.internet.email(),
    password: hashedPassword,
    role: faker.helpers.arrayElement(["user", "admin"]),
    pets: []
})

const createUsers = (quantity) => {
    const users = [];

    for (let i = 0; i < quantity; i++) {
        users.push(createUser())
    };

    return users;
};


module.exports = createUsers;