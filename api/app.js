// app.js — configuration principale du serveur Express
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { connectDB } = require("./models");

// URLs autorisées côté frontend
const allowedOrigins = [
  "http://localhost:3000",
  "https://plateforme-artisan.netlify.app",
  "https://fantastic-syrniki-cb9cdb.netlify.app",
];

// Options CORS
const corsOptions = {
  origin: (origin, cb) => {
    if (!origin || allowedOrigins.includes(origin)) {
      return cb(null, true);
    }
    return cb(new Error("Not allowed by CORS"), false);
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "x-api-key"],
};

const app = express();

// Appliquer CORS
app.use(cors(corsOptions));

// Lecture JSON
app.use(express.json());

// Connexion base de données
(async () => {
  await connectDB();
})();

// Routes
const accueilRoutes = require("./routes/accueil");
const listeArtisanRoutes = require("./routes/listeArtisan");
const ficheArtisanRoutes = require("./routes/ficheArtisan");

app.use("/api/accueil", accueilRoutes);
app.use("/api/liste-artisans", listeArtisanRoutes);
app.use("/api/fiche-artisans", ficheArtisanRoutes);

// Route santé
app.get("/healthz", (req, res) => res.json({ ok: true }));

// Route 404 propre
app.use((req, res) => {
  res.status(404).json({ error: "Route non trouvée" });
});

module.exports = app;
