import { useTranslation } from "@/app/contexts/TranslationProvider";

export default function LanguageSwitcher() {
  const { changeLanguage, locale } = useTranslation();

  return (
    <div>
      <button onClick={() => changeLanguage("fr")} disabled={locale === "fr"}>
        🇫🇷 FR
      </button>
      <button onClick={() => changeLanguage("en")} disabled={locale === "en"}>
        🇬🇧 EN
      </button>
      <button onClick={() => changeLanguage("it")} disabled={locale === "it"}>
        🇮🇹 IT
      </button>
    </div>
  );
}
