// Import des hooks React et des outils de navigation
import { useEffect, useMemo, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

// Import du client API configuré et des composants utilisés
import api from "../services/api";
import ArtisansCards from "../components/ArtisansCards";
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
  const [params] = useSearchParams();
  const navigate = useNavigate();

  // Lecture du paramètre d'URL `cat` (ex: ?cat=batiment)
  const cat = params.get("cat") || "";

  const label = useMemo(() => {
    if (!cat) return "Toutes catégories";
    return CAT_LABELS[cat] || cat;
  }, [cat]);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  useEffect(() => {
    let cancel = false;

    async function load() {
      setLoading(true);
      setErr(null);
      try {
        const { data } = await api.get("/api/liste-artisans", {
          params: { cat }, // ?cat=batiment → côté backend tu pourras filtrer
        });
        if (!cancel) setData(Array.isArray(data) ? data : []);
      } catch {
        if (!cancel) setErr("Impossible de charger la liste.");
      } finally {
        if (!cancel) setLoading(false);
      }
    }

    load();
    return () => {
      cancel = true;
    };
  }, [cat]);

  return (
    <>
      <Seo
        title="Liste des artisans"
        description="Trouvez votre artisan selon la catégorie sélectionnée."
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
              <ArtisansCards
                id={a.id}
                nom={a.nom}
                note={Number(a.note_moyenne || 0)}
                specialite={a.specialite}
                localisation={a.localisation}
                onClick={() => navigate(`/fiche-artisans/${a.id}`)}
              />
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
