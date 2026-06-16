"use client";

import { useState } from "react";

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
        <span className="sr-only">{isOpen ? "Закрыть меню" : "Открыть меню"}</span>
        <span className="relative block h-4 w-5">
          <span
            className={`absolute left-0 top-0 h-px w-5 bg-current transition duration-300 ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-2 h-px w-5 bg-current transition duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-4 h-px w-5 bg-current transition duration-300 ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      {isOpen ? (
        <div
          id="mobile-navigation"
          className="fixed inset-0 z-[60] bg-[#211c16]/96 px-6 pt-28 pb-10 text-[#fbf6ee] backdrop-blur-sm"
        >
          <nav className="mx-auto flex max-w-md flex-col gap-5">
            {mobileLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="border-b border-[#fbf6ee]/14 pb-5 font-display text-3xl leading-tight transition hover:text-[#d8c7ae]"
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
