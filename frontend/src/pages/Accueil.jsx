// Import des composants SEO et de la carte artisan
import Seo from "../components/Seo";
import ArtisanCard from "../components/CardArtisanDuMois";

// Page d’accueil du site
export default function Accueil() {
  // Tableau contenant les 3 artisans du mois (affichage temporaire en dur)
  const artisansDuMois = [
    {
      id: 1,
      nom: "Orville Salmons",
      note: 5,
      specialite: "Chauffagiste",
      localisation: "Evian",
    },
    {
      id: 15,
      nom: "Chocolaterie Labbé",
      note: 4.8,
      specialite: "Chocolatier",
      localisation: "Lyon",
    },
    {
      id: 14,
      nom: "Au pain au chaud",
      note: 4.7,
      specialite: "Boulanger",
      localisation: "Montélimar",
    },
  ];

  return (
    <>
      {/* Informations SEO pour la page d’accueil */}
      <Seo
        title="Trouve ton artisan – Accueil"
        description="Trouvez un artisan de confiance près de chez vous : bâtiment, services, fabrication, alimentation."
      />

      <main className="container my-5">
        {/* 1) Titre principal */}
        <h1 className="text-uppercase text-center fw-medium mb-4">
          Comment trouver mon artisan
        </h1>

        {/* 2) Fonctionnement du site */}
        <h2 className="h4 mb-3 fw-bold">Fonctionnement du site</h2>
        <ol className="list-unstyled ps-3 mb-4">
          <li className="mb-3">
            <strong>1. Choisir une catégorie d’artisans</strong>
            <br />
            Ouvrez le menu et sélectionnez la catégorie qui vous intéresse (ex.
            Bâtiment, Services, Fabrication, Alimentation…).
          </li>
          <li className="mb-3">
            <strong>2. Parcourir la liste et choisir un artisan</strong>
            <br />
            Consultez les fiches (nom, note, spécialité, localisation) et
            cliquez sur l’artisan de votre choix pour afficher sa fiche
            complète.
          </li>
          <li className="mb-3">
            <strong>3. Contacter l’artisan via le formulaire</strong>
            <br />
            Remplissez le formulaire de contact (coordonnées et message) depuis
            la fiche de l’artisan.
          </li>
          <li className="mb-0">
            <strong>4. Recevoir une réponse sous 48 h</strong>
            <br />
            Votre demande est transmise à l’artisan. Une réponse vous sera
            apportée dans un délai maximum de 48 heures.
          </li>
        </ol>
        <hr className="mx-auto my-5 separator border-success border-3" />

        {/* Les 3 Artisans du mois */}
        <h2 className="h4 mb-3 text-center fw-bold">Les 3 artisans du mois</h2>
        <div className="row g-3">
          {artisansDuMois.map((a) => (
            <div className="col-12 col-md-4" key={a.id}>
              <ArtisanCard {...a} />
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
