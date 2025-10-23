// app.js — configuration principale du serveur Express
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { connectDB } = require("./models");

// URLs autorisées (frontend)
const allowedOrigins = [
  "http://localhost:3000", // développement
  "https://plateforme-artisan.netlify.app",
  "https://fantastic-syrniki-cb9cdb.netlify.app",
];

// Options CORS
const corsOptions = {
  origin: function (origin, cb) {
    // Autorise si pas d'origine (Postman) ou origine dans la liste
    if (!origin || allowedOrigins.includes(origin)) {
      return cb(null, true);
    }
    return cb(new Error("Not allowed by CORS"), false);
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "x-api-key"], // autorisation de x-api-key
};

// Middleware de validation de clé API (désactivé temporairement pour tests frontend)
const checkApiKey = (req, res, next) => {
  return next();
};

// Import des routes backend
const accueilRoutes = require("./routes/accueil");
const listeArtisanRoutes = require("./routes/listeArtisan");
const ficheArtisanRoutes = require("./routes/ficheArtisan");
const notFoundRoutes = require("./routes/404");

const app = express();

// Appliquer CORS à toutes les routes
app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

// JSON parser
app.use(express.json());

// Connexion BDD
(async () => {
  await connectDB();
})();

// Route de test (ne doit pas demander de clé API)
app.get("/healthz", (req, res) => res.json({ ok: true }));

// Routes métiers
app.use("/api/accueil", accueilRoutes);
app.use("/api/liste-artisans", listeArtisanRoutes);
app.use("/api/fiche-artisans", ficheArtisanRoutes);

// 404 à la fin
app.use(notFoundRoutes);

module.exports = app;
