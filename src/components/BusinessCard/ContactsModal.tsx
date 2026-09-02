import { useState, useEffect, useRef } from "react";
import "./ContactsModal.scss";

import { X, Phone, ArrowUpRight } from "lucide-react";
import { useLanguage } from "../../language/useLanguage";
import { t } from "../../i18n";

type Props = {
  onClose: () => void;
};

const ContactsModal = ({ onClose }: Props) => {
  const [closing, setClosing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { lang } = useLanguage();

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const closeModal = () => {
    if (closing) return;

    setClosing(true);

    timerRef.current = setTimeout(() => {
      onClose();
    }, 600);
  };

  return (
    <div
      className={`contacts-modal ${closing ? "contacts-modal--closing" : ""}`}
    >
      <div className="contacts-modal__overlay" onClick={closeModal} />

      <div className="contacts-modal__card">
        <button
          className="contacts-modal__close"
          onClick={closeModal}
          aria-label={t("close", lang)}
        >
          <X size={20} />
        </button>

        <span className="contacts-modal__label">{t("contacts", lang)}</span>

        <h2>
          MAGNAT
          <span>PREMIUM</span>
        </h2>

        <div className="contacts-modal__items">
          <a href="tel:+998935932244">
            <Phone size={20} />
            <div>
              <small>{t("phone", lang)}</small>
              <strong>+998 93 593 22 44</strong>
            </div>
          </a>

          <a href="tel:+998777010308">
            <Phone size={20} />
            <div>
              <small>{t("phone", lang)}</small>
              <strong>+998 77 701 03 08</strong>
            </div>
          </a>

          <a href="tel:+998773220888">
            <Phone size={20} />
            <div>
              <small>{t("phone", lang)}</small>
              <strong>+998 77 322 08 88</strong>
            </div>
          </a>

          <a
            href="https://t.me/Alimov010"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ArrowUpRight size={20} />
            <div>
              <small>{t("telegram", lang)}</small>
              <strong>@Alimov010</strong>
            </div>
          </a>

          <a
            href="https://t.me/akbarovvx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ArrowUpRight size={20} />
            <div>
              <small>{t("telegram", lang)}</small>
              <strong>@akbarovvx</strong>
            </div>
          </a>

          <a
            href="https://t.me/Alimov4422"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ArrowUpRight size={20} />
            <div>
              <small>{t("telegram", lang)}</small>
              <strong>@Alimov4422</strong>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactsModal;
