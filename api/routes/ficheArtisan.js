// routes/ficheArtisan.js — affiche la fiche et gère les messages de contact
const express = require("express");
const router = express.Router();
const { Artisan, MessageContact } = require("../models");

// GET /api/fiche-artisan/:id  → retourne la fiche détaillée de l'artisan
router.get("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    // Validation simple de l'id
    if (!Number.isInteger(id) || id <= 0) {
      return res.status(400).json({ error: "Paramètre id invalide" });
    }

    // Récupère l'artisan avec les champs utiles
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

// POST /api/fiche-artisan/:id/contact  → enregistre un message de contact
router.post("/:id/contact", async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id <= 0) {
      return res.status(400).json({ error: "Paramètre id invalide" });
    }

    // Champs attendus (simple validation)
    const { nom, email, objet, message } = req.body || {};
    if (!nom || !email || !objet || !message) {
      return res.status(400).json({ error: "Champs requis manquants" });
    }

    // Vérifie que l'artisan existe
    const artisan = await Artisan.findByPk(id);
    if (!artisan) return res.status(404).json({ error: "Artisan introuvable" });

    // Crée l'enregistrement messagecontact
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
