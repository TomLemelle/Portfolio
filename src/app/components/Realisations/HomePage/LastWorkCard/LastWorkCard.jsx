"use client";

import { useRouter } from "next/navigation";
import "./LastWorkCard.css";
import Image from "next/image";
import formatString from "@/app/utils/formatSlug";
import { useTranslation } from "@/app/contexts/TranslationProvider";

export default function LastWorkCard({
  title,
  subheading,
  description,
  thumbnail,
  id,
  linked,
  color,
}) {
  const router = useRouter();
  const { locale } = useTranslation();

  // Traduction dynamique
  const translatedTitle = title[locale];
  const translatedSubheading = subheading[locale];
  const translatedDescription = description ? description[locale] : "";

  const slug = formatString(translatedTitle);

  const handleNavigate = () => {
    const storedId = localStorage.getItem("selectedId");

    if (storedId === id) {
      router.push(`/realisations/${slug}`);
    } else {
      localStorage.setItem("selectedId", id);
      router.push(`/realisations/${slug}`);
    }
  };

  return (
    <div className="last-work-card" onClick={handleNavigate}>
      <div
        className="last-work-card-wrapper"
        style={{ backgroundColor: color }}
      >
        <Image
          src={`/${thumbnail}`}
          className="thumbnail-image"
          width={color === "#3b4990" ? 264 : 313}
          height={color === "#3b4990" ? 264 : 265}
          alt={`Thumbnail du projet ${translatedTitle}`}
        />
        <h3 className="last-work-title">{translatedTitle}</h3>
        <p className="last-work-subheading">{translatedSubheading}</p>
      </div>
    </div>
  );
}
