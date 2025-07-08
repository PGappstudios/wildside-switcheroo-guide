
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import SEO from '../components/SEO';

const Seasons = () => {
  const { mode, themeColors } = useTheme();

  const seoData = mode === 'fishing'
    ? {
        title: 'Fishing Seasons Guide - When to Fish for Best Results | Wildside Guide',
        description: 'Complete fishing seasons guide with optimal fishing times, species availability, and expert tips for each season. Maximize your fishing success year-round.',
        keywords: 'fishing seasons, best fishing times, seasonal fishing guide, fishing calendar, when to fish, fishing by season'
      }
    : {
        title: 'Hunting Seasons Guide - Optimal Hunting Times | Wildside Guide',
        description: 'Comprehensive hunting seasons guide with prime hunting times, species availability, and seasonal strategies. Plan your hunting trips for maximum success.',
        keywords: 'hunting seasons, hunting calendar, best hunting times, seasonal hunting guide, when to hunt, hunting by season'
      };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": seoData.title,
    "description": seoData.description,
    "url": "https://wildside-guide.com/seasons",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Wildside Guide",
      "url": "https://wildside-guide.com"
    }
  };

  const seasons = mode === 'fishing' 
    ? [
        {
          season: 'Spring',
          months: 'March - May',
          description: 'Fish become more active as water temperatures rise',
          bestFor: ['Bass', 'Trout', 'Salmon'],
          tips: ['Focus on shallow waters', 'Use bright colored lures', 'Early morning is best']
        },
        {
          season: 'Summer',
          months: 'June - August',
          description: 'Peak fishing season with warm weather and long days',
          bestFor: ['Catfish', 'Walleye', 'Northern Pike'],
          tips: ['Fish during dawn and dusk', 'Use live bait', 'Stay hydrated']
        },
        {
          season: 'Fall',
          months: 'September - November',
          description: 'Fish feed heavily preparing for winter',
          bestFor: ['Salmon', 'Steelhead', 'Bass'],
          tips: ['Fish deeper waters', 'Use larger lures', 'Check migration patterns']
        },
        {
          season: 'Winter',
          months: 'December - February',
          description: 'Ice fishing and cold-water opportunities',
          bestFor: ['Trout', 'Perch', 'Walleye'],
          tips: ['Ice fishing gear needed', 'Fish mid-day', 'Dress warmly']
        }
      ]
    : [
        {
          season: 'Spring',
          months: 'March - May',
          description: 'Animals are active after winter, mating season begins',
          bestFor: ['Turkey', 'Bear', 'Wild Boar'],
          tips: ['Scout early', 'Listen for mating calls', 'Check local regulations']
        },
        {
          season: 'Summer',
          months: 'June - August',
          description: 'Limited hunting seasons, focus on preparation',
          bestFor: ['Groundhog', 'Crow', 'Predator Control'],
          tips: ['Practice shooting', 'Scout locations', 'Maintain equipment']
        },
        {
          season: 'Fall',
          months: 'September - November',
          description: 'Prime hunting season as animals prepare for winter',
          bestFor: ['Deer', 'Elk', 'Moose'],
          tips: ['Peak rutting season', 'Use calls effectively', 'Pattern animal movement']
        },
        {
          season: 'Winter',
          months: 'December - February',
          description: 'Late season hunting with challenging conditions',
          bestFor: ['Rabbit', 'Squirrel', 'Waterfowl'],
          tips: ['Dress in layers', 'Track in snow', 'Focus on food sources']
        }
      ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonical="https://wildside-guide.com/seasons"
        ogTitle={seoData.title}
        ogDescription={seoData.description}
        schemaData={schemaData}
      />

      <div className={`bg-gradient-to-r ${themeColors.gradient} text-white py-20`}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">
            {mode === 'fishing' ? 'Fishing Seasons' : 'Hunting Seasons'}
          </h1>
          <p className="text-xl">
            {mode === 'fishing' 
              ? 'Optimal fishing times throughout the year' 
              : 'Seasonal hunting opportunities and regulations'
            }
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {seasons.map((season, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  {season.season}
                </h2>
                <p className={`text-lg ${themeColors.primary} bg-opacity-10 px-4 py-2 rounded-lg inline-block`}>
                  {season.months}
                </p>
              </div>
              
              <p className="text-gray-600 mb-6 text-center">
                {season.description}
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {mode === 'fishing' ? 'Best Fish Species:' : 'Prime Targets:'}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {season.bestFor.map((item) => (
                      <span
                        key={item}
                        className={`${themeColors.secondary} px-3 py-1 rounded-full text-sm`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Pro Tips:</h3>
                  <ul className="space-y-1">
                    {season.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="text-gray-600 flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Seasons;
