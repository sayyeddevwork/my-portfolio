import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = "Sayyed Vali - Senior Full-Stack Engineer & Tech Lead Portfolio",
  description = "Portfolio of Sayyed Vali, a Senior Full-Stack Engineer and Tech Lead with 10+ years of expertise in React, Node.js, Cloud Architecture, and scalable web solutions.",
  keywords = "Sayyed Vali, Full-Stack Engineer, Tech Lead, Software Architect, React, TypeScript, Node.js, Cloud Solutions, Web Development Portfolio",
  image = "/assets/images/sayyed_profile_1786154002467.jpg",
  url = "https://ais-dev-wdi6xduyqmifeh7nqqp7cb-303334874421.asia-southeast1.run.app",
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Sayyed Vali" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#0E3A4C" />

      {/* Open Graph / Facebook / LinkedIn */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Sayyed Vali Portfolio" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data / JSON-LD for Search Engine Rich Snippets */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Sayyed Vali",
          "jobTitle": "Senior Full-Stack Engineer & Tech Lead",
          "url": url,
          "sameAs": [
            "https://github.com/sanasham",
            "https://linkedin.com/in/esub-vali-sayyed-516759100"
          ],
          "knowsAbout": [
            "React",
            "TypeScript",
            "Node.js",
            "Cloud Architecture",
            "System Design",
            "Full-Stack Development"
          ],
          "worksFor": {
            "@type": "Organization",
            "name": "Sayyed Vali Engineering"
          }
        })}
      </script>
    </Helmet>
  );
};
