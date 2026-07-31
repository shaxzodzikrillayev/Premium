import { useEffect, useState } from "react";
import BusinessCard from "./components/BusinessCard/BusinessCard";
import Preloader from "./components/Preloader/Preloader";
import "./App.scss";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Preloader />}
      <BusinessCard />
    </>
  );
}

export default App;