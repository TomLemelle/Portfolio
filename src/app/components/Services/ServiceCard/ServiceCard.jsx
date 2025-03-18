import "./ServiceCard.css";
import "./responsive.css";

export default function ServiceCard({ number, title, description, color }) {
  return (
    <div
      className="service-card-container"
      style={{
        backgroundImage: "url('/quadrillage.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="service-card-number" style={{ color: color }}>
        {number}
      </div>
      <div className="service-card-texts-container">
        <div className="service-card-title">{title}</div>
        <div className="service-card-description">{description}</div>
      </div>
    </div>
  );
}
