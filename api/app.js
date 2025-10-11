const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { sequelize, connectDB } = require("./models");

const allowedOrigins = [
  "http://localhost:3000",
  "https://trouve-ton-artisan.netlify.app", //site depuis netfify
];

const corsOptions = {
  origin: function (origin, cb) {
    if (!origin) return cb(null, true);
    if (allowedOrigins.includes(origin)) return cb(null, true);
    return cb(new Error("Not allowed by CORS"), false);
  },
};

function checkApiKey(req, res, next) {
  const key = req.headers["x-api-key"];
  if (process.env.API_KEY && key === process.env.API_KEY) return next();
  return res.status(403).json({ error: "Accès refusé : clé API invalide" });
}

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

app.use("/api", checkApiKey);

app.use("/api/accueil", accueilRoutes);
app.use("/api/liste-artisan", listeArtisanRoutes);
app.use("/api/fiche-artisan", ficheArtisanRoutes);

app.use(notFoundRoutes);

module.exports = app;
