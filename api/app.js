const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { sequelize, connectDB } = require("./models");

const app = express();
app.use(cors());
app.use(express.json());

// Connexion à la base de données
(async () => {
  await connectDB();
  await sequelize.sync({ alter: true });
})();

// Import des routes
const accueilRoutes = require("./routes/accueil");
const listeArtisanRoutes = require("./routes/listeArtisan");
const ficheArtisanRoutes = require("./routes/ficheArtisan");
const notFoundRoutes = require("./routes/404");

// Déclaration des routes
app.use("/api/accueil", accueilRoutes);
app.use("/api/liste-artisan", listeArtisanRoutes);
app.use("/api/fiche-artisan", ficheArtisanRoutes);

// Route 404 error
app.use(notFoundRoutes);

module.exports = app;
