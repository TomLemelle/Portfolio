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
        <div className="last-work-card-img-wrapper">
          <Image
            src={`/${thumbnail}`}
            height={300}
            width={300}
            className="thumbnail-image"
            alt={`Thumbnail du projet ${translatedTitle}`}
          />
        </div>
        <h3 className="last-work-title">{translatedTitle}</h3>
        <p className="last-work-subheading">{translatedSubheading}</p>
      </div>
    </div>
  );
}
