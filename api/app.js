// app.js — configuration principale du serveur Express
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { sequelize, connectDB } = require("./models");

// Autoriser le bon frontend Netlify :
const allowedOrigins = [
  "http://localhost:3000", // dev local
  "https://plateforme-artisan.netlify.app",
];

// CORS simplifié (évite plantage)
const corsOptions = {
  origin: function (origin, cb) {
    if (!origin || allowedOrigins.includes(origin)) return cb(null, true);
    return cb(new Error("Not allowed by CORS"), false);
  },
  methods: "GET,POST,PUT,DELETE,OPTIONS",
  allowedHeaders: "Content-Type,Authorization,X-Requested-With",
};

const checkApiKey = (req, res, next) => {
  // ⚠ Pour les tests publics, on désactive TEMPORAIREMENT la clé API :
  return next();
};

// Routes
const accueilRoutes = require("./routes/accueil");
const listeArtisanRoutes = require("./routes/listeArtisan");
const ficheArtisanRoutes = require("./routes/ficheArtisan");
const notFoundRoutes = require("./routes/404");

const app = express();
app.use(cors(corsOptions));
app.use(express.json());

(async () => {
  await connectDB();
})();

app.get("/healthz", (req, res) => res.json({ ok: true }));

// Désactiver pour laisser passer les requêtes frontend
// app.use("/api", checkApiKey);
app.use("/api/accueil", accueilRoutes);
app.use("/api/liste-artisans", listeArtisanRoutes);
app.use("/api/fiche-artisans", ficheArtisanRoutes);

app.use(notFoundRoutes);

module.exports = app;
