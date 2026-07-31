import { useEffect, useState } from "react";
import { ArrowUpRight, Send } from "lucide-react";

import "./BusinessCard.scss";

import ContactModal from "./ContactModal";
import LanguageSwitcher from "./LanguageSwitcher";

export type Language = "RU" | "EN" | "UZ";

const translations = {
  RU: {
    mini: "ПРЕМИАЛЬНАЯ ВИЗИТКА",
    eyebrow: "ИСКУССТВО СТИЛЯ",
    subtitle: "ЛЮКСОВАЯ БИЗНЕС ВИЗИТКА",

    telegram: "ТЕЛЕГРАМ КАНАЛ",
    instagram: "ИНСТАГРАМ",
    contact: "КОНТАКТЫ",
  },

  EN: {
    mini: "PREMIUM BUSINESS CARD",
    eyebrow: "THE ART OF STYLE",
    subtitle: "LUXURY BUSINESS CARD",

    telegram: "TELEGRAM CHANNEL",
    instagram: "INSTAGRAM",
    contact: "CONTACTS",
  },

  UZ: {
    mini: "PREMIUM VIZITKA",
    eyebrow: "USLUB SAN'ATI",
    subtitle: "LUXURY BIZNES VIZITKA",

    telegram: "TELEGRAM KANAL",
    instagram: "INSTAGRAM",
    contact: "ALOQA",
  },
};

export default function BusinessCard() {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("magnat-language");

    if (saved === "RU" || saved === "EN" || saved === "UZ") {
      return saved;
    }

    return "RU";
  });

  const [modal, setModal] = useState(false);

  const [closing, setClosing] = useState(false);

  useEffect(() => {
    localStorage.setItem("magnat-language", language);
  }, [language]);

  const closeModal = () => {
    setClosing(true);

    setTimeout(() => {
      setModal(false);

      setClosing(false);
    }, 400);
  };

  const t = translations[language];

  return (
    <section className="business-card">
      <div className="business-card__background">
        <span className="orb orb--one" />

        <span className="orb orb--two" />

        <span className="orb orb--three" />

        <div className="grid" />

        <div className="noise" />
      </div>

      <LanguageSwitcher language={language} changeLanguage={setLanguage} />

      <div className="business-card__content">
        <header className="business-card__top">
          <div className="business-card__logo">
            <span>M</span>
          </div>

          <p className="business-card__mini">{t.mini}</p>
        </header>

        <section className="business-card__hero">
          <span className="business-card__eyebrow">{t.eyebrow}</span>

          <h1 className="business-card__brand">
            MAGNAT
            <span>PREMIUM</span>
          </h1>

          <p className="business-card__subtitle">{t.subtitle}</p>
        </section>

        <div className="business-card__line">
          <span />
        </div>

        <div className="business-card__contacts">
          <a
            href="https://t.me/magnnatpremium"
            target="_blank"
            rel="noopener noreferrer"
            className="contact"
          >
            <div className="contact__icon">
              <Send size={20} />
            </div>

            <div className="contact__info">
              <small>{t.telegram}</small>

              <strong>Magnat&premium</strong>
            </div>

            <ArrowUpRight size={18} />
          </a>

          <a
            href="https://instagram.com/magnat_.premium"
            target="_blank"
            rel="noopener noreferrer"
            className="contact"
          >
            <div className="contact__icon">
              <img
                className="instagram-icon"
                src="/instagram.svg"
                alt="Instagram"
              />
            </div>

            <div className="contact__info">
              <small>{t.instagram}</small>

              <strong>@magnat_.premium</strong>
            </div>

            <ArrowUpRight size={18} />
          </a>

          <button className="contact-button" onClick={() => setModal(true)}>
            {t.contact}
          </button>
        </div>

        <footer className="business-card__footer">
          <span>MAGNAT PREMIUM</span>

          <span>2026</span>
        </footer>
      </div>

      {modal && (
        <ContactModal
          close={closeModal}
          closing={closing}
          language={language}
        />
      )}
    </section>
  );
}
