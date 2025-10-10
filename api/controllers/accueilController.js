const { Artisan } = require("../models");

exports.getAccueil = async (req, res) => {
  try {
    const artisansDuMois = await Artisan.findAll({
      attributes: ["id", "nom", "specialite", "localisation", "note_moyenne"],
      order: [["note_moyenne", "DESC"]],
      limit: 3,
    });

    res.json({
      message: "Accueil (OK)",
      artisansDuMois,
    });
  } catch (error) {
    console.error("Erreur dans getAccueil :", error);
    res
      .status(500)
      .json({ error: "Erreur serveur lors du chargement de l'accueil." });
  }
};
