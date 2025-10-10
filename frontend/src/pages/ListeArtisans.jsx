import { useEffect, useMemo, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import api from "../services/api";
import ArtisanCard from "../components/ArtisanCard";

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
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();

  const cat = params.get("cat") || "";
  const search = params.get("search") || "";
  const [q, setQ] = useState(search);

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
          params: { cat, search },
        });
        if (!cancel) setData(Array.isArray(data) ? data : []);
      } catch (e) {
        if (!cancel) setErr("Impossible de charger la liste.");
      } finally {
        if (!cancel) setLoading(false);
      }
    }

    load();
    return () => {
      cancel = true;
    };
  }, [cat, search]);

  function onSubmit(e) {
    e.preventDefault();
    const next = new URLSearchParams(params);
    if (q) next.set("search", q);
    else next.delete("search");
    setParams(next);
  }

  return (
    <main className="container py-4">
      <h1 className="mb-3">Liste des artisans</h1>

      {/* Bandeau filtre */}
      <div className="card border-0 shadow-sm mb-3">
        <div className="card-body">
          <div className="mb-2">
            <div className="small text-muted">Catégorie :</div>
            <div className="fw-semibold">{label}</div>
          </div>

          <form className="d-flex gap-2" onSubmit={onSubmit}>
            <input
              className="form-control"
              placeholder="Rechercher un artisan…"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
            <button className="btn btn-primary">Rechercher</button>
          </form>
        </div>
      </div>

      {loading && <div>Chargement…</div>}
      {err && <div className="alert alert-danger">{err}</div>}

      {!loading && !err && data.length === 0 && (
        <p>Aucun artisan trouvé pour ces critères.</p>
      )}

      <div className="row g-3">
        {data.map((a) => (
          <div className="col-12 col-md-6 col-lg-4" key={a.id}>
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
  );
}
