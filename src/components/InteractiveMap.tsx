
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapPin, Target, Trees, Calendar, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';

// Sample hunting area data
const huntingAreas = [
  {
    id: 1,
    name: "Rocky Mountain National Park",
    coordinates: [-105.6836, 40.3428],
    type: "Big Game",
    season: "Sep 1 - Dec 15",
    animals: ["Elk", "Deer", "Moose"],
    difficulty: "Advanced",
    regulations: "License required, bow hunting only",
    description: "Prime elk hunting territory with excellent success rates."
  },
  {
    id: 2,
    name: "Black Hills Forest",
    coordinates: [-103.4590, 44.1279],
    type: "Mixed Game",
    season: "Oct 1 - Jan 31",
    animals: ["White-tail Deer", "Turkey", "Pheasant"],
    difficulty: "Intermediate",
    regulations: "General hunting license required",
    description: "Diverse hunting opportunities in beautiful forested terrain."
  },
  {
    id: 3,
    name: "Great Plains Wildlife Management",
    coordinates: [-101.8313, 41.4993],
    type: "Waterfowl",
    season: "Nov 1 - Feb 28",
    animals: ["Duck", "Geese", "Dove"],
    difficulty: "Beginner",
    regulations: "Waterfowl stamp required",
    description: "Excellent waterfowl hunting along migration routes."
  },
  {
    id: 4,
    name: "Cascade Range Reserve",
    coordinates: [-121.1506, 45.3311],
    type: "Big Game",
    season: "Aug 15 - Nov 30",
    animals: ["Black Bear", "Deer", "Elk"],
    difficulty: "Advanced",
    regulations: "Special permit required for bear",
    description: "Challenging terrain with trophy hunting opportunities."
  }
];

interface InteractiveMapProps {
  mapboxToken?: string;
}

