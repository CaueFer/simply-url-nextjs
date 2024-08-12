import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Simply Url - Reduza links",
  description: "Simplifique seus links",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={
          roboto.className +
          " bg-gradient-to-tr from-theme-dark to-theme-dark-sec flex flex-col justify-center items-center"
        }
      >
        {children}
      </body>
    </html>
  );
}
