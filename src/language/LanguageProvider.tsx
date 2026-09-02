import { useState, type ReactNode } from "react";
import { getInitialLang, setStoredLang, type Lang } from "../i18n";
import { LanguageContext } from "./context";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(getInitialLang);

  const changeLang = (next: Lang) => {
    setLang(next);
    setStoredLang(next);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: changeLang }}>
      {children}
    </LanguageContext.Provider>
  );
}