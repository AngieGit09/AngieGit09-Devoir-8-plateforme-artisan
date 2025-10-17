Mise en place du backend (API)
Création d’une API Express dans le dossier api/
Configuration de Sequelize pour la connexion à MySQL
Fichier .env utilisé pour stocker les variables sensibles :
Test de la connexion via testDb.js (ensuite supprimé après validation)

Projet React créé dans le dossier frontend/
Connexion à l’API via les variables d’environnement :
REACT_APP_API_BASE=http://localhost:3001
REACT_APP_API_KEY=ma_clef_api
Interface simple pour interagir avec l’API et afficher les données de la base.

Hébergement de la base de données sur Railway
Création d’une base MySQL sur Railway
Récupération de l’URL de connexion (DB_HOST, DB_PORT, etc.)
Importation du script SQL (création de la base et insertion des données)
Test de la connexion avec Sequelize 
“Connexion réussie à Railway !”

Déploiement du backend sur Render
Création d’un service Web Service à partir du dépôt GitHub
Paramétrage :
Root Directory : api
Build Command  : npm install
Start Command  : npm start
Ajout des variables d’environnement sur Render (identiques à celles du .env)
API en ligne à l’adresse :
https://plateforme-artisan-api.onrender.com
Test dans le navigateur :
/ → {"error":"Page non trouvée"}
/api → {"error":"Accès refusé : clé API invalide"}

Déploiement du frontend sur Netlify
Configuration du build :
Base directory     : frontend
Build command       : npm run build
Publish directory   : frontend/build
Ajout d’un fichier _redirects pour gérer les routes React :
/* /index.html 200
# Règle pour éviter les erreurs 404 sur React Router
Ajout des variables d’environnement sur Netlify :
REACT_APP_API_BASE=https://plateforme-artisan-api.onrender.com
REACT_APP_API_KEY=ma_clef_api
Rebuild complet →  “Site is live ”

Connexion entre le frontend et le backend
L’API sur Render est sécurisée via une clé (x-api-key).
