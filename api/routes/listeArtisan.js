const express = require("express");
const { Op } = require("sequelize");
const { Artisan } = require("../models");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { cat, search = "" } = req.query;

    const where = {};
    if (cat) {
      if (/^\d+$/.test(cat)) {
        where.categorie_id = Number(cat); // ✅ cas id
      } else {
        const map = {
          batiment: 1,
          services: 2,
          fabrication: 3,
          alimentation: 4,
        };
        if (map[cat]) where.categorie_id = map[cat]; // ✅ cas slug
      }
    }

    if (search.trim()) {
      where[Op.or] = [
        { nom: { [Op.like]: `%${search}%` } },
        { specialite: { [Op.like]: `%${search}%` } },
        { localisation: { [Op.like]: `%${search}%` } },
      ];
    }

    const artisans = await Artisan.findAll({
      where,
      order: [["nom", "ASC"]],
      attributes: [
        "id",
        "nom",
        "specialite",
        "localisation",
        "note_moyenne",
        "image",
      ],
    });

    res.json(artisans);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

module.exports = router;
