const express = require("express");
const router = express.Router();

const { getAccueil } = require("../controllers/accueilController");

router.get("/", getAccueil);

module.exports = router;
