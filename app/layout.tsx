import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Scale Media — Digital Marketing & Technology Agency",
  description: "Scale Media helps ambitious brands grow through performance marketing, websites, SEO, paid advertising, creative strategy and technology.",
  openGraph: {
    title: "Scale Media — Digital Marketing & Technology Agency",
    description: "Marketing + Technology + Growth",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}