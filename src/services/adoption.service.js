const adoptionRepository = require('../repositories/adoption.repository');

const getAll = () => {
    return adoptionRepository.getAll();
};

const create = ({ userId, petId }) => {
    if(!userId || !petId) {
        throw new Error("userId and petId are required");
    };

    return adoptionRepository.create({ userId, petId });
}

const getById = (id) => {
    return adoptionRepository.getById(id);
};

const remove = (id) => {
    return adoptionRepository.remove(id);
}

module.exports = { getAll, create, getById, remove };