
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { ArrowRight, Fish, Target } from 'lucide-react';
import AdBanner from './AdBanner';
import SEO from './SEO';

const HomePage = () => {
  const { mode, themeColors } = useTheme();

  if (!mode) return null;

  const content = mode === 'fishing' 
    ? {
        title: 'Ultimate Fishing Guide - Best Spots, Gear & Tips | Wildside Guide',
        description: 'Discover the world\'s best fishing destinations, top-rated gear, and expert techniques. Your complete resource for successful fishing adventures worldwide.',
        keywords: 'fishing guide, best fishing spots, fishing gear, fishing tips, fishing destinations, fish species, fishing equipment, fishing techniques',
        h1: 'Master the Art of Fishing',
        subtitle: 'Discover the world\'s best fishing destinations and techniques',
        features: [
          { title: 'Global Fishing Spots', desc: 'Top-rated locations worldwide', link: '/spots', icon: Fish },
          { title: 'Professional Tools', desc: 'Essential gear and equipment', link: '/tools', icon: Fish },
          { title: 'Seasonal Guide', desc: 'Best times to fish', link: '/seasons', icon: Fish },
          { title: 'Fish Species', desc: 'Comprehensive species database', link: '/species', icon: Fish }
        ],
        bgImage: 'https://images.unsplash.com/photo-1518877593221-1f28583780b4?auto=format&fit=crop&w=1920&q=80'
      }
    : {
        title: 'Ultimate Hunting Guide - Best Areas, Gear & Tips | Wildside Guide',
        description: 'Explore premier hunting grounds, top-rated equipment, and expert tracking techniques. Your complete resource for successful hunting adventures worldwide.',
        keywords: 'hunting guide, best hunting areas, hunting gear, hunting tips, hunting locations, wildlife guide, hunting equipment, hunting techniques',
        h1: 'Experience the Thrill of Hunting',
        subtitle: 'Explore premier hunting grounds and wildlife tracking',
        features: [
          { title: 'Prime Hunting Areas', desc: 'Best locations by region', link: '/areas', icon: Target },
          { title: 'Legal Weapons', desc: 'Approved hunting equipment', link: '/weapons', icon: Target },
          { title: 'Hunting Seasons', desc: 'Optimal hunting periods', link: '/seasons', icon: Target },
          { title: 'Wildlife Guide', desc: 'Animal behavior and habitats', link: '/animals', icon: Target }
        ],
        bgImage: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1920&q=80'
      };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": mode === 'fishing' ? "Fishing Guide" : "Hunting Guide",
    "description": content.description,
    "url": "https://wildside-guide.com",
    "mainEntity": {
      "@type": "Organization",
      "name": "Wildside Guide",
      "description": `Ultimate ${mode} resource and guide`
    }
  };

  return (
    <div className="min-h-screen">
      <SEO
        title={content.title}
        description={content.description}
        keywords={content.keywords}
        canonical="https://wildside-guide.com"
        ogTitle={content.title}
        ogDescription={content.description}
        ogImage="https://wildside-guide.com/images/og-image.jpg"
        schemaData={schemaData}
      />

      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${content.bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          <h1 className="text-6xl font-bold mb-6 animate-fade-in">
            {content.h1}
          </h1>
          <p className="text-xl mb-8 animate-fade-in">
            {content.subtitle}
          </p>
          <Link
            to="/spots"
            className={`inline-flex items-center bg-gradient-to-r ${themeColors.gradient} text-white px-8 py-4 rounded-lg text-lg font-semibold hover:scale-105 transition-transform`}
            aria-label={`Explore ${mode === 'fishing' ? 'fishing spots' : 'hunting areas'}`}
          >
            Explore Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Top Ad Banner */}
      <div className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <AdBanner size="leaderboard" />
        </div>
      </div>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <header className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Everything You Need for {mode === 'fishing' ? 'Fishing' : 'Hunting'}
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive resources for your outdoor adventures
            </p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <article key={feature.title}>
                  <Link
                    to={feature.link}
                    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group block"
                    aria-label={`Learn about ${feature.title}`}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${themeColors.gradient} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.desc}
                    </p>
                  </Link>
                </article>
              );
            })}
          </div>

          {/* Middle Ad Banner */}
          <div className="mt-16 mb-8">
            <AdBanner size="large-banner" />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Why Choose Wildside Guide?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Expert Knowledge</h3>
                <p className="text-gray-600">
                  Our guides are created by experienced {mode === 'fishing' ? 'anglers' : 'hunters'} with decades of field experience.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Global Coverage</h3>
                <p className="text-gray-600">
                  Discover opportunities across continents with detailed location guides and local insights.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Always Updated</h3>
                <p className="text-gray-600">
                  Stay current with the latest regulations, seasons, and best practices for sustainable {mode}.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Ad Banner */}
      <div className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <AdBanner size="leaderboard" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
