const { faker } = require('@faker-js/faker');

const createPet = () => ({
    species: faker.animal.type(),
    age: faker.number.int({ min: 1, max: 20 }),
    name: faker.animal.petName(),
});

const createPets = (quantity) => {
    const pets = [];

    for (let i = 0; i < quantity; i++) {
        pets.push(createPet());
    };

    return pets;
};

module.exports = createPets;
