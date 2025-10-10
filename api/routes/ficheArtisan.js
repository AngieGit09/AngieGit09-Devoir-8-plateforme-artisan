const express = require("express");
const router = express.Router();
const { Artisan, MessageContact } = require("../models"); // ⬅ importe tes modèles

// GET /api/fiche-artisan/:id  → fiche artisan
router.get("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id <= 0) {
      return res.status(400).json({ error: "Paramètre id invalide" });
    }

    const artisan = await Artisan.findByPk(id, {
      attributes: [
        "id",
        "nom",
        "specialite",
        "localisation",
        "note_moyenne",
        "image",
        "description",
        "site_web",
        "email",
        "categorie_id",
      ],
    });

    if (!artisan) return res.status(404).json({ error: "Artisan introuvable" });
    return res.json(artisan);
  } catch (err) {
    console.error("Erreur GET fiche-artisan:", err);
    return res.status(500).json({ error: "Erreur serveur" });
  }
});

// POST /api/fiche-artisan/:id/contact  → enregistre un message
router.post("/:id/contact", async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id <= 0) {
      return res.status(400).json({ error: "Paramètre id invalide" });
    }

    const { nom, email, objet, message } = req.body || {};
    if (!nom || !email || !objet || !message) {
      return res.status(400).json({ error: "Champs requis manquants" });
    }

    // (optionnel) s’assurer que l’artisan existe
    const artisan = await Artisan.findByPk(id);
    if (!artisan) return res.status(404).json({ error: "Artisan introuvable" });

    await MessageContact.create({
      nom,
      email,
      objet,
      message,
      artisan_id: id,
    });

    return res.status(201).json({ ok: true });
  } catch (err) {
    console.error("Erreur POST contact:", err);
    return res.status(500).json({ error: "Erreur serveur" });
  }
});

module.exports = router;
