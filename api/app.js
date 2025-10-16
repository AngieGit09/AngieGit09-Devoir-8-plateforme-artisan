// app.js — configuration principale du serveur Express
const express = require("express");
const cors = require("cors");
require("dotenv").config(); // charge les variables d'environnement depuis .env

// Import du module sequelize / fonction de connexion définis dans /models/index.js
const { sequelize, connectDB } = require("./models");

// Origines autorisées côté front
const allowedOrigins = [
  "http://localhost:3000", // dev local (React)
  "https://trouve-ton-artisan.netlify.app", // production front (Netlify)
];

// Configuration CORS : on autorise explicitement les domaines listés
const corsOptions = {
  origin: function (origin, cb) {
    // origin peut être undefined
    if (!origin) return cb(null, true);
    if (allowedOrigins.includes(origin)) return cb(null, true);
    return cb(new Error("Not allowed by CORS"), false);
  },
};

// Middleware pour vérifier la présence d'une clé API dans les requêtes vers /api
function checkApiKey(req, res, next) {
  // On cherche le header x-api-key
  const key = req.headers["x-api-key"];
  // Si la clé attendue est définie côté serveur (process.env.API_KEY) et que la valeur correspond -> next()
  if (process.env.API_KEY && key === process.env.API_KEY) return next();
  // Sinon refuser l'accès
  return res.status(403).json({ error: "Accès refusé : clé API invalide" });
}

// Import des routes
const accueilRoutes = require("./routes/accueil");
const listeArtisanRoutes = require("./routes/listeArtisan");
const ficheArtisanRoutes = require("./routes/ficheArtisan");
const notFoundRoutes = require("./routes/404");

const app = express();

// Applique CORS puis JSON body parser
app.use(cors(corsOptions));
app.use(express.json());

// Connecte la base de données (fonction qui authentifie la connexion Sequelize)
// On lance la connexion immédiatement (catch géré dans connectDB)
(async () => {
  await connectDB();
})();

// Endpoint de santé
app.get("/healthz", (req, res) => res.json({ ok: true }));

// Toutes les routes sous /api nécessitent la clé API (checkApiKey middleware)
app.use("/api", checkApiKey);

// Montage des routes métiers
app.use("/api/accueil", accueilRoutes);
app.use("/api/liste-artisan", listeArtisanRoutes);
app.use("/api/fiche-artisan", ficheArtisanRoutes);

// Route 404 — doit être le dernier middleware pour capter les routes non gérées
app.use(notFoundRoutes);

module.exports = app;
