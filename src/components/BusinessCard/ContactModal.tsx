import { Phone, Send, X } from "lucide-react";
import "./ContactModal.scss";
import type { Language } from "./BusinessCard";

interface Props {
  close: () => void;
  closing: boolean;
  language: Language;
}

const translations = {
  RU: {
    title: "КОНТАКТЫ",
    phone: "ТЕЛЕФОН",
    telegram: "ТЕЛЕГРАМ",
  },

  EN: {
    title: "CONTACTS",
    phone: "PHONE",
    telegram: "TELEGRAM",
  },

  UZ: {
    title: "ALOQA",
    phone: "TELEFON",
    telegram: "TELEGRAM",
  },
};

const contacts = [
  {
    type: "phone",
    value: "+998 93 593 22 44",
    link: "tel:+998935932244",
  },
  {
    type: "phone",
    value: "+998 77 322 08 88",
    link: "tel:+998773220888",
  },
  {
    type: "phone",
    value: "+998 77 701 03 08",
    link: "tel:+998777010308",
  },
  {
    type: "telegram",
    value: "@Alimov010",
    link: "https://t.me/Alimov010",
  },
  {
    type: "telegram",
    value: "@Alimov4422",
    link: "https://t.me/Alimov4422",
  },
  {
    type: "telegram",
    value: "@akbarovvx",
    link: "https://t.me/akbarovvx",
  },
];

export default function ContactModal({ close, closing, language }: Props) {
  const t = translations[language];

  return (
    <div
      className={`contact-modal ${closing ? "closing" : ""}`}
      onClick={close}
    >
      <div className="contact-modal__box" onClick={(e) => e.stopPropagation()}>
        <button className="contact-modal__close" onClick={close}>
          <X size={22} />
        </button>

        <div className="contact-modal__title">
          <span>MAGNAT</span>
          <h2>{t.title}</h2>
        </div>

        <div className="contact-modal__list">
          {contacts.map((item) => (
            <a
              key={item.value}
              href={item.link}
              target={item.type === "telegram" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="contact-modal__item"
            >
              <div className="contact-modal__icon">
                {item.type === "phone" ? (
                  <Phone size={20} />
                ) : (
                  <Send size={20} />
                )}
              </div>

              <div>
                <small>{item.type === "phone" ? t.phone : t.telegram}</small>

                <span>{item.value}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
