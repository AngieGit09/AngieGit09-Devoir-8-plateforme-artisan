const { Artisan, Categorie } = require("../models");

exports.getAll = async (req, res) => {
  try {
    const artisans = await Artisan.findAll({
      include: [{ model: Categorie, attributes: ["nom"] }],
      order: [["nom", "ASC"]],
    });
    res.json(artisans);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
