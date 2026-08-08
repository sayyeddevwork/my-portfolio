import React from 'react';
import { Helmet } from 'react-helmet-async';
import sayyedProfileImg from '../assets/images/my_Image.PNG';

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
  image = sayyedProfileImg,
  url,
}) => {
  const siteUrl = url || window.location.origin;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Sayyed Vali" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="var(--bg-primary)" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={siteUrl + image} />
      <meta property="og:site_name" content="Sayyed Vali Portfolio" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={siteUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={siteUrl + image} />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Sayyed Vali",
          "jobTitle": "Senior Full-Stack Engineer & Tech Lead",
          "url": siteUrl,
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
