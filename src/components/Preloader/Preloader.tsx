import { useEffect, useState } from "react";
import "./Preloader.scss";

const Preloader = () => {
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    // Через 3.2 секунды начинаем плавное исчезновение
    const hideTimer = setTimeout(() => {
      setHidden(true);
    }, 3200);

    // Полностью удаляем после анимации исчезновения
    const removeTimer = setTimeout(() => {
      setRemoved(true);
    }, 4700);

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
      className={`
        preloader
        ${hidden ? "preloader--hidden" : ""}
      `}
    >
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
