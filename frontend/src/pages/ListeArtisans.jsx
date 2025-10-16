// Import des hooks React et des outils de navigation
import { useEffect, useMemo, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

// Import du client API configuré et des composants utilisés
import api from "../services/api";
import ArtisanCard from "../components/CardArtisanDuMois";
import Seo from "../components/Seo";

// Dictionnaire qui relie les identifiants ou noms de catégories à leurs labels lisibles
const CAT_LABELS = {
  1: "Bâtiment",
  2: "Services",
  3: "Fabrication",
  4: "Alimentation",
  batiment: "Bâtiment",
  services: "Services",
  fabrication: "Fabrication",
  alimentation: "Alimentation",
};

// Définition du composant principal
export default function ListeArtisans() {
  // Hook pour lire les paramètres de l’URL
  const [params] = useSearchParams();

  // Hook pour naviguer vers une autre page
  const navigate = useNavigate();

  // Récupération du paramètre "cat" depuis l’URL
  const cat = params.get("cat") || "";

  // Utilisation de useMemo pour calculer le label de la catégorie uniquement quand "cat" change
  const label = useMemo(() => {
    if (!cat) return "Toutes catégories";
    return CAT_LABELS[cat] || cat;
  }, [cat]);

  // États locaux pour stocker les données, le chargement et les erreurs
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  // useEffect : déclenché à chaque fois que "cat" change
  useEffect(() => {
    // Variable pour éviter les erreurs si le composant est démonté avant la fin du chargement
    let cancel = false;

    // Fonction asynchrone pour charger les artisans depuis l’API
    async function load() {
      setLoading(true); // Activation du mode chargement
      setErr(null); // Réinitialisation des erreurs
      try {
        // Requête GET vers /api/liste-artisan avec un paramètre de catégorie
        const { data } = await api.get("/api/liste-artisan", {
          params: { cat },
        });
        if (!cancel) setData(Array.isArray(data) ? data : []);
      } catch {
        // Afficher un message d’erreur si une erreur survient
        if (!cancel) setErr("Impossible de charger la liste.");
      } finally {
        // Fin du chargement dans tous les cas
        if (!cancel) setLoading(false);
      }
    }

    // Appel de la fonction de chargement
    load();

    // Nettoyage : si le composant se démonte, on empêche la mise à jour de l’état
    return () => {
      cancel = true;
    };
  }, [cat]); // Dépendance : relancer l’effet quand "cat" change

  // Affichage du composant
  return (
    <>
      {/* Informations SEO pour la page liste d'artisans */}
      <Seo
        title="Liste des artisans"
        description="Trouvez votre artisan depuis la categorie que vous avez sélectionnez."
      />
      <main className="container py-4">
        <h1 className="text-uppercase text-center fw-medium mb-4">
          Catégorie : {label}
        </h1>

        {loading && <div>Chargement…</div>}
        {err && <div className="alert alert-danger">{err}</div>}

        {!loading && !err && data.length === 0 && (
          <p className="text-center">Aucun artisan trouvé pour « {label} ».</p>
        )}

        <div className="row g-3">
          {data.map((a) => (
            <div className="col-12 col-md-6" key={a.id}>
              <ArtisanCard
                id={a.id}
                nom={a.nom}
                note={Number(a.note_moyenne || 0)}
                specialite={a.specialite}
                localisation={a.localisation}
                onClick={() => navigate(`/fiche-artisan/${a.id}`)}
              />
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
