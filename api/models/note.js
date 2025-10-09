module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "Note",
    {
      valeur: { type: DataTypes.TINYINT.UNSIGNED, allowNull: false },
      artisan_id: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false },
    },
    { tableName: "note" }
  );
};
