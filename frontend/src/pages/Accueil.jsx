import FeaturedArtisanCard from "../components/ArtisanCard";

export default function Accueil() {
  const artisansDuMois = [
    {
      id: 1,
      nom: "Mont Blanc Électricité",
      note: 4.5,
      specialite: "Électricien",
      localisation: "Chamonix",
    },
    {
      id: 2,
      nom: "Menuiserie des Alpes",
      note: 4.7,
      specialite: "Menuisier",
      localisation: "Annecy",
    },
    {
      id: 3,
      nom: "Atelier du Goût",
      note: 4.6,
      specialite: "Traiteur",
      localisation: "Evian",
    },
  ];

  return (
    <main className="container my-5">
      {/* 1) Titre principal */}
      <h1 className="mb-4 text-center">Comment trouver mon artisan</h1>

      {/* 2) Fonctionnement du site */}
      <h2 className="h4 mb-3">Fonctionnement du site</h2>
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
          Consultez les fiches (nom, note, spécialité, localisation) et cliquez
          sur l’artisan de votre choix pour afficher sa fiche complète.
        </li>
        <li className="mb-3">
          <strong>3. Contacter l’artisan via le formulaire</strong>
          <br />
          Remplissez le formulaire de contact (coordonnées et message) depuis la
          fiche de l’artisan.
        </li>
        <li className="mb-0">
          <strong>4. Recevoir une réponse sous 48 h</strong>
          <br />
          Votre demande est transmise à l’artisan. Une réponse vous sera
          apportée dans un délai maximum de 48 heures.
        </li>
      </ol>

      {/*Les 3 Artisans du mois */}
      <h2 className="h4 mb-3 text-center">Artisans du mois</h2>
      <div className="row g-3">
        {artisansDuMois.map((a) => (
          <div className="col-12 col-md-4" key={a.id}>
            <FeaturedArtisanCard {...a} />
          </div>
        ))}
      </div>
    </main>
  );
}
