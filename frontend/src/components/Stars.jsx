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
