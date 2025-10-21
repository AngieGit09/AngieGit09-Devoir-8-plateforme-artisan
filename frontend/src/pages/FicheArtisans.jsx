import Seo from "../components/Seo";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import Stars from "../components/Stars";

/**
 * Page FicheArtisans
 * - Récupère l'id depuis les params (useParams)
 * - Charge la fiche artisan depuis l'API
 * - Affiche les informations détaillées + formulaire de contact
 *
 * Remarques :
 * - Le composant gère les états : loading, err, sending, sent, formErr
 * - Le formulaire utilise FormData pour construire le payload envoyé au backend
 * - Il y avait un bug sur le rendu pendant le chargement (if (loading) return; sans JSX).
 *   J'ai corrigé en retournant le composant Seo + message de chargement pour conserver le SEO.
 */

export default function FicheArtisans() {
  // Recuperation de l'id depuis l'URL
  const { id } = useParams();

  // Etats locaux
  const [artisan, setArtisan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [formErr, setFormErr] = useState(null);

  //Effet pour charger la fiche artisan à chaque chargement d'id
  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        // Appel GET vers l'API pour récupérer la fiche
        const { data } = await api.get(`/api/fiche-artisans/${id}`);

        // Met à jour l'état avec les données reçues
        setArtisan(data);
      } catch {
        // Message général en cas d'échec du chargement
        setErr("Impossible de charger la fiche artisan.");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [id]);

  // Appel GET vers l'API pour récupérer la fiche
  async function onSubmit(e) {
    e.preventDefault();
    setFormErr(null);
    setSending(true);
    setSent(false);

    // Construction du payload depuis le formulaire
    const payload = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      // POST vers l'endpoint contact de l'artisan
      await api.post(`/api/fiche-artisans/${id}/contact`, payload);
      // Si tout OK, afficher message de succès et réinitialiser le formulaire
      setSent(true);
      e.currentTarget.reset();
    } catch {
      setFormErr("Échec de l’envoi. Merci de réessayer.");
    } finally {
      setSending(false);
    }
  }

  // --- RENDU pendant le chargement ---
  if (loading) {
    return (
      <>
        {/* Conserver les balises SEO même pendant le chargement */}
        <Seo
          title="Fiche artisan"
          description="Contactez l'artisan que vous souhaitez."
        />
        <main className="container py-5">Chargement…</main>
      </>
    );
  }

  // --- RENDU en cas d'erreur générale ---
  if (err) {
    return (
      <main className="container py-5">
        <div className="alert alert-danger">{err}</div>
      </main>
    );
  }

  // Si aucune fiche (sécurité) on ne rend rien
  if (!artisan) return null;

  return (
    <main className="container py-5">
      <h1 className="text-uppercase fw-medium mb-4">
        Bienvenue sur la page de votre artisan :{artisan.nom}
      </h1>

      {/* SECTION PRINCIPALE */}
      <div className="row g-4 align-items-center">
        {/* IMAGE */}
        <div className="col-12 col-lg-5 text-center">
          <img
            src={artisan.image}
            alt={artisan.nom}
            className="img-fluid rounded shadow-sm"
            style={{ objectFit: "cover", maxHeight: "300px" }}
          />
        </div>

        {/* DESCRIPTION */}
        <div className="col-12 col-lg-7">
          <div className="text-lg-start text-center">
            <h2 className="h5 fw-bold text-uppercase mb-2">
              {artisan.specialite}
            </h2>

            <div className="d-flex justify-content-center justify-content-lg-start align-items-center gap-2 mb-2">
              <Stars value={Number(artisan.note_moyenne || 0)} />
              <span>{Number(artisan.note_moyenne || 0).toFixed(1)}</span>
            </div>

            <p className="text-muted mb-1">{artisan.localisation}</p>
            <p className="mt-3">
              {artisan.description ||
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat scelerisque mauris."}
            </p>

            {artisan.site_web && (
              <p className="small mt-2">
                <strong>Site web :</strong>{" "}
                <a href={artisan.site_web} target="_blank" rel="noreferrer">
                  {artisan.site_web}
                </a>
              </p>
            )}
          </div>
        </div>
      </div>

      <hr className="mx-auto my-5 separator border-success border-3" />

      <h2 className="h6 mb-4 text-center text-uppercase fw-bold">
        Contactez {artisan.nom}
      </h2>

      {/* FORMULAIRE DE CONTACT */}
      <div className="row justify-content-center mt-5">
        <div className="col-12 col-md-10 col-lg-8">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              <h3 className="h6 mb-4 text-center">
                Formulaire de contact pour {artisan.nom}
              </h3>

              {sent && (
                <div className="alert alert-success text-center py-2">
                  Message envoyé avec succès.
                </div>
              )}
              {formErr && (
                <div className="alert alert-danger text-center py-2">
                  {formErr}
                </div>
              )}

              <form onSubmit={onSubmit} className="vstack gap-3">
                {/* Nom + Prénom */}
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="nom">Nom</label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      className="form-control"
                      placeholder="Votre nom"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="prenom">Prénom</label>
                    <input
                      type="text"
                      id="prenom"
                      name="prenom"
                      className="form-control"
                      placeholder="Votre prénom"
                      required
                    />
                  </div>
                </div>

                {/* Téléphone + Email */}
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="telephone">Téléphone</label>
                    <input
                      type="tel"
                      id="telephone"
                      name="telephone"
                      className="form-control"
                      placeholder="Ex : +33 6 12 34 56 78"
                      pattern="^(\+33|0)[1-9](\\d{2}){4}$"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="Votre email"
                      required
                    />
                  </div>
                </div>

                {/* Objet */}
                <div>
                  <label htmlFor="objet">Objet du message</label>
                  <input
                    type="text"
                    id="objet"
                    name="objet"
                    className="form-control"
                    placeholder="Objet"
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="form-control"
                    placeholder="Votre message"
                    required
                  ></textarea>
                </div>

                {/* Bouton d’envoi */}
                <div className="text-center mt-3">
                  <button
                    type="submit"
                    className="btn btn-success rounded-pill px-4"
                    disabled={sending}
                  >
                    {sending ? "Envoi en cours…" : "Envoyer le message"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
