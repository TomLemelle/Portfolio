import "./ServiceCard.css";

export default function ServiceCard({ number, title, description }) {
  return (
    <div className="service-card-container">
      <div className="service-card-number">{number}</div>
      <div className="service-card-texts-container">
        <div className="service-card-title">{title}</div>
        <div className="service-card-description">{description}</div>
      </div>
    </div>
  );
}
