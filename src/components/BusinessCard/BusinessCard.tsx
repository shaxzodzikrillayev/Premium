import { useState } from "react";

import "./BusinessCard.scss";

import { ArrowUpRight, Send } from "lucide-react";

import ContactsModal from "./ContactsModal";

const InstagramIcon = () => (
  <svg
    width="19"
    height="19"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="5"
      stroke="currentColor"
      strokeWidth="1.6"
    />

    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />

    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
);

type Contact = {
  title: string;
  value: string;
  href: string;
  icon: React.ReactNode;
  external?: boolean;
  featured?: boolean;
};

const contacts: Contact[] = [

{
    title: "INSTAGRAM",
    value: "@magnat_premium",
    href: "https://www.instagram.com/magnat_.premium",
    external: true,
    icon: <InstagramIcon />,
  },

  {
    title: "НАШ TELEGRAM",
    value: "@Magnnat&premium",
    href: "https://t.me/magnnatpremium",
    external: true,
    icon: <Send size={19} strokeWidth={1.5} />,
  },

];

const BusinessCard = () => {
  const [contactsOpen, setContactsOpen] = useState(false);

  return (
    <main className="business-card">
      <div className="business-card__background">
        <span className="orb orb--one" />

        <span className="orb orb--two" />

        <span className="orb orb--three" />

        <div className="grid" />

        <div className="noise" />
      </div>

      <div className="business-card__content">
        <div className="business-card__top">
          <div className="business-card__logo">
            <span>M</span>
          </div>

          <div className="business-card__mini">EST. 2026</div>
        </div>

        <section className="business-card__hero">
          <span className="business-card__eyebrow">THE ART OF STYLE</span>

          <h1 className="business-card__brand">
            MAGNAT
            <span>PREMIUM</span>
          </h1>

          <p className="business-card__subtitle">PREMIUM COLLECTION</p>
        </section>

        <div className="business-card__line">
          <span />
        </div>

        <div className="business-card__contacts">
          {contacts.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className={`contact ${item.featured ? "contact--featured" : ""}`}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
            >
              <div className="contact__icon">{item.icon}</div>

              <div className="contact__info">
                <small>{item.title}</small>

                <strong>{item.value}</strong>
              </div>

              <div className="contact__arrow">
                <ArrowUpRight size={17} strokeWidth={1.5} />
              </div>
            </a>
          ))}
        </div>

        <button
          className="business-card__contacts-button"
          onClick={() => setContactsOpen(true)}
        >
          CONTACTS
        </button>

        <footer className="business-card__footer">
          <span>MAGNAT PREMIUM</span>

          <span className="business-card__footer-line" />

          <span>2026</span>
        </footer>
      </div>

      {contactsOpen && <ContactsModal onClose={() => setContactsOpen(false)} />}
    </main>
  );
};

export default BusinessCard;
