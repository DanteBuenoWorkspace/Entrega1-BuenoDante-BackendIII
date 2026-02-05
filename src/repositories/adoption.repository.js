const adoptions = [];

const getAll = () => {
    return adoptions;
};

const create = ({ userId, petId }) => {
    const adoption = {
        id: adoptions.length + 1,
        userId,
        petId,
        createdAt: new Date().toISOString()
    };

    adoptions.push(adoption);
    return adoption;
};

const getById = (id) => {
    return adoptions.find(a => a.id === Number(id)) || null;
};

const remove = (id) => {
    const index = adoptions.findIndex(a => a.id === Number(id));
    if (index === -1) return false;

    adoptions.splice(index, 1);
    return true;
}

const clear = () => {
    adoptions.length = 0;
};

module.exports = { getAll, create, getById, remove, clear };