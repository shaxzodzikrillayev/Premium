export type Lang = "ru" | "uz" | "en";

export const languages: { code: Lang; label: string; native: string; flag: string }[] = [
  { code: "ru", label: "Russian", native: "Русский", flag: "🇷🇺" },
  { code: "uz", label: "Uzbek", native: "O‘zbekcha", flag: "🇺🇿" },
  { code: "en", label: "English", native: "English", flag: "🇬🇧" },
];

type Dict = Record<string, Record<Lang, string>>;

export const translations: Dict = {
  "eyebrow": {
    ru: "ИСКУССТВО СТИЛЯ",
    uz: "USLUB SAN'ATI",
    en: "THE ART OF STYLE",
  },
  "subtitle": {
    ru: "ПРЕМИУМ КОЛЛЕКЦИЯ",
    uz: "PREMIUM KOLLEKSIYA",
    en: "PREMIUM COLLECTION",
  },
  "ourTelegram": {
    ru: "НАШ TELEGRAM",
    uz: "BIZNING TELEGRAM",
    en: "OUR TELEGRAM",
  },
  "instagram": {
    ru: "INSTAGRAM",
    uz: "INSTAGRAM",
    en: "INSTAGRAM",
  },
  "contacts": {
    ru: "КОНТАКТЫ",
    uz: "KONTAKTLAR",
    en: "CONTACTS",
  },
  "phone": {
    ru: "ТЕЛЕФОН",
    uz: "TELEFON",
    en: "PHONE",
  },
  "telegram": {
    ru: "TELEGRAM",
    uz: "TELEGRAM",
    en: "TELEGRAM",
  },
  "close": {
    ru: "Закрыть",
    uz: "Yopish",
    en: "Close",
  },
  "language": {
    ru: "Язык",
    uz: "Til",
    en: "Language",
  },
};

const STORAGE_KEY = "magnat-lang";

export function getInitialLang(): Lang {
  if (typeof window === "undefined") return "ru";
  const saved = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
  if (saved && languages.some((l) => l.code === saved)) return saved;
  return "ru";
}

export function setStoredLang(lang: Lang) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, lang);
}

export function t(key: string, lang: Lang): string {
  const entry = translations[key];
  if (!entry) return key;
  return entry[lang] ?? entry["ru"] ?? key;
}
