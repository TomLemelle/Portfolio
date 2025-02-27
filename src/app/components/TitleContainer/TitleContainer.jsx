import Link from "next/link";
import "./TitleContainer.css";

export default function TitleContainer({
  badge,
  children,
  isCentered = true,
  icon,
  iconLink,
}) {
  return (
    <div
      className="title-container"
      style={{
        flexDirection: isCentered ? "column" : "row",
        justifyContent: icon ? "space-between" : "center",
      }}
    >
      <div className="title-container-wrapper">
        {badge && (
          <div
            className="badge-container"
            style={{ textAlign: isCentered ? "center" : "left" }}
          >
            {badge}
          </div>
        )}
        <h2 className="title">{children}</h2>
      </div>
      {icon &&
        (iconLink ? (
          <Link href={iconLink} className="icon-container">
            {icon}
          </Link>
        ) : (
          <div className="icon-container">{icon}</div>
        ))}
    </div>
  );
}
