import { useEffect, useMemo, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import api from "../services/api";
import ArtisanCard from "../components/ArtisanCard";
import Seo from "../components/Seo";

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

export default function ListeArtisans() {
  const [params] = useSearchParams();
  const navigate = useNavigate();

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
        const { data } = await api.get("/api/liste-artisan", {
          params: { cat },
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
        description="Trouvez votre artisan depuis la categorie que vous avez sélectionnez."
      />
      <main className="container py-4">
        <h1 className="mb-1 text-center fw-medium">Liste des artisans</h1>
        <p className="text-center text-muted mb-4">Catégorie : {label}</p>

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
