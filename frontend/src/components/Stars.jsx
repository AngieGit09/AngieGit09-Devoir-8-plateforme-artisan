/**
 * Composant Stars :
 *  - value : valeur numérique de la note (ex: 4 ou 3.5)
 *  - max   : nombre maximum d'étoiles à afficher (par défaut 5)
 *
 * Retourne une ligne d'étoiles accessible (span avec aria-label).
 * Utile quand tu veux réutiliser l'affichage d'étoiles sans répéter la logique.
 */

export default function Stars({ value = 0, max = 5 }) {
  const stars = [];
  for (let i = 1; i <= max; i++) stars.push(i <= value);
  return (
    <span aria-label={`note ${value}/${max}`}>
      {stars.map((full, i) => (
        <span key={i}>{full ? "★" : "☆"}</span>
      ))}
    </span>
  );
}
