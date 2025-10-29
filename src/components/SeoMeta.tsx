import React from "react";
import { Helmet } from "react-helmet";

const SEO = () => {
  const siteTitle = "Dream Affirmations | Peaceful Sleep & Positive Energy";
  const siteDescription =
    "Daily sleep affirmations to calm your mind, attract peaceful dreams, and awaken positive energy.";
  const siteUrl = import.meta.env.VITE_MAIN_URL;
  const siteImage = `${siteUrl}/og-image.jpg`; // replace with your banner image path

  return (
    <Helmet>
      {/* ✅ Basic Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta
        name="keywords"
        content="dream affirmations, sleep affirmations, calm mind, manifestation, relaxation"
      />
      <meta name="author" content="Dream Affirmations" />
      <meta name="robots" content="index, follow" />

      {/* ✅ Open Graph (Facebook, WhatsApp, etc.) */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:image" content={siteImage} />
      <meta property="og:type" content="website" />

      {/* ✅ Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={siteImage} />

      {/* ✅ Canonical URL */}
      <link rel="canonical" href={siteUrl} />

      {/* ✅ JSON-LD Schema */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Dream Affirmations",
            "url": "${siteUrl}",
            "description": "${siteDescription}"
          }
        `}
      </script>

      {/* ✅ Favicon & Manifest */}
      <link rel="icon" href="/favicon.ico" />
    </Helmet>
  );
};

export default SEO;
