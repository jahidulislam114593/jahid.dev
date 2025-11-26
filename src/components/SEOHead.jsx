import { useEffect } from 'react';
import { siteConfig } from '../config';

export default function SEOHead() {
  useEffect(() => {
    // Get current location
    const currentUrl = window.location.href;
    const site = window.location.origin;
    
    // Page metadata
    const pageTitle = `${siteConfig.name} - ${siteConfig.title}`;
    const desc = siteConfig.description;
    const canonical = currentUrl;
    
    // Asset path helper
    const assetPath = (path) => {
      return path.startsWith('/') ? path : `/${path}`;
    };
    
    // OG Image and favicon
    const ogImageRel = assetPath('og-image.png');
    const ogImageUrl = site + ogImageRel;
    const accent = siteConfig.accentColor;
    
    // Social links
    const social = siteConfig.social || {};
    const sameAs = [social.github, social.linkedin].filter(Boolean);
    
    // Structured data for SEO
    const personJsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: siteConfig.name,
      jobTitle: siteConfig.title,
      url: canonical,
      email: social.email ? `mailto:${social.email}` : undefined,
      sameAs,
    };
    
    const websiteJsonLd = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: siteConfig.name,
      url: canonical,
      description: desc,
      publisher: {
        '@type': 'Person',
        name: siteConfig.name,
      },
    };

    // Set document title
    document.title = pageTitle;

    // Helper to set or update meta tag
    const setMetaTag = (selector, content, attributeName = 'content') => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        const selectorParts = selector.match(/\[(.+?)="(.+?)"\]/);
        if (selectorParts) {
          element.setAttribute(selectorParts[1], selectorParts[2]);
        }
        document.head.appendChild(element);
      }
      if (content) element.setAttribute(attributeName, content);
    };

    // Helper to set or update link tag
    const setLinkTag = (rel, href, type) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        if (type) element.setAttribute('type', type);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // Helper to add JSON-LD script
    const addJsonLd = (data, id) => {
      let script = document.querySelector(`script[data-id="${id}"]`);
      if (!script) {
        script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-id', id);
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(data);
    };

    // Set all meta tags
    setMetaTag('meta[name="description"]', desc);
    setMetaTag('meta[name="robots"]', 'index, follow');
    setMetaTag('meta[name="theme-color"]', accent);
    setMetaTag('meta[name="author"]', siteConfig.name);

    // Open Graph
    setMetaTag('meta[property="og:site_name"]', siteConfig.name);
    setMetaTag('meta[property="og:title"]', pageTitle);
    setMetaTag('meta[property="og:description"]', desc);
    setMetaTag('meta[property="og:type"]', 'website');
    setMetaTag('meta[property="og:url"]', canonical);
    setMetaTag('meta[property="og:image"]', ogImageUrl);
    setMetaTag('meta[property="og:image:secure_url"]', ogImageUrl);
    setMetaTag('meta[property="og:image:type"]', 'image/png');
    setMetaTag('meta[property="og:image:width"]', '1200');
    setMetaTag('meta[property="og:image:height"]', '630');
    setMetaTag('meta[property="og:image:alt"]', `${siteConfig.name} profile / social preview`);

    // Twitter
    setMetaTag('meta[name="twitter:card"]', 'summary_large_image');
    setMetaTag('meta[name="twitter:title"]', pageTitle);
    setMetaTag('meta[name="twitter:description"]', desc);
    setMetaTag('meta[name="twitter:image"]', ogImageUrl);

    // Canonical
    setLinkTag('canonical', canonical);

    // Manifest
    setLinkTag('manifest', assetPath('site.webmanifest'));

    // JSON-LD structured data
    addJsonLd(personJsonLd, 'person-schema');
    addJsonLd(websiteJsonLd, 'website-schema');

  }, []);

  return null;
}