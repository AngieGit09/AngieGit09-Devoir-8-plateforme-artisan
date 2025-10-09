const express = require("express");
const router = express.Router();

router.get("/:id", (req, res) => {
  res.json({ id: req.params.id, message: "Fiche artisan (OK)" });
});

module.exports = router;
