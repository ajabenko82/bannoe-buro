"use client";

import { useEffect, useState } from "react";

const mobileLinks = [
  { label: "Как мы работаем", href: "#how-we-work" },
  { label: "Что входит в наши программы", href: "#included" },
  { label: "Галерея", href: "#gallery" },
  { label: "Команда мастеров", href: "#team" },
  { label: "Отзывы гостей", href: "#testimonials" },
  { label: "Конфиденциальность", href: "#privacy" },
  { label: "Контакты", href: "#contacts" },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      document.body.classList.remove("menu-open");
      return;
    }

    document.body.style.overflow = "hidden";
    document.body.classList.add("menu-open");

    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("menu-open");
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((current) => !current);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={toggleMenu}
        className="relative z-[70] flex h-11 w-11 items-center justify-center border border-[#fbf6ee]/45 text-[#fbf6ee] transition hover:bg-[#fbf6ee]/10"
        aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
      >
        <span className="sr-only">
          {isOpen ? "Закрыть меню" : "Открыть меню"}
        </span>
        <span className="relative block h-4 w-5">
          <span className="absolute left-0 top-0 h-px w-5 bg-current" />
          <span className="absolute left-0 top-2 h-px w-5 bg-current" />
          <span className="absolute left-0 top-4 h-px w-5 bg-current" />
        </span>
      </button>

      {isOpen ? (
        <div
          id="mobile-navigation"
          className="fixed inset-0 z-[99999] h-[100dvh] w-[100vw] overflow-y-auto bg-[#17130f] text-[#fbf6ee]"
        >
          <button
            type="button"
            onClick={closeMenu}
            className="fixed right-6 top-6 z-[100000] flex h-11 w-11 items-center justify-center border border-[#fbf6ee]/35 text-[#fbf6ee] transition hover:bg-[#fbf6ee]/10"
            aria-label="Закрыть меню"
          >
            <span className="relative block h-5 w-5">
              <span className="absolute left-0 top-1/2 h-px w-5 -translate-y-1/2 rotate-45 bg-current" />
              <span className="absolute left-0 top-1/2 h-px w-5 -translate-y-1/2 -rotate-45 bg-current" />
            </span>
          </button>

          <nav className="flex min-h-full flex-col gap-6 px-8 pt-24 pb-10 leading-[1.1]">
            {mobileLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="font-display text-[clamp(1.85rem,8vw,3rem)] leading-[1.1] text-[#fbf6ee] transition hover:text-[#d8c7ae]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </div>
  );
}
