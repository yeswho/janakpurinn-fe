import React from 'react';
import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../../config/seo';

interface SEOWrapperProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  schema?: Record<string, unknown> | Record<string, unknown>[];
  children: React.ReactNode;
}

const SEOWrapper: React.FC<SEOWrapperProps> = ({
  title,
  description,
  canonicalUrl,
  ogImage,
  schema,
  children,
}) => {
  const metaTitle = title ? `${title} | ${siteConfig.siteName}` : siteConfig.defaultTitle;
  const metaDescription = description || siteConfig.defaultDescription;
  const metaImage = ogImage || siteConfig.defaultOgImage;
  const url = canonicalUrl ? `${siteConfig.baseUrl}${canonicalUrl}` : siteConfig.baseUrl;

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={metaImage} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={metaTitle} />
        <meta property="twitter:description" content={metaDescription} />
        <meta property="twitter:image" content={metaImage} />

        {canonicalUrl && <link rel="canonical" href={url} />}

        {schema && (
          <script type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        )}
      </Helmet>
      {children}
    </>
  );
};

export default SEOWrapper;
