import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Simply Url - Reduza e simplifique seus links",
  description: "Reduza e simplifique seus links",
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
        <Toaster />
      </body>
    </html>
  );
}
