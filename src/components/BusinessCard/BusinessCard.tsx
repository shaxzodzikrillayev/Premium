
import "./BusinessCard.scss";

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
              <span>⌕</span>
            </div>

            <div className="contact__info">
              <small>ТЕЛЕФОН</small>
              <strong>+998 77 701 03 08</strong>
            </div>

            <div className="contact__arrow">
              ↗
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
              ◎
            </div>

            <div className="contact__info">
              <small>INSTAGRAM</small>
              <strong>@magnat_premium</strong>
            </div>

            <div className="contact__arrow">
              ↗
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
              ✈
            </div>

            <div className="contact__info">
              <small>НАШ TELEGRAM</small>
              <strong>@magnnatpremium</strong>
            </div>

            <div className="contact__arrow">
              ↗
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
              ↗
            </div>

            <div className="contact__info">
              <small>ЛИЧНАЯ СВЯЗЬ</small>
              <strong>@akbarovvx</strong>
            </div>

            <div className="contact__arrow">
              →
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

