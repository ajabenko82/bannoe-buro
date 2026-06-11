"use client";

import Image from "next/image";
import { useState } from "react";

const galleryImages = [
  "/images/gallery/gallery-01.jpg",
  "/images/gallery/gallery-02.jpg",
  "/images/gallery/gallery-03.jpg",
  "/images/gallery/gallery-04.jpg",
  "/images/gallery/gallery-05.jpg",
  "/images/gallery/gallery-06.jpg",
];

export default function Gallery() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <>
      <section id="gallery" className="section-space px-6 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-20 lg:grid-cols-[0.72fr_1.28fr]">
            <p className="eyebrow reveal">Галерея</p>
            <div className="reveal max-w-3xl">
              <h2 className="font-display text-[clamp(2.35rem,4vw,4.6rem)] font-normal leading-[1.04]">
                Галерея
              </h2>
              <p className="mt-12 max-w-2xl text-xl leading-9 text-[#5b5044]">
                Фрагменты ритуалов, пространств и выездных проектов Банного
                Бюро.
              </p>
            </div>
          </div>

          <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((src, index) => (
              <button
                key={src}
                type="button"
                onClick={() => setActiveImage(src)}
                className="reveal group overflow-hidden border border-[#d3c4ae] bg-[#fbf6ee]/55 text-left"
                aria-label={`Открыть фото галереи ${index + 1}`}
              >
                <Image
                  src={src}
                  alt={`Галерея Банного Бюро ${index + 1}`}
                  width={900}
                  height={1200}
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                  className="h-auto w-full transition duration-700 group-hover:scale-[1.03]"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {activeImage ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#15110c]/90 p-5 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Просмотр изображения галереи"
          onClick={() => setActiveImage(null)}
        >
          <button
            type="button"
            onClick={() => setActiveImage(null)}
            className="absolute right-5 top-5 border border-[#fbf6ee]/50 px-4 py-3 text-xs uppercase text-[#fbf6ee] transition hover:bg-[#fbf6ee] hover:text-[#201b15] sm:right-8 sm:top-8"
          >
            Закрыть
          </button>
          <div
            className="relative max-h-[86svh] w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={activeImage}
              alt="Открытое изображение галереи Банного Бюро"
              width={1600}
              height={2000}
              sizes="100vw"
              className="mx-auto max-h-[86svh] w-auto max-w-full object-contain"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
