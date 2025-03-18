import { useTranslation } from "@/app/contexts/TranslationProvider";
import "./Translation.css";

export default function LanguageSwitcher() {
  const { changeLanguage, locale } = useTranslation();

  return (
    <div className="languages-container">
      <div className="language-wrapper">
        <button onClick={() => changeLanguage("fr")} disabled={locale === "fr"}>
          🇫🇷
        </button>
      </div>
      <div className="language-wrapper">
        <button onClick={() => changeLanguage("en")} disabled={locale === "en"}>
          🇬🇧
        </button>
      </div>

      <div className="language-wrapper">
        <button onClick={() => changeLanguage("it")} disabled={locale === "it"}>
          🇮🇹
        </button>
      </div>
    </div>
  );
}
