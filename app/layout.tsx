import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/main/navbar";
import { Footer } from "@/components/main/footer";
import { StarsCanvas } from "@/components/main/star-background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rayo Consulting | Sviluppo Web, App Mobile e AI",
  description: "Trasformiamo le tue idee in successi digitali. Siti web, app mobile, automazioni AI e consulenza tecnologica per far crescere il tuo business.",
  keywords: "sviluppo web, app mobile, intelligenza artificiale, consulenza IT, Rayo Consulting, siti web, automazioni",
  authors: [{ name: "Rayo Consulting di Patriarchi Dylan" }],
  creator: "Rayo Consulting",
  publisher: "Rayo Consulting",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" }
    ],
    apple: { url: "/apple-icon.png", sizes: "180x180" }
  },
  openGraph: {
    title: "Rayo Consulting | Sviluppo Web, App Mobile e AI",
    description: "Trasformiamo le tue idee in successi digitali. Soluzioni innovative per far crescere il tuo business.",
    url: "https://rayoconsulting.org",
    siteName: "Rayo Consulting",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "Rayo Consulting Logo"
      }
    ],
    locale: "it_IT",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Rayo Consulting | Sviluppo Web, App Mobile e AI",
    description: "Trasformiamo le tue idee in successi digitali.",
    images: ["/logo.svg"]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
