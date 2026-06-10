import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Банное Бюро",
  description:
    "Команда премиальных банных мастеров, которая подбирает ритуал под состояние гостя.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
