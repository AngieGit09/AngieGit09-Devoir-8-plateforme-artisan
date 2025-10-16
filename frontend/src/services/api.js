// Import de la bibliothèque axios, utilisée pour faire des requêtes HTTP (GET, POST, etc.)
import axios from "axios";

// Création d'une instance Axios avec une configuration par défaut
const api = axios.create({
  // Adresse de base de l'API
  baseURL: process.env.REACT_APP_API_BASE || "/",
  // Délai maximum pour une requête
  timeout: 10000,

  // En-têtes HTTP envoyés avec chaque requête
  headers: {
    "Content-Type": "application/json",
    // Clé d’API stockée dans les variables d’environnement
    "x-api-key": process.env.REACT_APP_API_KEY,
  },
});

export default api;
