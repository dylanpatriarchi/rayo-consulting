import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/main/navbar";
import { Footer } from "@/components/main/footer";
import { StarsCanvas } from "@/components/main/star-background";
import { StructuredData } from "@/components/seo/structured-data";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  title: "Rayo Consulting | Sviluppo Web, App Mobile e AI - Città di Castello",
  description: "🚀 Agenzia di sviluppo web a Città di Castello. Siti web, app mobile, automazioni AI per far crescere il tuo business. Consulenza gratuita ⭐ P.IVA 03988190546",
  keywords: [
    // Parole chiave primarie
    "sviluppo web Città di Castello",
    "agenzia web Umbria", 
    "app mobile Perugia",
    "siti web Città di Castello",
    "sviluppatore web Umbria",
    
    // Servizi specifici
    "creazione siti internet",
    "sviluppo applicazioni mobile",
    "automazioni intelligenza artificiale",
    "consulenza tecnologica",
    "web design responsive",
    
    // Tecnologie
    "React developer",
    "Next.js sviluppo",
    "Node.js backend",
    "consulenza IT",
    
    // Business/Local
    "Rayo Consulting",
    "Patriarchi Dylan",
    "agenzia digitale Umbria",
    "web agency Toscana"
  ].join(", "),
  authors: [{ name: "Rayo Consulting di Patriarchi Dylan" }],
  creator: "Rayo Consulting",
  publisher: "Rayo Consulting",
  category: "Technology",
  classification: "Business",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" }
    ],
    apple: { url: "/apple-icon.png", sizes: "180x180" }
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  alternates: {
    canonical: "https://rayoconsulting.org",
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://rayoconsulting.org",
    siteName: "Rayo Consulting",
    title: "Rayo Consulting | Sviluppo Web e App Mobile a Città di Castello",
    description: "🚀 Trasformiamo le tue idee in successi digitali. Siti web performanti, app mobile native e automazioni AI per far crescere il tuo business.",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "Rayo Consulting - Agenzia Web Città di Castello",
        type: "image/svg+xml"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rayo Consulting | Sviluppo Web e App Mobile",
    description: "🚀 Trasformiamo le tue idee in successi digitali. Siti web, app mobile e automazioni AI a Città di Castello.",
    images: ["/logo.svg"],
    site: "@rayoconsulting",
    creator: "@rayoconsulting"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <head>
        <StructuredData />
      </head>
      <body className={`${poppins.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
