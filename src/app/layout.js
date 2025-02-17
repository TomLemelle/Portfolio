import { Geist, Geist_Mono, Mona_Sans, Abyssinica_SIL } from "next/font/google";
import "./globals.css";

const monoSans = Mona_Sans({
  variable: "--font-mono-sans",
  subsets: ["latin"],
});

const abyssinica = Abyssinica_SIL({
  variable: "--font-abyssinica",
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio Tom Lemelle",
  description:
    "Portfolio de Tom Lemelle, développeur web, mobile, webflow et photographe et vidéadte",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${monoSans.variable} ${abyssinica.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
