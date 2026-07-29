import "./BusinessCard.scss";

import {
  Phone,
  ArrowUpRight,
  Send,
} from "lucide-react";

const InstagramIcon = () => {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
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

      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeWidth="1.6"
      />

      <circle
        cx="17.5"
        cy="6.5"
        r="1"
        fill="currentColor"
      />
    </svg>
  );
};

const BusinessCard = () => {
  return (
    <main className="business-card">

      {/* =================================
          PREMIUM BACKGROUND
      ================================= */}

      <div className="business-card__background">
        <span className="orb orb--one" />
        <span className="orb orb--two" />
        <span className="orb orb--three" />

        <div className="grid" />
        <div className="noise" />
      </div>

      {/* =================================
          CARD
      ================================= */}

      <div className="business-card__content">

        {/* TOP */}

        <div className="business-card__top">

          <div className="business-card__logo">
            <span>M</span>
          </div>

          <div className="business-card__mini">
            EST. 2026
          </div>

        </div>

        {/* =================================
            BRAND
        ================================= */}

        <section className="business-card__hero">

          <span className="business-card__eyebrow">
            THE ART OF STYLE
          </span>

          <h1 className="business-card__brand">
            MAGNAT
            <span>PREMIUM</span>
          </h1>

          <p className="business-card__subtitle">
            PREMIUM COLLECTION
          </p>

        </section>

        {/* GOLD LINE */}

        <div className="business-card__line">
          <span />
        </div>

        {/* =================================
            CONTACTS
        ================================= */}

        <div className="business-card__contacts">

          {/* PHONE */}

          <a
            href="tel:+998777010308"
            className="contact"
          >
            <div className="contact__icon">
              <Phone
                size={19}
                strokeWidth={1.5}
              />
            </div>

            <div className="contact__info">
              <small>ТЕЛЕФОН</small>
              <strong>+998 77 701 03 08</strong>
            </div>

            <div className="contact__arrow">
              <ArrowUpRight
                size={17}
                strokeWidth={1.5}
              />
            </div>
          </a>

          {/* INSTAGRAM */}

          <a
            href="https://www.instagram.com/magnat_.premium"
            target="_blank"
            rel="noopener noreferrer"
            className="contact"
          >
            <div className="contact__icon">
              <InstagramIcon />
            </div>

            <div className="contact__info">
              <small>INSTAGRAM</small>
              <strong>@magnat_premium</strong>
            </div>

            <div className="contact__arrow">
              <ArrowUpRight
                size={17}
                strokeWidth={1.5}
              />
            </div>
          </a>

          {/* TELEGRAM */}

          <a
            href="https://t.me/magnnatpremium"
            target="_blank"
            rel="noopener noreferrer"
            className="contact"
          >
            <div className="contact__icon">
              <Send
                size={19}
                strokeWidth={1.5}
              />
            </div>

            <div className="contact__info">
              <small>НАШ TELEGRAM</small>
              <strong>@magnnatpremium</strong>
            </div>

            <div className="contact__arrow">
              <ArrowUpRight
                size={17}
                strokeWidth={1.5}
              />
            </div>
          </a>

          {/* PERSONAL CONTACT */}

          <a
            href="https://t.me/akbarovvx"
            target="_blank"
            rel="noopener noreferrer"
            className="contact contact--featured"
          >
            <div className="contact__icon">
              <ArrowUpRight
                size={19}
                strokeWidth={1.5}
              />
            </div>

            <div className="contact__info">
              <small>ЛИЧНАЯ СВЯЗЬ</small>
              <strong>@akbarovvx</strong>
            </div>

            <div className="contact__arrow">
              <ArrowUpRight
                size={17}
                strokeWidth={1.5}
              />
            </div>
          </a>

        </div>

        {/* =================================
            FOOTER
        ================================= */}

        <footer className="business-card__footer">
          <span>MAGNAT PREMIUM</span>

          <span className="business-card__footer-line" />

          <span>2026</span>
        </footer>

      </div>
    </main>
  );
};

export default BusinessCard;