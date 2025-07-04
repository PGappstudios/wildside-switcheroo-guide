
import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { MapPin, Calendar, Target, Thermometer, Droplets, Wind, Info, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { getApisByCategory } from '../config/apiConfig';

// Enhanced region data with more detailed information
const regionData = {
  'north-america': {
    name: 'North America',
    animals: ['White-tail Deer', 'Elk', 'Moose', 'Black Bear', 'Wild Turkey', 'Bighorn Sheep'],
    fish: ['Bass', 'Trout', 'Salmon', 'Pike', 'Walleye', 'Catfish', 'Muskellunge'],
    seasons: {
      hunting: 'September - February',
      fishing: 'May - October (varies by species)'
    },
    description: 'Diverse wildlife across forests, plains, and mountain regions with excellent infrastructure for outdoor activities.',
    coordinates: { x: 20, y: 35 },
    climate: {
      temperature: '5°C to 25°C',
      rainfall: 'Moderate to High',
      bestMonths: ['May', 'June', 'September', 'October']
    },
    regulations: {
      hunting: 'State licenses required, varying bag limits',
      fishing: 'State licenses, some federal waters require additional permits'
    },
    hotspots: ['Yellowstone National Park', 'Great Lakes Region', 'Rocky Mountain National Park'],
    difficulty: 'Beginner to Advanced'
  },
  'south-america': {
    name: 'South America',
    animals: ['Jaguar', 'Capybara', 'Peccary', 'Deer', 'Wild Boar', 'Tapir'],
    fish: ['Piranha', 'Peacock Bass', 'Dorado', 'Surubim', 'Pacu', 'Arapaima'],
    seasons: {
      hunting: 'Year-round (varies by country)',
      fishing: 'Dry season preferred (May - September)'
    },
    description: 'Rich biodiversity in rainforests, grasslands, and wetlands with unique tropical species.',
    coordinates: { x: 28, y: 65 },
    climate: {
      temperature: '20°C to 35°C',
      rainfall: 'High in rainforest, moderate in plains',
      bestMonths: ['May', 'June', 'July', 'August', 'September']
    },
    regulations: {
      hunting: 'Country-specific permits, conservation restrictions',
      fishing: 'Local guides often required, seasonal restrictions'
    },
    hotspots: ['Amazon Basin', 'Pantanal Wetlands', 'Patagonian Plains'],
    difficulty: 'Intermediate to Advanced'
  },
  'europe': {
    name: 'Europe',
    animals: ['Red Deer', 'Wild Boar', 'Roe Deer', 'Brown Bear', 'Ibex', 'Chamois'],
    fish: ['Atlantic Salmon', 'Brown Trout', 'Pike', 'Carp', 'Sea Bass', 'Grayling'],
    seasons: {
      hunting: 'August - February',
      fishing: 'March - November'
    },
    description: 'Traditional hunting grounds with strict conservation practices and rich cultural heritage.',
    coordinates: { x: 50, y: 30 },
    climate: {
      temperature: '0°C to 20°C',
      rainfall: 'Moderate',
      bestMonths: ['April', 'May', 'September', 'October']
    },
    regulations: {
      hunting: 'Strict licensing, EU regulations, local permits required',
      fishing: 'Country-specific licenses, EU water body regulations'
    },
    hotspots: ['Scottish Highlands', 'Scandinavian Forests', 'Alpine Regions'],
    difficulty: 'Intermediate'
  },
  'africa': {
    name: 'Africa',
    animals: ['Cape Buffalo', 'Kudu', 'Impala', 'Warthog', 'Gemsbok', 'Springbok'],
    fish: ['Nile Perch', 'Tiger Fish', 'Yellowfin Tuna', 'Marlin', 'Coelacanth', 'Kingfish'],
    seasons: {
      hunting: 'April - September (dry season)',
      fishing: 'Year-round coastal, seasonal inland'
    },
    description: 'Safari hunting and diverse marine fishing opportunities with world-class game reserves.',
    coordinates: { x: 52, y: 55 },
    climate: {
      temperature: '15°C to 40°C',
      rainfall: 'Low to moderate, seasonal',
      bestMonths: ['April', 'May', 'June', 'July', 'August', 'September']
    },
    regulations: {
      hunting: 'Professional hunter required, CITES permits for trophies',
      fishing: 'Local permits, marine protected area restrictions'
    },
    hotspots: ['Kruger National Park', 'Serengeti', 'Okavango Delta'],
    difficulty: 'Advanced'
  },
  'asia': {
    name: 'Asia',
    animals: ['Wild Boar', 'Red Deer', 'Sika Deer', 'Brown Bear', 'Marco Polo Sheep', 'Ibex'],
    fish: ['Carp', 'Catfish', 'Salmon', 'Tuna', 'Grouper', 'Mahseer'],
    seasons: {
      hunting: 'September - March',
      fishing: 'Spring and Fall optimal'
    },
    description: 'Vast territories with varied climates and species, from Siberian wilderness to tropical seas.',
    coordinates: { x: 70, y: 35 },
    climate: {
      temperature: '-20°C to 35°C',
      rainfall: 'Highly variable by region',
      bestMonths: ['April', 'May', 'September', 'October', 'November']
    },
    regulations: {
      hunting: 'Country-specific, often restricted or guided only',
      fishing: 'Local permits, some international waters restrictions'
    },
    hotspots: ['Siberian Taiga', 'Himalayan Foothills', 'Japanese Alps'],
    difficulty: 'Advanced'
  },
  'australia': {
    name: 'Australia & Oceania',
    animals: ['Red Kangaroo', 'Wild Boar', 'Water Buffalo', 'Deer', 'Wild Goat', 'Dingo'],
    fish: ['Barramundi', 'Murray Cod', 'Snapper', 'Tuna', 'Marlin', 'Coral Trout'],
    seasons: {
      hunting: 'Year-round (varies by state)',
      fishing: 'Year-round with seasonal peaks'
    },
    description: 'Unique wildlife and excellent coastal fishing with diverse ecosystems from outback to reef.',
    coordinates: { x: 82, y: 70 },
    climate: {
      temperature: '10°C to 40°C',
      rainfall: 'Variable, tropical north to temperate south',
      bestMonths: ['March', 'April', 'May', 'September', 'October', 'November']
    },
    regulations: {
      hunting: 'State-based licensing, property owner permissions',
      fishing: 'State licenses, marine park restrictions'
    },
    hotspots: ['Great Barrier Reef', 'Australian Alps', 'Kakadu National Park'],
    difficulty: 'Beginner to Advanced'
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
  const availableApis = mode ? getApisByCategory(mode) : [];

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-6 border-b">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          {mode === 'fishing' ? 'World Fishing Map' : 'World Hunting Map'}
        </h3>
        <p className="text-gray-600">
          Click on any region to explore detailed {mode === 'fishing' ? 'fishing' : 'hunting'} opportunities and data sources
        </p>
      </div>

      {/* Map Container - Full Width */}
      <div className="p-6">
        <div className="relative inline-block w-full">
          <img 
            src="/lovable-uploads/8bd16e01-3809-4baf-b376-89c4a5ff39e9.png" 
            alt="World Map" 
            className="w-full h-auto rounded-lg shadow"
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

      {/* Details Panel - Below Map */}
      {currentData && (
        <div className="border-t bg-gray-50 p-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className={`h-5 w-5 ${mode === 'fishing' ? 'text-blue-600' : 'text-green-600'}`} />
                {currentData.name}
              </CardTitle>
              <Badge variant="outline" className="w-fit">
                {currentData.difficulty}
              </Badge>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Overview</h4>
                <p className="text-gray-600 text-sm">{currentData.description}</p>
              </div>

              <Separator />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex items-center gap-2">
                  <Calendar className={`h-4 w-4 ${mode === 'fishing' ? 'text-blue-600' : 'text-green-600'}`} />
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">Season</h4>
                    <p className="text-xs text-gray-600">
                      {mode === 'fishing' ? currentData.seasons.fishing : currentData.seasons.hunting}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Thermometer className="h-4 w-4 text-orange-500" />
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">Temperature</h4>
                    <p className="text-xs text-gray-600">{currentData.climate.temperature}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Droplets className="h-4 w-4 text-blue-500" />
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">Rainfall</h4>
                    <p className="text-xs text-gray-600">{currentData.climate.rainfall}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Wind className="h-4 w-4 text-gray-500" />
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">Best Time</h4>
                    <p className="text-xs text-gray-600">{currentData.climate.bestMonths.slice(0, 2).join(', ')}</p>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">
                    {mode === 'fishing' ? 'Fish Species' : 'Game Animals'}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {(mode === 'fishing' ? currentData.fish : currentData.animals).map((species) => (
                      <Badge
                        key={species}
                        variant="secondary"
                        className={`text-xs ${
                          mode === 'fishing' 
                            ? 'bg-blue-100 text-blue-800 hover:bg-blue-200' 
                            : 'bg-green-100 text-green-800 hover:bg-green-200'
                        }`}
                      >
                        {species}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Best Months</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentData.climate.bestMonths.map((month) => (
                      <Badge key={month} variant="outline" className="text-xs">
                        {month}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <Separator />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Popular Locations</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    {currentData.hotspots.map((spot) => (
                      <li key={spot} className="flex items-center gap-2">
                        <MapPin className="h-3 w-3 flex-shrink-0" />
                        {spot}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Regulations</h4>
                  <p className="text-sm text-gray-600">
                    {mode === 'fishing' ? currentData.regulations.fishing : currentData.regulations.hunting}
                  </p>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <Info className="h-4 w-4" />
                  Available Data Sources
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {availableApis.slice(0, 6).map((api) => (
                    <div key={api.name} className="text-sm p-3 bg-white rounded border">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-gray-800">{api.name}</span>
                        <ExternalLink className="h-3 w-3 text-gray-400" />
                      </div>
                      <p className="text-xs text-gray-600">{api.description}</p>
                    </div>
                  ))}
                </div>
                {availableApis.length > 6 && (
                  <p className="text-xs text-gray-500 mt-2">
                    +{availableApis.length - 6} more data sources available
                  </p>
                )}
              </div>

              {mode === 'hunting' && (
                <>
                  <Separator />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Also Available: Fishing</h4>
                    <div className="flex flex-wrap gap-2">
                      {currentData.fish.slice(0, 6).map((fish) => (
                        <Badge
                          key={fish}
                          variant="outline"
                          className="bg-blue-50 text-blue-700 text-xs border-blue-200"
                        >
                          {fish}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      )}

      {!selectedRegion && (
        <div className="p-8 text-center text-gray-500 border-t bg-gray-50">
          <MapPin className="h-16 w-16 mx-auto mb-4 text-gray-400" />
          <h3 className="text-lg font-semibold mb-2">Explore Regional Data</h3>
          <p className="text-sm">Click on any region marker to view comprehensive information about local species, seasons, regulations, and available data sources.</p>
        </div>
      )}
    </div>
  );
};

export default WorldMap;
