import Script from 'next/script'

export const StructuredData = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Rayo Consulting",
    "legalName": "Rayo Consulting di Patriarchi Dylan",
    "url": "https://rayoconsulting.org",
    "logo": "https://rayoconsulting.org/logo.svg",
    "foundingDate": "2024",
    "founders": [
      {
        "@type": "Person",
        "name": "Patriarchi Dylan"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Città di Castello",
      "addressRegion": "Umbria",
      "addressCountry": "IT"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "info@rayoconsulting.org",
      "contactType": "customer service",
      "availableLanguage": ["Italian", "English"]
    },
    "sameAs": [
      "https://instagram.com/rayo.consulting"
    ],
    "description": "Rayo Consulting trasforma idee innovative in soluzioni digitali che fanno crescere il business. Sviluppo web, app mobile, automazioni AI e consulenza tecnologica.",
    "knowsAbout": [
      "Sviluppo Web",
      "App Mobile",
      "Intelligenza Artificiale", 
      "Automazioni",
      "Consulenza IT",
      "Next.js",
      "React",
      "Node.js"
    ]
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Rayo Consulting",
    "image": "https://rayoconsulting.org/logo.svg",
    "telephone": "info@rayoconsulting.org",
    "email": "info@rayoconsulting.org",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Città di Castello",
      "addressLocality": "Città di Castello",
      "addressRegion": "Umbria",
      "postalCode": "06012",
      "addressCountry": "IT"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.4563,
      "longitude": 12.2397
    },
    "url": "https://rayoconsulting.org",
    "priceRange": "€€",
    "openingHours": "Mo-Fr 09:00-18:00",
    "description": "Agenzia di sviluppo web e consulenza tecnologica specializzata in siti web, app mobile e automazioni AI a Città di Castello.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "4"
    }
  }

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Rayo Consulting",
    "url": "https://rayoconsulting.org",
    "description": "Sviluppo web, app mobile e automazioni AI per far crescere il tuo business",
    "publisher": {
      "@type": "Organization",
      "name": "Rayo Consulting"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://rayoconsulting.org/#contatti?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Sviluppo Web e App Mobile",
    "description": "Servizi completi di sviluppo web, applicazioni mobile e automazioni AI per aziende",
    "provider": {
      "@type": "Organization",
      "name": "Rayo Consulting"
    },
    "areaServed": ["Umbria", "Toscana", "Lazio", "Italia"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servizi Digitali",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sito Web",
            "description": "Sviluppo di siti web professionali e responsive"
          },
          "price": "750",
          "priceCurrency": "EUR"
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Web App",
            "description": "Applicazioni web avanzate per business"
          },
          "price": "1400",
          "priceCurrency": "EUR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "App Mobile",
            "description": "Applicazioni mobile native per iOS e Android"
          },
          "price": "2000",
          "priceCurrency": "EUR"
        }
      ]
    }
  }

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webSiteSchema),
        }}
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
    </>
  )
} 