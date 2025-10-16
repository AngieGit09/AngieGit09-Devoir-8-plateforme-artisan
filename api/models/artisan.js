// models/artisan.js — définition du modèle Artisan
module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    "Artisan",
    {
      nom: { type: DataTypes.STRING(150), allowNull: false },
      specialite: { type: DataTypes.STRING(150), allowNull: false },
      localisation: { type: DataTypes.STRING(150), allowNull: false },
      note_moyenne: { type: DataTypes.DECIMAL(2, 1), defaultValue: 0.0 },
      image: DataTypes.STRING(255),
      description: DataTypes.TEXT,
      email: { type: DataTypes.STRING(150), allowNull: false },
      site_web: DataTypes.STRING(255),
      categorie_id: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false },
    },
    { tableName: "artisan" }
  );
