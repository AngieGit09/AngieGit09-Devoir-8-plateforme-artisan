const sequelize = require("./config/database");

(async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Connexion réussie à Railway !");
  } catch (error) {
    console.error("❌ Erreur de connexion :", error);
  } finally {
    await sequelize.close();
  }
})();
