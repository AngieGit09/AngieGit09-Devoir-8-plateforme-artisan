const express = require("express");
const router = express.Router();

// Route 404 error
router.use((_req, res) => {
  res.status(404).json({ error: "Page non trouvée" });
});

module.exports = router;
