import { useState } from "react";
import Preloader from "./components/Preloader/Preloader";
import BusinessCard from "./components/BusinessCard/BusinessCard";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Preloader finish={() => setLoading(false)} />}

      <BusinessCard />
    </>
  );
}

export default App;
