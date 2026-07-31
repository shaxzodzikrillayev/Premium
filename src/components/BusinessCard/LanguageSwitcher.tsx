import { useEffect, useRef, useState } from "react";

import "./LanguageSwitcher.scss";

type Language = "RU" | "EN" | "UZ";

interface Props {
  language: Language;

  changeLanguage: (lang: Language) => void;
}

const languages: Language[] = ["RU", "EN", "UZ"];

export default function LanguageSwitcher({ language, changeLanguage }: Props) {
  const [open, setOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeMenu = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", closeMenu);

    return () => {
      document.removeEventListener("mousedown", closeMenu);
    };
  }, []);

  const selectLanguage = (lang: Language) => {
    changeLanguage(lang);

    localStorage.setItem("magnat-language", lang);

    setOpen(false);
  };

  return (
    <div ref={ref} className={`language-switcher ${open ? "active" : ""}`}>
      <button
        className="language-switcher__button"
        onClick={() => setOpen(!open)}
      >
        {language}
      </button>

      <div className="language-switcher__menu">
        {languages.map((lang) => (
          <button
            key={lang}
            className={language === lang ? "selected" : ""}
            onClick={() => selectLanguage(lang)}
          >
            {lang}
          </button>
        ))}
      </div>
    </div>
  );
}
