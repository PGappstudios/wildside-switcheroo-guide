
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import WorldMap from '../components/WorldMap';
import AdBanner from '../components/AdBanner';
import SEO from '../components/SEO';

const Maps = () => {
  const { mode, themeColors } = useTheme();

  const seoData = mode === 'fishing'
    ? {
        title: 'Interactive Fishing Maps - Global Fishing Spots | Wildside Guide',
        description: 'Explore interactive fishing maps showing the world\'s best fishing locations. Discover prime fishing spots, regulations, and seasonal information worldwide.',
        keywords: 'fishing maps, fishing locations, global fishing spots, interactive fishing map, fishing destinations worldwide'
      }
    : {
        title: 'Interactive Hunting Maps - Global Hunting Areas | Wildside Guide',
        description: 'Explore interactive hunting maps showing premier hunting areas worldwide. Find hunting locations, regulations, and seasonal information across continents.',
        keywords: 'hunting maps, hunting areas, global hunting locations, interactive hunting map, hunting destinations worldwide'
      };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": seoData.title,
    "description": seoData.description,
    "url": "https://wildside-guide.com/maps",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Wildside Guide",
      "url": "https://wildside-guide.com"
    },
    "mainEntity": {
      "@type": "Map",
      "name": `${mode === 'fishing' ? 'Fishing' : 'Hunting'} Locations Map`,
      "description": `Interactive map showing ${mode === 'fishing' ? 'fishing spots' : 'hunting areas'} worldwide`
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonical="https://wildside-guide.com/maps"
        ogTitle={seoData.title}
        ogDescription={seoData.description}
        schemaData={schemaData}
      />

      <div className={`bg-gradient-to-r ${themeColors.gradient} text-white py-20`}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">
            {mode === 'fishing' ? 'Fishing Maps' : 'Hunting Maps'}
          </h1>
          <p className="text-xl">
            {mode === 'fishing' 
              ? 'Explore global fishing opportunities around the world' 
              : 'Discover hunting areas and wildlife across continents'
            }
          </p>
        </div>
      </div>

      {/* Top Ad Banner */}
      <div className="container mx-auto px-4 py-8">
        <AdBanner size="leaderboard" />
      </div>

      <div className="container mx-auto px-4 pb-16">
        {/* Interactive World Map Section */}
        <div className="mb-12">
          <WorldMap />
        </div>

        {/* Bottom Ad Banner */}
        <div className="mt-8">
          <AdBanner size="large-banner" />
        </div>
      </div>
    </div>
  );
};

export default Maps;
