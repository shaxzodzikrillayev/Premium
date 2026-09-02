import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Check, Globe } from "lucide-react";
import { languages, t } from "../../i18n";
import { useLanguage } from "../../language/useLanguage";
import "./LanguageSwitcher.scss";

const MENU_WIDTH = 190;
const MENU_ESTIMATED_HEIGHT = 150;

const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const [menuPos, setMenuPos] = useState<{ top: number; left: number } | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      const target = e.target as Node;
      const insideRoot = rootRef.current?.contains(target);
      const insideMenu = menuRef.current?.contains(target);
      if (!insideRoot && !insideMenu) setOpen(false);
    };
    const onOutsideEvent = () => setOpen(false);

    document.addEventListener("mousedown", onDocClick);
    window.addEventListener("resize", onOutsideEvent);
    window.addEventListener("scroll", onOutsideEvent, true);

    return () => {
      document.removeEventListener("mousedown", onDocClick);
      window.removeEventListener("resize", onOutsideEvent);
      window.removeEventListener("scroll", onOutsideEvent, true);
    };
  }, []);

  const toggle = () => {
    const next = !open;
    if (next && btnRef.current) {
      const rect = btnRef.current.getBoundingClientRect();
      let left = rect.right - MENU_WIDTH;
      let top = rect.top - MENU_ESTIMATED_HEIGHT - 10;

      if (left < 12) left = 12;
      if (top < 12) top = 12;

      setMenuPos({ top, left });
    }
    setOpen(next);
  };

  const current = languages.find((l) => l.code === lang) ?? languages[0];

  return (
    <div className="language-switcher" ref={rootRef}>
      <button
        ref={btnRef}
        type="button"
        className="language-switcher__button"
        onClick={toggle}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t("language", lang)}
      >
        <Globe size={16} strokeWidth={1.5} />
        <span>{current.flag}</span>
        <svg
          className={`language-switcher__chevron ${open ? "language-switcher__chevron--open" : ""}`}
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {open &&
        menuPos &&
        createPortal(
          <ul
            ref={menuRef}
            className="language-switcher__menu"
            role="listbox"
            style={{ top: menuPos.top, left: menuPos.left }}
          >
            {languages.map((item) => (
              <li key={item.code}>
                <button
                  type="button"
                  role="option"
                  aria-selected={item.code === lang}
                  onClick={() => {
                    setLang(item.code);
                    setOpen(false);
                  }}
                  className={item.code === lang ? "language-switcher__item--active" : ""}
                >
                  <span className="language-switcher__flag">{item.flag}</span>
                  <span>{item.native}</span>
                  {item.code === lang && <Check size={14} />}
                </button>
              </li>
            ))}
          </ul>,
          document.body
        )}
    </div>
  );
};

export default LanguageSwitcher;