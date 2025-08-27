import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "HOTBOX Social - Sauna & Cold Plunge | Bristol",
  description: "Experience the ultimate wellness journey with our sauna and cold plunge sessions in Bristol. Join HOTBOX Social for rejuvenating wellness experiences.",
  keywords: "sauna, cold plunge, wellness, Bristol, HOTBOX Social, health, rejuvenation",
  authors: [{ name: "HOTBOX Social" }],
  openGraph: {
    title: "HOTBOX Social - Sauna & Cold Plunge | Bristol",
    description: "Experience the ultimate wellness journey with our sauna and cold plunge sessions in Bristol.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
