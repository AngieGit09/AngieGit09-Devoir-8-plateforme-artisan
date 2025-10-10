import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import Stars from "../components/Stars";

export default function FicheArtisans() {
  const { id: idParam } = useParams();
  const id = Number(idParam || 0);
  const [artisan, setArtisan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  // Formulaire
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [formErr, setFormErr] = useState(null);

  useEffect(() => {
    let cancel = false;
    async function load() {
      try {
        setLoading(true);
        setErr(null);
        const { data } = await api.get(`/api/fiche-artisan/${id}`);
        if (!cancel) setArtisan(data);
      } catch (e) {
        if (!cancel) setErr("Impossible de charger la fiche artisan.");
      } finally {
        if (!cancel) setLoading(false);
      }
    }
    load();
    return () => {
      cancel = true;
    };
  }, [id]);

  async function onSubmit(e) {
    e.preventDefault();
    setFormErr(null);
    setSending(true);
    setSent(false);

    const payload = Object.fromEntries(new FormData(e.currentTarget).entries());
    // attend : { nom, email, objet, message }
    try {
      await api.post(`/api/fiche-artisan/${id}/contact`, payload);
      setSent(true);
      e.currentTarget.reset();
    } catch (e) {
      setFormErr("Échec de l’envoi. Merci de réessayer.");
    } finally {
      setSending(false);
    }
  }

  if (loading) return <main className="container py-4">Chargement…</main>;
  if (err)
    return (
      <main className="container py-4">
        <div className="alert alert-danger">{err}</div>
      </main>
    );
  if (!artisan) return null;

  return (
    <main className="container py-4">
      <h1 className="h3 mb-3">Bienvenue sur la fiche de votre artisan</h1>

      <div className="row g-4">
        {/* Col gauche : image + infos */}
        <div className="col-12 col-lg-6">
          <div className="card border-0 shadow-sm">
            {artisan.image && (
              <img
                src={artisan.image}
                alt={artisan.nom}
                className="card-img-top object-fit-cover"
                style={{ maxHeight: 280 }}
              />
            )}
            <div className="card-body">
              <h2 className="h5 mb-1 text-center text-uppercase">
                {artisan.nom}
              </h2>

              <div className="d-flex justify-content-center align-items-center gap-2 mt-1">
                <Stars value={Number(artisan.note_moyenne || 0)} />
                <span className="small">
                  {Number(artisan.note_moyenne || 0).toFixed(1)}
                </span>
              </div>

              <div className="text-center small text-secondary mt-1">
                {artisan.specialite}
              </div>
              <div className="text-center small text-secondary">
                {artisan.localisation}
              </div>

              <hr />

              <h3 className="h6">À propos</h3>
              <p className="mb-0">{artisan.description || "—"}</p>

              {artisan.site_web && (
                <p className="small mt-3 mb-0">
                  Site web de votre artisan :{" "}
                  <a href={artisan.site_web} target="_blank" rel="noreferrer">
                    {artisan.site_web}
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Col droite : formulaire de contact */}
        <div className="col-12 col-lg-6">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <h3 className="h6 mb-3">Contactez votre artisan :</h3>

              {sent && (
                <div className="alert alert-success py-2">
                  Message envoyé. Réponse sous 48h.
                </div>
              )}
              {formErr && (
                <div className="alert alert-danger py-2">{formErr}</div>
              )}

              <form onSubmit={onSubmit} className="vstack gap-2">
                <div className="row g-2">
                  <div className="col">
                    <label className="form-label small" htmlFor="nom">
                      Nom
                    </label>
                    <input
                      id="nom"
                      name="nom"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col">
                    <label className="form-label small" htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form-control"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="form-label small" htmlFor="objet">
                    Objet
                  </label>
                  <input
                    id="objet"
                    name="objet"
                    className="form-control"
                    required
                  />
                </div>

                <div>
                  <label className="form-label small" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="form-control"
                    required
                  />
                </div>

                <button
                  className="btn btn-success align-self-start mt-2 rounded-pill px-4"
                  disabled={sending}
                >
                  {sending ? "Envoi…" : "Envoyer"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
