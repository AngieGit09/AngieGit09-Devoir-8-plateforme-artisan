// routes/listeArtisan.js
const express = require("express");
const { Op } = require("sequelize");
const { Artisan } = require("../models");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    // Récupère les query params : cat et search
    const { cat, search = "" } = req.query;

    // Construction dynamique de l'objet "where"
    const where = {};
    if (cat) {
      // Si cat est numérique -> on le prend comme categorie_id
      if (/^\d+$/.test(cat)) {
        where.categorie_id = Number(cat);
      } else {
        // Si cat est un slug (batiment, services...), on le mappe vers l'id
        const map = {
          batiment: 1,
          services: 2,
          fabrication: 3,
          alimentation: 4,
        };
        if (map[cat]) where.categorie_id = map[cat];
      }
    }

    // Si un terme de recherche est présent, on cherche dans nom, specialite, localisation
    if (search.trim()) {
      where[Op.or] = [
        { nom: { [Op.like]: `%${search}%` } },
        { specialite: { [Op.like]: `%${search}%` } },
        { localisation: { [Op.like]: `%${search}%` } },
      ];
    }

    // Requête Sequelize : findAll avec sélection d'attributs pour alléger la réponse
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
