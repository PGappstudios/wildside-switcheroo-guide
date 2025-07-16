import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { MapPin, Fish, Calendar, Thermometer } from 'lucide-react';
import AdBanner from '../components/AdBanner';
import SEO from '../components/SEO';

const Spots = () => {
  const { mode, themeColors } = useTheme();

  const seoData = mode === 'fishing' 
    ? {
        title: 'Best Fishing Spots Worldwide - Top 9 Destinations | Wildside Guide',
        description: 'Discover the world\'s 9 best fishing destinations. From Great Barrier Reef to Norwegian Fjords, find your perfect fishing adventure with detailed guides.',
        keywords: 'best fishing spots, top fishing destinations, fishing locations, world fishing guide, fishing travel, fishing spots worldwide',
        h1: '9 Best Fishing Spots Worldwide',
        subtitle: 'Discover world-renowned fishing destinations across the globe'
      }
    : {
        title: 'Premier Hunting Areas Worldwide - Top 9 Destinations | Wildside Guide',
        description: 'Explore the world\'s 9 premier hunting locations. From Yellowstone to Patagonia, discover prime hunting grounds with expert guides and tips.',
        keywords: 'best hunting areas, top hunting destinations, hunting locations, world hunting guide, hunting travel, hunting spots worldwide',
        h1: '9 Premier Hunting Areas Worldwide',
        subtitle: 'Explore top hunting locations spanning six continents'
      };

  const spots = mode === 'fishing' 
    ? [
        {
          name: 'Great Barrier Reef, Australia',
          description: 'World-class coral reef fishing with incredible biodiversity and crystal-clear waters',
          bestTime: 'April to November',
          species: ['Barramundi', 'Coral Trout', 'Spanish Mackerel', 'Giant Trevally'],
          temperature: '24-28°C',
          difficulty: 'Intermediate',
          image: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQTpy1S43rJwtLzBk46mT-W9jQvxxITUKjbYDl4x2Vvv87UKsDGeMA14P0BsnI_lRTmXZxLKilW6S5Ko3mgxeX55vbF-HnReCi5ZSzUlA'
        },
        {
          name: 'Norwegian Fjords',
          description: 'Deep-water fishing in stunning natural landscapes with pristine Arctic waters',
          bestTime: 'May to September',
          species: ['Atlantic Salmon', 'Arctic Cod', 'Halibut', 'Sea Trout'],
          temperature: '8-15°C',
          difficulty: 'Advanced',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80'
        },
        {
          name: 'Costa Rica Pacific Coast',
          description: 'Sport fishing paradise with year-round opportunities for trophy catches',
          bestTime: 'Year-round',
          species: ['Blue Marlin', 'Sailfish', 'Yellowfin Tuna', 'Dorado'],
          temperature: '26-30°C',
          difficulty: 'Intermediate',
          image: '#000000'
        },
        {
          name: 'Alaska Wilderness',
          description: 'Remote wilderness fishing with massive salmon runs and untouched nature',
          bestTime: 'June to September',
          species: ['King Salmon', 'Sockeye Salmon', 'Rainbow Trout', 'Arctic Char'],
          temperature: '10-18°C',
          difficulty: 'Advanced',
          image: 'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?auto=format&fit=crop&w=800&q=80'
        },
        {
          name: 'Maldives Atolls',
          description: 'Tropical paradise with exceptional reef and deep-sea fishing opportunities',
          bestTime: 'November to April',
          species: ['Giant Trevally', 'Wahoo', 'Barracuda', 'Mahi-Mahi'],
          temperature: '27-30°C',
          difficulty: 'Beginner',
          image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=800&q=80'
        },
        {
          name: 'Amazon Basin, Brazil',
          description: 'Exotic freshwater fishing in the world\'s largest river system',
          bestTime: 'September to November',
          species: ['Peacock Bass', 'Piranha', 'Arapaima', 'Catfish'],
          temperature: '25-32°C',
          difficulty: 'Intermediate',
          image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=800&q=80'
        },
        {
          name: 'Florida Keys, USA',
          description: 'Legendary saltwater flats fishing with crystal-clear shallow waters',
          bestTime: 'March to July',
          species: ['Tarpon', 'Bonefish', 'Permit', 'Snook'],
          temperature: '22-28°C',
          difficulty: 'Advanced',
          image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80'
        },
        {
          name: 'New Zealand South Island',
          description: 'Pristine mountain streams and lakes with world-famous trout fishing',
          bestTime: 'October to April',
          species: ['Brown Trout', 'Rainbow Trout', 'Salmon', 'Quinnat Salmon'],
          temperature: '12-22°C',
          difficulty: 'Intermediate',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80'
        },
        {
          name: 'Seychelles Islands',
          description: 'Remote Indian Ocean fishing with pristine waters and diverse marine life',
          bestTime: 'October to May',
          species: ['Sailfish', 'Marlin', 'Tuna', 'Bonito'],
          temperature: '26-30°C',
          difficulty: 'Intermediate',
          image: 'https://images.unsplash.com/photo-1544552866-d3ed42536cfd?auto=format&fit=crop&w=800&q=80'
        }
      ]
    : [
        {
          name: 'Yellowstone National Park, USA',
          description: 'Premier wildlife hunting in protected wilderness areas with diverse ecosystems',
          bestTime: 'September to November',
          species: ['Elk', 'Bison', 'Mule Deer', 'Pronghorn'],
          temperature: '5-15°C',
          difficulty: 'Advanced',
          image: 'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=800&q=80'
        },
        {
          name: 'Scottish Highlands',
          description: 'Traditional hunting grounds with rich heritage and spectacular mountain scenery',
          bestTime: 'August to February',
          species: ['Red Deer', 'Roe Deer', 'Grouse', 'Ptarmigan'],
          temperature: '2-12°C',
          difficulty: 'Intermediate',
          image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=800&q=80'
        },
        {
          name: 'Alberta, Canada',
          description: 'Vast wilderness perfect for big game hunting with pristine boreal forests',
          bestTime: 'September to November',
          species: ['Moose', 'Black Bear', 'Whitetail Deer', 'Caribou'],
          temperature: '0-18°C',
          difficulty: 'Advanced',
          image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80'
        },
        {
          name: 'Patagonia, Argentina',
          description: 'Endless plains and mountains offering unique South American hunting experiences',
          bestTime: 'March to August',
          species: ['Red Deer', 'Wild Boar', 'Water Buffalo', 'Axis Deer'],
          temperature: '8-20°C',
          difficulty: 'Intermediate',
          image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?auto=format&fit=crop&w=800&q=80'
        },
        {
          name: 'Namibian Kalahari',
          description: 'Desert hunting paradise with unique adapted species and stunning landscapes',
          bestTime: 'April to September',
          species: ['Gemsbok', 'Springbok', 'Kudu', 'Warthog'],
          temperature: '15-35°C',
          difficulty: 'Advanced',
          image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=800&q=80'
        },
        {
          name: 'Russian Siberia',
          description: 'Vast taiga wilderness with world-class brown bear and wild boar hunting',
          bestTime: 'August to October',
          species: ['Brown Bear', 'Wild Boar', 'Red Deer', 'Roe Deer'],
          temperature: '-5-15°C',
          difficulty: 'Expert',
          image: '#000000'
        },
        {
          name: 'Texas Hill Country, USA',
          description: 'Diverse terrain perfect for whitetail deer and exotic species hunting',
          bestTime: 'November to January',
          species: ['Whitetail Deer', 'Axis Deer', 'Wild Turkey', 'Nilgai'],
          temperature: '10-25°C',
          difficulty: 'Beginner',
          image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80'
        },
        {
          name: 'New Zealand High Country',
          description: 'Alpine hunting in pristine mountain environments with introduced game species',
          bestTime: 'March to July',
          species: ['Red Deer', 'Tahr', 'Chamois', 'Wild Goat'],
          temperature: '5-18°C',
          difficulty: 'Advanced',
          image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80'
        },
        {
          name: 'Mongolian Steppes',
          description: 'Traditional nomadic hunting grounds with unique high-altitude species',
          bestTime: 'September to November',
          species: ['Marco Polo Sheep', 'Ibex', 'Argali Sheep', 'Wolf'],
          temperature: '-10-20°C',
          difficulty: 'Expert',
          image: '#000000'
        }
      ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner':
        return 'bg-green-100 text-green-800';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'advanced':
        return 'bg-orange-100 text-orange-800';
      case 'expert':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": seoData.h1,
    "description": seoData.description,
    "author": {
      "@type": "Organization",
      "name": "Wildside Guide"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Wildside Guide"
    },
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": spots.length,
      "itemListElement": spots.map((spot, index) => ({
        "@type": "Place",
        "position": index + 1,
        "name": spot.name,
        "description": spot.description
      }))
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonical={`https://wildside-guide.com/${mode === 'fishing' ? 'spots' : 'areas'}`}
        ogTitle={seoData.title}
        ogDescription={seoData.description}
        schemaData={schemaData}
      />

      <header className={`bg-gradient-to-r ${themeColors.gradient} text-white py-20`}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">
            {seoData.h1}
          </h1>
          <p className="text-xl">
            {seoData.subtitle}
          </p>
        </div>
      </header>

      {/* Top Ad Banner */}
      <div className="container mx-auto px-4 py-8">
        <AdBanner size="leaderboard" />
      </div>

      <main className="container mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {spots.map((spot, index) => (
            <React.Fragment key={index}>
              {/* Ad banner after every 3 spots */}
              {index > 0 && index % 3 === 0 && (
                <div className="col-span-full my-8">
                  <AdBanner size="large-banner" />
                </div>
              )}
              
              <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                {spot.image === '#000000' ? (
                  <div className="w-full h-48 bg-black"></div>
                ) : (
                  <img
                    src={spot.image}
                    alt={`${spot.name} - ${mode === 'fishing' ? 'Fishing' : 'Hunting'} destination`}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-red-500 mr-2" />
                      <h2 className="text-xl font-semibold text-gray-800">
                        {spot.name}
                      </h2>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(spot.difficulty)}`}>
                      {spot.difficulty}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {spot.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <Calendar className="h-4 w-4 text-blue-500 mr-2" />
                      <span className="font-medium text-gray-700">Best Time: </span>
                      <span className="text-gray-600 ml-1">{spot.bestTime}</span>
                    </div>
                    
                    <div className="flex items-center text-sm">
                      <Thermometer className="h-4 w-4 text-orange-500 mr-2" />
                      <span className="font-medium text-gray-700">Temperature: </span>
                      <span className="text-gray-600 ml-1">{spot.temperature}</span>
                    </div>
                    
                    <div>
                      <div className="flex items-center mb-2">
                        <Fish className={`h-4 w-4 mr-2 ${mode === 'fishing' ? 'text-blue-500' : 'text-green-500'}`} />
                        <span className="font-medium text-gray-700 text-sm">
                          {mode === 'fishing' ? 'Target Species:' : 'Wildlife:'}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {spot.species.map((species) => (
                          <span
                            key={species}
                            className={`${themeColors.secondary} px-2 py-1 rounded text-xs font-medium`}
                          >
                            {species}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </React.Fragment>
          ))}
        </div>

        {/* Bottom Ad Banner */}
        <div className="mt-12">
          <AdBanner size="leaderboard" />
        </div>
      </main>
    </div>
  );
};

export default Spots;
