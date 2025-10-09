const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "..", ".env") });

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT || 3306,
    logging: false,
    define: {
      freezeTableName: true,
      timestamps: false,
    },
  }
);

// --- Déclaration des modèles
const Artisan = require("./artisan")(sequelize, DataTypes);
const Categorie = require("./categorie")(sequelize, DataTypes);
const Note = require("./note")(sequelize, DataTypes);
const MessageContact = require("./messageContact")(sequelize, DataTypes); // <-- vérifie le nom exact du fichier

// --- Associations
Categorie.hasMany(Artisan, { foreignKey: "categorie_id" });
Artisan.belongsTo(Categorie, { foreignKey: "categorie_id" });

Artisan.hasMany(Note, { foreignKey: "artisan_id", onDelete: "CASCADE" });
Note.belongsTo(Artisan, { foreignKey: "artisan_id" });

Artisan.hasMany(MessageContact, {
  foreignKey: "artisan_id",
  onDelete: "CASCADE",
});
MessageContact.belongsTo(Artisan, { foreignKey: "artisan_id" });

//Vérification de connexion
async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log("Connexion à la base MySQL réussie.");
  } catch (error) {
    console.error("Erreur de connexion MySQL :", error);
  }
}

module.exports = {
  sequelize,
  connectDB,
  Artisan,
  Categorie,
  Note,
  MessageContact,
};
