const adoptionService = require('../services/adoption.service')

const getAllAdoptions = (req, res) => {
    const adoption = adoptionService.getAll();

    res.json({
        status: "success",
        payload: adoption
    });
};

const createAdoption = (req, res) => {
    try {
        adoption = adoptionService.create(req.body);
        res.status(201).json({ status: "success", payload: adoption });
    } catch (err) {
        res.status(400).json({ status: "error", message: err.message });
    }
};

const getAdoptionById = (req, res) => {
    const { id } = req.params;
    const adoption = adoptionService.getById(id);

    if (!adoption) {
        return res.status(404).json({ status: "error", error: "Adoption not found" });
    }

    res.json({ status: "success", payload: adoption });
};

const deleteAdoption = (req, res) => {
    const { id } = req.params;
    const ok = adoptionService.remove(id);

    if (!ok) {
        return res.status(404).json({ status: "error", error: "Adoption not found" });
    };

    res.status(200).json({ status: "success", payload: true });
};

module.exports = { getAllAdoptions, createAdoption, getAdoptionById, deleteAdoption };   