const express = require("express");
const router = express.Router();
const { getAll } = require("../controllers/listeArtisanController");

router.get("/", getAll);

module.exports = router;
