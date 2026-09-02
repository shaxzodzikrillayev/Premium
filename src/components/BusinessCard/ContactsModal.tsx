import { useState, useEffect, useRef } from "react";
import "./ContactsModal.scss";

import { X, Phone, ArrowUpRight } from "lucide-react";

type Props = {
  onClose: () => void;
};

const ContactsModal = ({ onClose }: Props) => {
  const [closing, setClosing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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
        <button className="contacts-modal__close" onClick={closeModal}>
          <X size={20} />
        </button>

        <span className="contacts-modal__label">CONTACTS</span>

        <h2>
          MAGNAT
          <span>PREMIUM</span>
        </h2>

        <div className="contacts-modal__items">
          <a href="tel:+998935932244">
            <Phone size={20} />
            <div>
              <small>ТЕЛЕФОН</small>
              <strong>+998 93 593 22 44</strong>
            </div>
          </a>

          <a href="tel:+998777010308">
            <Phone size={20} />
            <div>
              <small>ТЕЛЕФОН</small>
              <strong>+998 77 701 03 08</strong>
            </div>
          </a>

          <a href="tel:+998773220888">
            <Phone size={20} />
            <div>
              <small>ТЕЛЕФОН</small>
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
              <small>TELEGRAM</small>
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
              <small>TELEGRAM</small>
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
              <small>TELEGRAM</small>
              <strong>@Alimov4422</strong>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactsModal;