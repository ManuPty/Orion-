/**
 * CompanyCard
 * Props:
 * - name (string)
 * - logo (string)
 * - shortDescription (string)
 * - practiceAreas (string[])
 * - actionLabel (string) por defecto "Ver más"
 * - onAction (fn) opcional
 */
export default function CompanyCard({
  name,
  logo,
  shortDescription,
  practiceAreas = [],
  actionLabel = "Ver más",
  onAction
}) {
  return (
    <article className="card">
      <div className="card__header">
        <img src={logo} alt={name} className="card__logo" />
        <h3 className="card__title">{name}</h3>
      </div>
      <p className="card__desc">{shortDescription}</p>
      {practiceAreas.length > 0 && (
        <ul className="card__tags">
          {practiceAreas.map((area, idx) => (
            <li className="tag" key={idx}>{area}</li>
          ))}
        </ul>
      )}
      <button className="btn" onClick={() => onAction && onAction(actionLabel)}>{actionLabel}</button>
    </article>
  );
}
