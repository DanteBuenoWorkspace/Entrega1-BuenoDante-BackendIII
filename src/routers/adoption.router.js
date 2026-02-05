const { Router } = require('express');
const { getAllAdoptions, createAdoption, getAdoptionById, deleteAdoption } = require('../controllers/adoption.controller');

const router = Router();

router.get("/", getAllAdoptions);
router.post("/", createAdoption);
router.get("/:id", getAdoptionById);
router.delete("/:id", deleteAdoption);

module.exports = router;    