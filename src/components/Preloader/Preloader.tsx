import { useEffect, useState } from "react";
import "./Preloader.scss";

interface Props {
  finish: () => void;
}

export default function Preloader({ finish }: Props) {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);

      setTimeout(() => {
        finish();
      }, 1500);
    }, 3200);

    return () => clearTimeout(timer);
  }, [finish]);

  return (
    <div className={`preloader ${hide ? "preloader--hidden" : ""}`}>
      <div className="explosion">
        {Array.from({ length: 40 }).map((_, i) => (
          <span key={i}></span>
        ))}
      </div>

      <div className="particles">
        {Array.from({ length: 35 }).map((_, i) => (
          <span key={i}></span>
        ))}
      </div>

      <div className="logo-animation">
        <div className="circle"></div>

        <div className="letter">M</div>
      </div>

      <div className="brand">
        <h1>MAGNAT</h1>

        <span>PREMIUM</span>
      </div>

      <div className="gold-line"></div>
    </div>
  );
}
