import { useEffect } from "react";

/**
 * Composant SEO minimal :
 * - met à jour document.title si title fourni
 * - créé / met à jour la meta description si description fournie
 *
 * Ce composant ne rend rien (return null) : il agit seulement en side-effect.
 * Utile pour améliorer le référencement et l'apparence en partage social.
 */

export default function Seo({ title, description }) {
  useEffect(() => {
    if (title) document.title = title;

    if (description) {
      // Cherche une meta description existante
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement("meta");
        // Met à jour le contenu de la meta description
        meta.setAttribute("name", "description");
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", description);
    }
  }, [title, description]);

  // Pas de rendu JSX pour ce composant
  return null;
}
