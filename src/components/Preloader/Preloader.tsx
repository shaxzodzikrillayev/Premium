import "./Preloader.scss";
import { useLanguage } from "../../language/useLanguage";
import { t } from "../../i18n";

interface Props {
  hidden: boolean;
}

const Preloader = ({ hidden }: Props) => {
  const { lang } = useLanguage();

  return (
    <div className={`preloader ${hidden ? "preloader--hidden" : ""}`}>
      {/* Светящийся фон */}
      <div className="preloader__glow" />

      {/* Логотип */}
      <div className="preloader__logo">M</div>

      {/* Название */}
      <div className="preloader__brand">MAGNAT</div>

      {/* Подзаголовок */}
      <div className="preloader__subtitle">{t("subtitle", lang)}</div>

      {/* Линия загрузки */}
      <div className="preloader__line">
        <span />
      </div>
    </div>
  );
};

export default Preloader;