const InteractiveMap: React.FC<InteractiveMapProps> = ({ mapboxToken }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [selectedArea, setSelectedArea] = useState<typeof huntingAreas[0] | null>(null);
  const [filters, setFilters] = useState({
    bigGame: true,
    waterfowl: true,
    mixedGame: true
  });
  const [tokenInput, setTokenInput] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(!mapboxToken);

  const filteredAreas = huntingAreas.filter(area => {
    if (area.type === "Big Game" && !filters.bigGame) return false;
    if (area.type === "Waterfowl" && !filters.waterfowl) return false;
    if (area.type === "Mixed Game" && !filters.mixedGame) return false;
    return true;
  });

  useEffect(() => {
    if (!mapContainer.current || (!mapboxToken && !tokenInput)) return;

    const token = mapboxToken || tokenInput;
    mapboxgl.accessToken = token;
    
    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/outdoors-v12',
        center: [-98.5795, 39.8283], // Center of US
        zoom: 4,
      });

      // Add navigation controls
      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

      // Add markers for hunting areas
      filteredAreas.forEach((area) => {
        const markerElement = document.createElement('div');
        markerElement.className = 'custom-marker';
        markerElement.style.cssText = `
          width: 30px;
          height: 30px;
          background-color: #16a34a;
          border: 2px solid white;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 12px;
          box-shadow: 0 4px 15px rgba(22, 163, 74, 0.3);
          transition: all 0.3s ease;
        `;
        markerElement.innerHTML = '🎯';

        // Add hover animations to markers
        markerElement.addEventListener('mouseenter', () => {
          markerElement.style.transform = 'scale(1.2)';
          markerElement.style.boxShadow = '0 8px 25px rgba(22, 163, 74, 0.4)';
        });
        
        markerElement.addEventListener('mouseleave', () => {
          markerElement.style.transform = 'scale(1)';
          markerElement.style.boxShadow = '0 4px 15px rgba(22, 163, 74, 0.3)';
        });

        const marker = new mapboxgl.Marker(markerElement)
          .setLngLat(area.coordinates as [number, number])
          .addTo(map.current!);

        markerElement.addEventListener('click', () => {
          setSelectedArea(area);
        });
      });

      return () => {
        map.current?.remove();
      };
    } catch (error) {
      console.error('Error initializing map:', error);
    }
  }, [mapboxToken, tokenInput, filters]);

  if (showTokenInput && !mapboxToken) {
    return (
      <div className="bg-white rounded-xl shadow-strong p-8 hover-lift">
        <div className="text-center mb-6">
          <MapPin className="h-16 w-16 mx-auto text-green-600 mb-4 bounce-gentle" />
          <h3 className="text-2xl font-bold text-gray-800 mb-2 fade-in-up">
            Interactive Hunting Map
          </h3>
          <p className="text-gray-600 mb-6 fade-in-delay">
            To display the interactive map, please enter your Mapbox public token below.
          </p>
          <p className="text-sm text-gray-500 mb-4 fade-in-delay-2">
            Get your free token at{' '}
            <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline transition-colors duration-300">
              mapbox.com
            </a>
          </p>
        </div>
        <div className="max-w-md mx-auto fade-in-delay-3">
          <input
            type="text"
            placeholder="Enter your Mapbox public token"
            value={tokenInput}
            onChange={(e) => setTokenInput(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 shadow-soft focus:shadow-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <Button 
            onClick={() => setShowTokenInput(false)}
            disabled={!tokenInput}
            className="w-full bg-green-600 hover:bg-green-700 shadow-medium hover:shadow-strong transition-all duration-300"
          >
            Load Map
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-strong overflow-hidden hover-lift">
      <div className="p-6 border-b bg-gradient-to-r from-green-50 to-blue-50">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 slide-in-left">Interactive Hunting Map</h3>
        
        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-4">
          {[
            { key: 'bigGame', label: 'Big Game' },
            { key: 'waterfowl', label: 'Waterfowl' },
            { key: 'mixedGame', label: 'Mixed Game' }
          ].map((filter, index) => (
            <div key={filter.key} className="flex items-center space-x-2 slide-in-right" style={{ animationDelay: `${index * 0.1}s` }}>
              <Checkbox
                id={filter.key}
                checked={filters[filter.key as keyof typeof filters]}
                onCheckedChange={(checked) => 
                  setFilters(prev => ({ ...prev, [filter.key]: !!checked }))
                }
                className="transition-all duration-300 hover:scale-110"
              />
              <label htmlFor={filter.key} className="text-sm font-medium cursor-pointer hover:text-green-600 transition-colors duration-300">
                {filter.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="flex">
        {/* Map Container */}
        <div className="flex-1">
          <div ref={mapContainer} className="h-96 w-full relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-100/20 to-blue-100/20 pointer-events-none"></div>
          </div>
        </div>

        {/* Area Details Panel */}
        {selectedArea && (
          <div className="w-80 border-l bg-gradient-to-b from-gray-50 to-white p-6 slide-in-right">
            <Card className="shadow-medium hover:shadow-strong transition-all duration-300 border-0">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-green-700">
                  <Target className="h-5 w-5 text-green-600 bounce-gentle" />
                  {selectedArea.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="fade-in-up">
                  <h4 className="font-semibold text-gray-800 mb-2">Description</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{selectedArea.description}</p>
                </div>
                
                <div className="flex items-center gap-2 fade-in-delay">
                  <Trees className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium px-3 py-1 bg-green-100 text-green-800 rounded-full shadow-soft">
                    {selectedArea.type}
                  </span>
                </div>

                <div className="flex items-center gap-2 fade-in-delay-2">
                  <Calendar className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium">{selectedArea.season}</span>
                </div>

                <div className="fade-in-delay-3">
                  <h4 className="font-semibold text-gray-800 mb-2">Available Game</h4>
                  <div className="flex flex-wrap gap-1">
                    {selectedArea.animals.map((animal, index) => (
                      <span
                        key={animal}
                        className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full shadow-soft hover:shadow-medium transition-all duration-300 hover-scale"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {animal}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-start gap-2 fade-in-delay">
                  <Shield className="h-4 w-4 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Regulations</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{selectedArea.regulations}</p>
                  </div>
                </div>

                <div className="pt-2 fade-in-delay-2">
                  <span className={`px-3 py-1 text-xs rounded-full shadow-soft transition-all duration-300 hover:shadow-medium ${
                    selectedArea.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                    selectedArea.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {selectedArea.difficulty}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveMap;
