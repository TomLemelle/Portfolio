import "./TitleContainer.css";

export default function TitleContainer({ badge, children, isCentered }) {
  return (
    <div
      className="title-container"
      style={{ alignItems: isCentered ? "center" : "flex-start" }}
    >
      <div className="badge-container">{badge}</div>
      <h2 className="title">{children}</h2>
    </div>
  );
}
