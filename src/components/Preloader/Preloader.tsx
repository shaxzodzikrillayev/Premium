import "./Preloader.scss";

interface Props {
  hidden: boolean;
}

const Preloader = ({ hidden }: Props) => {
  return (
    <div className={`preloader ${hidden ? "preloader--hidden" : ""}`}>
      {/* Светящийся фон */}
      <div className="preloader__glow" />

      {/* Логотип */}
      <div className="preloader__logo">M</div>

      {/* Название */}
      <div className="preloader__brand">MAGNAT</div>

      {/* Подзаголовок */}
      <div className="preloader__subtitle">PREMIUM COLLECTION</div>

      {/* Линия загрузки */}
      <div className="preloader__line">
        <span />
      </div>
    </div>
  );
};

export default Preloader;
