import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

export default function FicheArtisans() {
  const { id } = useParams();
  const [artisan, setArtisan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;
    async function fetchOne() {
      try {
        const res = await api.get(`/api/fiche-artisan/${id}`);
        if (mounted) setArtisan(res.data);
      } catch (e) {
        if (mounted) setError("Artisan introuvable.");
      } finally {
        if (mounted) setLoading(false);
      }
    }
    fetchOne();
    return () => {
      mounted = false;
    };
  }, [id]);

  if (loading) return <p role="status">Chargement…</p>;
  if (error) return <p role="alert">{error}</p>;
  if (!artisan) return null;

  return (
    <main>
      <h1>{artisan.nom}</h1>
      <p>
        {artisan.specialite} — {artisan.localisation}
      </p>
      <p>⭐ {Number(artisan.note_moyenne).toFixed(1)}</p>
      {/* Ici le bloc "À propos", le site web, le formulaire de contact, etc. */}
    </main>
  );
}
