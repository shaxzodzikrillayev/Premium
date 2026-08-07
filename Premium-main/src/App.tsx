import { useEffect, useState } from "react";
import BusinessCard from "./components/BusinessCard/BusinessCard";
import Preloader from "./components/Preloader/Preloader";
import "./App.scss";

function App() {
  const [loading, setLoading] = useState(true);
  const [hidePreloader, setHidePreloader] = useState(false);

  useEffect(() => {
    // Через 3 секунды запускаем исчезновение
    const hideTimer = setTimeout(() => {
      setHidePreloader(true);
    }, 2200);

    // После окончания анимации убираем прелоадер
    const removeTimer = setTimeout(() => {
      setLoading(false);
    }, 4200); // 3000 + 1200ms анимации

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <>
      <BusinessCard />

      {loading && <Preloader hidden={hidePreloader} />}
    </>
  );
}

export default App;
