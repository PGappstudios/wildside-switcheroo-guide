
import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { MapPin, Calendar, Target, Thermometer, Droplets, Wind, Info, ExternalLink, Trophy, Crown, Star } from 'lucide-react';
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
    difficulty: 'Beginner to Advanced',
    topCountries: [
      {
        name: 'United States',
        rank: 1,
        description: 'World-renowned for its diverse ecosystems and abundant wildlife',
        topAnimals: ['White-tail Deer', 'Elk', 'Black Bear'],
        topFish: ['Largemouth Bass', 'Rainbow Trout', 'Chinook Salmon'],
        famousRivers: ['Colorado River', 'Missouri River', 'Columbia River'],
        famousForests: ['Yellowstone National Forest', 'Olympic National Forest', 'Superior National Forest'],
        bestRegions: ['Montana - Big Sky Country', 'Alaska - Last Frontier', 'Colorado - Rocky Mountain High'],
        funFacts: [
          'Home to the largest elk herd in North America',
          'Over 400 species of freshwater fish',
          'Contains 63 national parks'
        ]
      },
      {
        name: 'Canada',
        rank: 2,
        description: 'Vast wilderness areas with pristine hunting and fishing opportunities',
        topAnimals: ['Moose', 'Caribou', 'Brown Bear'],
        topFish: ['Northern Pike', 'Lake Trout', 'Atlantic Salmon'],
        famousRivers: ['Mackenzie River', 'Fraser River', 'Ottawa River'],
        famousForests: ['Boreal Forest', 'Great Bear Rainforest', 'Acadian Forest'],
        bestRegions: ['British Columbia - Wild Pacific Coast', 'Alberta - Canadian Rockies', 'Ontario - Great Lakes'],
        funFacts: [
          'Contains 20% of the world\'s freshwater',
          'Home to the world\'s largest moose population',
          'Has over 36,000 lakes larger than 3 hectares'
        ]
      },
      {
        name: 'Mexico',
        rank: 3,
        description: 'Unique desert and coastal ecosystems with tropical species',
        topAnimals: ['White-tail Deer', 'Javelina', 'Wild Turkey'],
        topFish: ['Tarpon', 'Marlin', 'Dorado'],
        famousRivers: ['Rio Grande', 'Colorado River', 'Usumacinta River'],
        famousForests: ['Sierra Madre Occidental', 'Lacandon Jungle', 'Cloud Forests of Veracruz'],
        bestRegions: ['Sonora - Desert Hunting', 'Yucatan - Coastal Fishing', 'Chihuahua - Mountain Wilderness'],
        funFacts: [
          'One of the world\'s 17 megadiverse countries',
          'Home to unique desert bighorn sheep',
          'Pacific coast offers world-class deep-sea fishing'
        ]
      }
    ]
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
    difficulty: 'Intermediate to Advanced',
    topCountries: [
      {
        name: 'Brazil',
        rank: 1,
        description: 'Home to the Amazon rainforest and Pantanal wetlands',
        topAnimals: ['Jaguar', 'Capybara', 'Peccary'],
        topFish: ['Peacock Bass', 'Piranha', 'Arapaima'],
        famousRivers: ['Amazon River', 'Tocantins River', 'Xingu River'],
        famousForests: ['Amazon Rainforest', 'Atlantic Forest', 'Cerrado Savanna'],
        bestRegions: ['Pantanal - World\'s largest wetland', 'Amazon Basin - Rainforest adventure', 'Cerrado - Savanna hunting'],
        funFacts: [
          'Amazon River is the world\'s largest river by volume',
          'Pantanal has the highest concentration of wildlife in the Americas',
          'Home to over 3,000 freshwater fish species'
        ]
      },
      {
        name: 'Argentina',
        rank: 2,
        description: 'Diverse landscapes from Patagonia to subtropical north',
        topAnimals: ['Red Deer', 'Wild Boar', 'Water Buffalo'],
        topFish: ['Dorado', 'Pacu', 'Surubim'],
        famousRivers: ['Paraná River', 'Río de la Plata', 'Colorado River'],
        famousForests: ['Valdivian Forest', 'Yungas Cloud Forest', 'Southern Patagonian Forest'],
        bestRegions: ['Patagonia - Endless plains', 'Mesopotamia - River delta', 'Northwest - Andean foothills'],
        funFacts: [
          'Dorado is called the "River Tiger" for its fighting spirit',
          'Patagonia offers some of the world\'s best trout fishing',
          'Home to the world\'s southernmost forests'
        ]
      },
      {
        name: 'Colombia',
        rank: 3,
        description: 'Incredible biodiversity across varied ecosystems',
        topAnimals: ['White-tail Deer', 'Peccary', 'Capybara'],
        topFish: ['Peacock Bass', 'Payara', 'Catfish'],
        famousRivers: ['Magdalena River', 'Orinoco River', 'Atrato River'],
        famousForests: ['Chocó Rainforest', 'Amazon Rainforest', 'Andean Cloud Forests'],
        bestRegions: ['Llanos - Eastern plains', 'Chocó - Pacific coast', 'Amazon - Southern jungle'],
        funFacts: [
          'Second most biodiverse country in the world',
          'Chocó region has one of the highest rainfall rates globally',
          'Home to over 1,500 freshwater fish species'
        ]
      }
    ]
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
    difficulty: 'Intermediate',
    topCountries: [
      {
        name: 'Norway',
        rank: 1,
        description: 'Pristine wilderness with abundant game and world-class salmon fishing',
        topAnimals: ['Red Deer', 'Moose', 'Brown Bear'],
        topFish: ['Atlantic Salmon', 'Brown Trout', 'Arctic Char'],
        famousRivers: ['Alta River', 'Tana River', 'Gaula River'],
        famousForests: ['Scandinavian Forest', 'Taiga Forest', 'Coastal Forests'],
        bestRegions: ['Finnmark - Arctic wilderness', 'Trøndelag - Salmon rivers', 'Hardangervidda - Mountain plateau'],
        funFacts: [
          'Home to the world\'s best Atlantic salmon fishing',
          'Contains Europe\'s largest remaining wilderness',
          'Midnight sun allows 24-hour fishing in summer'
        ]
      },
      {
        name: 'Scotland',
        rank: 2,
        description: 'Historic hunting grounds with legendary red deer and salmon',
        topAnimals: ['Red Deer', 'Roe Deer', 'Grouse'],
        topFish: ['Atlantic Salmon', 'Brown Trout', 'Sea Trout'],
        famousRivers: ['River Spey', 'River Tay', 'River Tweed'],
        famousForests: ['Caledonian Forest', 'Galloway Forest', 'Trossachs Forest'],
        bestRegions: ['Highlands - Red deer stalking', 'Speyside - Salmon fishing', 'Cairngorms - Mountain hunting'],
        funFacts: [
          'Red deer stalking tradition dates back 1,000 years',
          'River Tay produces the largest Atlantic salmon',
          'Contains some of Europe\'s last ancient forests'
        ]
      },
      {
        name: 'Austria',
        rank: 3,
        description: 'Alpine hunting paradise with chamois and mountain game',
        topAnimals: ['Red Deer', 'Chamois', 'Ibex'],
        topFish: ['Brown Trout', 'Grayling', 'Char'],
        famousRivers: ['Danube River', 'Traun River', 'Enns River'],
        famousForests: ['Vienna Woods', 'Bohemian Forest', 'Alpine Forests'],
        bestRegions: ['Tyrol - Alpine hunting', 'Styria - Forest stalking', 'Salzburg - Mountain fishing'],
        funFacts: [
          'Chamois hunting requires mountaineering skills',
          'Home to some of Europe\'s largest red deer',
          'Alpine lakes contain rare char species'
        ]
      }
    ]
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
    difficulty: 'Advanced',
    topCountries: [
      {
        name: 'South Africa',
        rank: 1,
        description: 'Premier safari destination with Big Five and excellent infrastructure',
        topAnimals: ['Cape Buffalo', 'Kudu', 'Impala'],
        topFish: ['Yellowfin Tuna', 'Marlin', 'Kingfish'],
        famousRivers: ['Orange River', 'Vaal River', 'Limpopo River'],
        famousForests: ['Knysna Forest', 'Tsitsikamma Forest', 'Magoebaskloof Forest'],
        bestRegions: ['Kruger - Big Five safari', 'Kalahari - Desert hunting', 'Cape Coast - Deep sea fishing'],
        funFacts: [
          'Home to the Big Five game animals',
          'Cape Town offers world-class deep-sea fishing',
          'Contains three of the world\'s biodiversity hotspots'
        ]
      },
      {
        name: 'Namibia',
        rank: 2,
        description: 'Desert hunting paradise with unique adapted species',
        topAnimals: ['Gemsbok', 'Springbok', 'Desert Elephant'],
        topFish: ['Kingfish', 'Steenbras', 'Kabeljou'],
        famousRivers: ['Orange River', 'Kunene River', 'Okavango River'],
        famousForests: ['Caprivi Strip', 'Kavango Woodland', 'Mopane Woodland'],
        bestRegions: ['Kalahari - Desert specialists', 'Skeleton Coast - Coastal fishing', 'Caprivi - Wetland species'],
        funFacts: [
          'Gemsbok can survive without drinking water',
          'Skeleton Coast is known as the world\'s largest ship graveyard',
          'Contains the world\'s oldest desert'
        ]
      },
      {
        name: 'Tanzania',
        rank: 3,
        description: 'Serengeti ecosystem with the Great Migration',
        topAnimals: ['Cape Buffalo', 'Eland', 'Sable Antelope'],
        topFish: ['Nile Perch', 'Tiger Fish', 'Tilapia'],
        famousRivers: ['Rufiji River', 'Ruaha River', 'Mara River'],
        famousForests: ['Mahale Forest', 'Udzungwa Forest', 'Eastern Arc Forests'],
        bestRegions: ['Serengeti - Great Migration', 'Selous - River hunting', 'Lake Tanganyika - Freshwater fishing'],
        funFacts: [
          'Serengeti migration involves 2 million animals',
          'Lake Tanganyika is the world\'s longest freshwater lake',
          'Home to over 1,000 bird species'
        ]
      }
    ]
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
    difficulty: 'Advanced',
    topCountries: [
      {
        name: 'Russia',
        rank: 1,
        description: 'Vast Siberian wilderness with world\'s largest forest',
        topAnimals: ['Brown Bear', 'Wild Boar', 'Red Deer'],
        topFish: ['Salmon', 'Taimen', 'Lenok'],
        famousRivers: ['Lena River', 'Yenisei River', 'Ob River'],
        famousForests: ['Siberian Taiga', 'Russian Far East Forest', 'Ural Mountains Forest'],
        bestRegions: ['Kamchatka - Pristine wilderness', 'Siberia - Endless taiga', 'Altai - Mountain hunting'],
        funFacts: [
          'Contains 60% of the world\'s coniferous forests',
          'Kamchatka has the world\'s largest brown bears',
          'Siberian taiga is the world\'s largest forest'
        ]
      },
      {
        name: 'Mongolia',
        rank: 2,
        description: 'Steppes and mountains with unique high-altitude species',
        topAnimals: ['Marco Polo Sheep', 'Ibex', 'Argali Sheep'],
        topFish: ['Taimen', 'Lenok', 'Grayling'],
        famousRivers: ['Selenge River', 'Orkhon River', 'Tuul River'],
        famousForests: ['Northern Mongolian Forest', 'Khangai Mountains', 'Altai Tavan Bogd'],
        bestRegions: ['Altai Mountains - High altitude hunting', 'Gobi Desert - Desert species', 'Khövsgöl - Pristine lakes'],
        funFacts: [
          'Home to the world\'s largest sheep species',
          'Taimen can grow over 1.5 meters long',
          'Contains pristine nomadic hunting traditions'
        ]
      },
      {
        name: 'Kazakhstan',
        rank: 3,
        description: 'Central Asian steppes with diverse ecosystems',
        topAnimals: ['Saiga Antelope', 'Wild Boar', 'Roe Deer'],
        topFish: ['Carp', 'Pike', 'Perch'],
        famousRivers: ['Irtysh River', 'Ural River', 'Syr Darya'],
        famousForests: ['Altai Forest', 'Tien Shan Forest', 'Kazakh Steppe'],
        bestRegions: ['Altai Region - Mountain hunting', 'Caspian Coast - Wetland species', 'Tien Shan - Alpine hunting'],
        funFacts: [
          'World\'s largest landlocked country',
          'Caspian Sea produces famous caviar',
          'Home to the endangered saiga antelope'
        ]
      }
    ]
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
    difficulty: 'Beginner to Advanced',
    topCountries: [
      {
        name: 'Australia',
        rank: 1,
        description: 'Unique wildlife continent with world-class reef fishing',
        topAnimals: ['Red Kangaroo', 'Wild Boar', 'Water Buffalo'],
        topFish: ['Barramundi', 'Murray Cod', 'Coral Trout'],
        famousRivers: ['Murray River', 'Darling River', 'Fitzroy River'],
        famousForests: ['Daintree Rainforest', 'Tasmanian Wilderness', 'Jarrah Forest'],
        bestRegions: ['Queensland - Tropical fishing', 'Northern Territory - Buffalo hunting', 'Tasmania - Wilderness adventure'],
        funFacts: [
          'Great Barrier Reef is the world\'s largest coral system',
          'Murray Cod is Australia\'s largest freshwater fish',
          'Contains 80% of species found nowhere else on Earth'
        ]
      },
      {
        name: 'New Zealand',
        rank: 2,
        description: 'Pristine wilderness with introduced game species',
        topAnimals: ['Red Deer', 'Tahr', 'Wild Boar'],
        topFish: ['Brown Trout', 'Salmon', 'Snapper'],
        famousRivers: ['Waikato River', 'Clutha River', 'Rangitikei River'],
        famousForests: ['Fiordland', 'Kauri Forest', 'Beech Forest'],
        bestRegions: ['South Island - Alpine hunting', 'North Island - Thermal fishing', 'Fiordland - Wilderness experience'],
        funFacts: [
          'Introduced species now provide world-class hunting',
          'Rotorua\'s thermal activity creates unique fishing',
          'Fiordland contains some of the world\'s clearest water'
        ]
      },
      {
        name: 'Papua New Guinea',
        rank: 3,
        description: 'Tropical paradise with unique species and reef fishing',
        topAnimals: ['Wild Boar', 'Deer', 'Cassowary'],
        topFish: ['Barramundi', 'Tuna', 'Coral Trout'],
        famousRivers: ['Sepik River', 'Fly River', 'Ramu River'],
        famousForests: ['New Guinea Rainforest', 'Montane Forest', 'Mangrove Forest'],
        bestRegions: ['Sepik Basin - River adventure', 'Highlands - Mountain hunting', 'Coral Triangle - Reef fishing'],
        funFacts: [
          'Contains 6% of the world\'s biodiversity',
          'Sepik River is one of the world\'s great undammed rivers',
          'Part of the Coral Triangle biodiversity hotspot'
        ]
      }
    ]
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

              {/* Top 3 Countries Section */}
              <div>
                <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <Trophy className={`h-5 w-5 ${mode === 'fishing' ? 'text-blue-600' : 'text-green-600'}`} />
                  Top 3 {mode === 'fishing' ? 'Fishing' : 'Hunting'} Destinations
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {currentData.topCountries.map((country) => (
                    <Card key={country.name} className="relative">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg flex items-center gap-2">
                            {country.rank === 1 && <Crown className="h-5 w-5 text-yellow-500" />}
                            {country.rank === 2 && <Star className="h-5 w-5 text-gray-400" />}
                            {country.rank === 3 && <Star className="h-5 w-5 text-amber-600" />}
                            {country.name}
                          </CardTitle>
                          <Badge variant="outline" className="text-xs">
                            #{country.rank}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600">{country.description}</p>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div>
                          <h5 className="font-medium text-gray-800 text-sm mb-2">
                            Top {mode === 'fishing' ? 'Fish' : 'Animals'}
                          </h5>
                          <div className="flex flex-wrap gap-1">
                            {(mode === 'fishing' ? country.topFish : country.topAnimals).map((species) => (
                              <Badge 
                                key={species} 
                                variant="secondary" 
                                className={`text-xs ${
                                  mode === 'fishing' 
                                    ? 'bg-blue-100 text-blue-800' 
                                    : 'bg-green-100 text-green-800'
                                }`}
                              >
                                {species}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h5 className="font-medium text-gray-800 text-sm mb-2">Famous Rivers</h5>
                          <ul className="text-xs text-gray-600 space-y-1">
                            {country.famousRivers.map((river) => (
                              <li key={river} className="flex items-center gap-1">
                                <Droplets className="h-3 w-3 text-blue-500 flex-shrink-0" />
                                {river}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h5 className="font-medium text-gray-800 text-sm mb-2">Famous Forests</h5>
                          <ul className="text-xs text-gray-600 space-y-1">
                            {country.famousForests.map((forest) => (
                              <li key={forest} className="flex items-center gap-1">
                                <Wind className="h-3 w-3 text-green-500 flex-shrink-0" />
                                {forest}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h5 className="font-medium text-gray-800 text-sm mb-2">Best Regions</h5>
                          <ul className="text-xs text-gray-600 space-y-1">
                            {country.bestRegions.map((region) => (
                              <li key={region} className="flex items-center gap-1">
                                <MapPin className="h-3 w-3 text-red-500 flex-shrink-0" />
                                {region}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h5 className="font-medium text-gray-800 text-sm mb-2">Did You Know?</h5>
                          <ul className="text-xs text-gray-600 space-y-1">
                            {country.funFacts.map((fact, index) => (
                              <li key={index} className="flex items-start gap-1">
                                <Info className="h-3 w-3 text-amber-500 flex-shrink-0 mt-0.5" />
                                {fact}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
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
