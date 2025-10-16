// models/categorie.js
module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "Categorie",
    {
      nom: { type: DataTypes.STRING(100), allowNull: false },
    },
    { tableName: "categorie" }
  );
};
