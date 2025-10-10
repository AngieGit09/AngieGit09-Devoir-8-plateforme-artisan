import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
/** @typedef {import('../types').Artisan} Artisan */

export default function FicheArtisans() {
  const { id } = useParams();

  /** @type {[Artisan|null, (v: Artisan|null)=>void]} */
  const [artisan, setArtisan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setErr] = useState("");

  useEffect(() => {
    setLoading(true);
    api
      .get(`/api/artisan/${id}`)
      .then((res) => setArtisan(res.data))
      .catch((e) => setErr(e.message || "Erreur"))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p role="status">Chargement…</p>;
  if (error) return <p role="alert">{error}</p>;
  if (!artisan) return null;

  return (
    <main className="container my-4">
      <h1 className="h4">{artisan.nom}</h1>
      <p>
        {artisan.specialite} — {artisan.localisation}
      </p>
      <p>⭐ {Number(artisan.note_moyenne ?? 0).toFixed(1)} / 5</p>

      <form className="mt-4">
        <button className="btn btn-success">Envoyer</button>
      </form>
    </main>
  );
}
