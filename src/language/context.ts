import { createContext } from "react";
import type { Lang } from "../i18n";

export type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

export const LanguageContext = createContext<LanguageContextValue | null>(null);