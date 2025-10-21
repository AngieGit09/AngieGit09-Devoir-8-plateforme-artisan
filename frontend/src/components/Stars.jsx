/**
 * Composant Stars :
 *  - value : valeur numérique de la note (ex: 4 ou 3.5)
 *  - max   : nombre maximum d'étoiles à afficher (par défaut 5)
 *
 * Retourne une ligne d'étoiles accessible (span avec aria-label).
 * Utile quand tu veux réutiliser l'affichage d'étoiles sans répéter la logique.
 */

export default function Stars({ value = 0, max = 5 }) {
  return (
    <span aria-label={`note ${value}/${max}`}>
      {Number(value).toFixed(1)} / {max} ⭐
    </span>
  );
}
