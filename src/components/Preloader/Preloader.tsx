import { useEffect, useState } from "react";
import "./Preloader.scss";

const Preloader = () => {
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    // Прелоадер показывается 3.2 секунды
    const hideTimer = setTimeout(() => {
      setHidden(true);
    }, 3200);

    // Через 1.4 секунды после начала исчезновения
    // полностью удаляем прелоадер
    const removeTimer = setTimeout(() => {
      setRemoved(true);
    }, 4600);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (removed) {
    return null;
  }

  return (
    <div
      className={`preloader ${
        hidden ? "preloader--hidden" : ""
      }`}
    >
      <div className="preloader__glow" />

      <div className="preloader__logo">
        M
      </div>

      <div className="preloader__brand">
        MAGNAT
      </div>

      <div className="preloader__subtitle">
        PREMIUM COLLECTION
      </div>

      <div className="preloader__line">
        <span />
      </div>
    </div>
  );
};

export default Preloader;

