import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

// Primary heading font
const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

// Secondary heading font
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-montserrat",
  display: "swap",
});

// Body text font
const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LUMIÈRE | Vancouver's Premier Nail & Lash Atelier",
  description: "Experience luxury nail and lash artistry at Vancouver's most sought-after beauty atelier. Located in Yaletown, LUMIÈRE offers bespoke beauty experiences in a serene sanctuary.",
  keywords: ["nail salon", "lash extensions", "Vancouver", "Yaletown", "luxury beauty", "nail art", "eyelash extensions"],
  openGraph: {
    title: "LUMIÈRE | Vancouver's Premier Nail & Lash Atelier",
    description: "Experience luxury nail and lash artistry at Vancouver's most sought-after beauty atelier.",
    url: "https://lumierestudio.ca",
    siteName: "LUMIÈRE",
    locale: "en_CA",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cormorantGaramond.variable} ${montserrat.variable} ${nunitoSans.variable} font-nunito antialiased bg-background text-foreground`}
        suppressHydrationWarning
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        {/* <FontLoadingScript /> */}
      </body>
    </html>
  );
}
