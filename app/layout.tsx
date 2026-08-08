import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ABTalks — Build. Ship. Repeat.",
  description: "A 60-day coding challenge for students who want proof of work.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}