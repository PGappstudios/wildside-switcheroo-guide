
import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  schemaData?: object;
}

const SEO = ({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  schemaData
}: SEOProps) => {
  useEffect(() => {
    // Update title
    if (title) {
      document.title = title;
    }

    // Update meta description
    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      }
    }

    // Update meta keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', keywords);
    }

    // Update canonical URL
    if (canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', canonical);
    }

    // Update Open Graph tags
    if (ogTitle) {
      const ogTitleTag = document.querySelector('meta[property="og:title"]');
      if (ogTitleTag) {
        ogTitleTag.setAttribute('content', ogTitle);
      }
    }

    if (ogDescription) {
      const ogDescTag = document.querySelector('meta[property="og:description"]');
      if (ogDescTag) {
        ogDescTag.setAttribute('content', ogDescription);
      }
    }

    if (ogImage) {
      const ogImageTag = document.querySelector('meta[property="og:image"]');
      if (ogImageTag) {
        ogImageTag.setAttribute('content', ogImage);
      }
    }

    // Add structured data
    if (schemaData) {
      const existingSchema = document.querySelector('#page-schema');
      if (existingSchema) {
        existingSchema.remove();
      }
      
      const script = document.createElement('script');
      script.id = 'page-schema';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schemaData);
      document.head.appendChild(script);
    }
  }, [title, description, keywords, canonical, ogTitle, ogDescription, ogImage, schemaData]);

  return null;
};

export default SEO;
