// models/messageContact.js — table pour stocker les messages envoyés depuis le formulaire
module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "MessageContact",
    {
      nom: { type: DataTypes.STRING(150), allowNull: false },
      email: { type: DataTypes.STRING(150), allowNull: false },
      objet: { type: DataTypes.STRING(200), allowNull: false },
      message: { type: DataTypes.TEXT, allowNull: false },
      artisan_id: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false },
    },
    { tableName: "messagecontact" }
  );
};
