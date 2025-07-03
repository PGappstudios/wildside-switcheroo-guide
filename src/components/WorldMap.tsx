
import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { MapPin, Calendar, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

// Sample data for different regions
const regionData = {
  'north-america': {
    name: 'North America',
    animals: ['White-tail Deer', 'Elk', 'Moose', 'Black Bear', 'Wild Turkey'],
    fish: ['Bass', 'Trout', 'Salmon', 'Pike', 'Walleye'],
    seasons: {
      hunting: 'September - February',
      fishing: 'May - October (varies by species)'
    },
    description: 'Diverse wildlife across forests, plains, and mountain regions.',
    coordinates: { x: 20, y: 35 }
  },
  'south-america': {
    name: 'South America',
    animals: ['Jaguar', 'Capybara', 'Peccary', 'Deer', 'Wild Boar'],
    fish: ['Piranha', 'Peacock Bass', 'Dorado', 'Surubim', 'Pacu'],
    seasons: {
      hunting: 'Year-round (varies by country)',
      fishing: 'Dry season preferred (May - September)'
    },
    description: 'Rich biodiversity in rainforests, grasslands, and wetlands.',
    coordinates: { x: 28, y: 65 }
  },
  'europe': {
    name: 'Europe',
    animals: ['Red Deer', 'Wild Boar', 'Roe Deer', 'Brown Bear', 'Ibex'],
    fish: ['Atlantic Salmon', 'Brown Trout', 'Pike', 'Carp', 'Sea Bass'],
    seasons: {
      hunting: 'August - February',
      fishing: 'March - November'
    },
    description: 'Traditional hunting grounds with strict conservation practices.',
    coordinates: { x: 50, y: 30 }
  },
  'africa': {
    name: 'Africa',
    animals: ['Cape Buffalo', 'Kudu', 'Impala', 'Warthog', 'Gemsbok'],
    fish: ['Nile Perch', 'Tiger Fish', 'Yellowfin Tuna', 'Marlin', 'Coelacanth'],
    seasons: {
      hunting: 'April - September (dry season)',
      fishing: 'Year-round coastal, seasonal inland'
    },
    description: 'Safari hunting and diverse marine fishing opportunities.',
    coordinates: { x: 52, y: 55 }
  },
  'asia': {
    name: 'Asia',
    animals: ['Wild Boar', 'Red Deer', 'Sika Deer', 'Brown Bear', 'Marco Polo Sheep'],
    fish: ['Carp', 'Catfish', 'Salmon', 'Tuna', 'Grouper'],
    seasons: {
      hunting: 'September - March',
      fishing: 'Spring and Fall optimal'
    },
    description: 'Vast territories with varied climates and species.',
    coordinates: { x: 70, y: 35 }
  },
  'australia': {
    name: 'Australia & Oceania',
    animals: ['Red Kangaroo', 'Wild Boar', 'Water Buffalo', 'Deer', 'Wild Goat'],
    fish: ['Barramundi', 'Murray Cod', 'Snapper', 'Tuna', 'Marlin'],
    seasons: {
      hunting: 'Year-round (varies by state)',
      fishing: 'Year-round with seasonal peaks'
    },
    description: 'Unique wildlife and excellent coastal fishing.',
    coordinates: { x: 82, y: 70 }
  }
};

const WorldMap = () => {
  const { mode, themeColors } = useTheme();
  const [selectedRegion, setSelectedRegion] = useState<keyof typeof regionData | null>(null);
  const [hoveredRegion, setHoveredRegion] = useState<keyof typeof regionData | null>(null);

  const handleRegionClick = (region: keyof typeof regionData) => {
    setSelectedRegion(region);
  };

  const currentData = selectedRegion ? regionData[selectedRegion] : null;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-6 border-b">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          {mode === 'fishing' ? 'World Fishing Map' : 'World Hunting Map'}
        </h3>
        <p className="text-gray-600">
          Click on any region to explore {mode === 'fishing' ? 'fishing' : 'hunting'} opportunities
        </p>
      </div>

      <div className="flex">
        {/* Map Container */}
        <div className="flex-1 p-6">
          <div className="relative inline-block">
            <img 
              src="/lovable-uploads/8bd16e01-3809-4baf-b376-89c4a5ff39e9.png" 
              alt="World Map" 
              className="w-full h-auto max-w-4xl rounded-lg shadow"
            />
            
            {/* Clickable regions - positioned as overlays */}
            {Object.entries(regionData).map(([regionKey, region]) => (
              <button
                key={regionKey}
                className={`absolute w-8 h-8 rounded-full border-2 border-white shadow-lg transition-all duration-200 ${
                  hoveredRegion === regionKey || selectedRegion === regionKey
                    ? `${themeColors.primary} scale-125`
                    : 'bg-red-500 hover:bg-red-600'
                } flex items-center justify-center`}
                style={{
                  left: `${region.coordinates.x}%`,
                  top: `${region.coordinates.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
                onClick={() => handleRegionClick(regionKey as keyof typeof regionData)}
                onMouseEnter={() => setHoveredRegion(regionKey as keyof typeof regionData)}
                onMouseLeave={() => setHoveredRegion(null)}
                title={region.name}
              >
                <MapPin className="h-4 w-4 text-white" />
              </button>
            ))}
          </div>
        </div>

        {/* Details Panel */}
        {currentData && (
          <div className="w-80 border-l bg-gray-50 p-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className={`h-5 w-5 ${mode === 'fishing' ? 'text-blue-600' : 'text-green-600'}`} />
                  {currentData.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Description</h4>
                  <p className="text-gray-600 text-sm">{currentData.description}</p>
                </div>

                <div className="flex items-center gap-2">
                  <Calendar className={`h-4 w-4 ${mode === 'fishing' ? 'text-blue-600' : 'text-green-600'}`} />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Season</h4>
                    <p className="text-sm text-gray-600">
                      {mode === 'fishing' ? currentData.seasons.fishing : currentData.seasons.hunting}
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    {mode === 'fishing' ? 'Fish Species' : 'Game Animals'}
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {(mode === 'fishing' ? currentData.fish : currentData.animals).map((species) => (
                      <span
                        key={species}
                        className={`px-2 py-1 text-xs rounded-full ${
                          mode === 'fishing' 
                            ? 'bg-blue-100 text-blue-800' 
                            : 'bg-green-100 text-green-800'
                        }`}
                      >
                        {species}
                      </span>
                    ))}
                  </div>
                </div>

                {mode === 'hunting' && (
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Available Fish (Alternative)</h4>
                    <div className="flex flex-wrap gap-1">
                      {currentData.fish.slice(0, 3).map((fish) => (
                        <span
                          key={fish}
                          className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
                        >
                          {fish}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      {!selectedRegion && (
        <div className="p-6 text-center text-gray-500">
          <MapPin className="h-12 w-12 mx-auto mb-2 text-gray-400" />
          <p>Click on any region marker to view detailed information</p>
        </div>
      )}
    </div>
  );
};

export default WorldMap;
