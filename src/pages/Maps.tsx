
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Map, MapPin } from 'lucide-react';
import WorldMap from '../components/WorldMap';

const Maps = () => {
  const { mode, themeColors } = useTheme();

  return (
    <div className="min-h-screen bg-gray-50">
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

      <div className="container mx-auto px-4 py-16">
        {/* Interactive World Map Section */}
        <div className="mb-12">
          <WorldMap />
        </div>

        {/* Information Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              {mode === 'fishing' ? 'Popular Fishing Regions' : 'Prime Hunting Regions'}
            </h3>
            <div className="space-y-3">
              {(mode === 'fishing' 
                ? ['North America - Great Lakes', 'Europe - Nordic Countries', 'Asia - Pacific Coast', 'Australia - Barrier Reef']
                : ['North America - Rocky Mountains', 'Africa - Safari Regions', 'Europe - Alpine Areas', 'Asia - Siberian Wilderness']
              ).map((region) => (
                <div key={region} className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <MapPin className="h-5 w-5 text-red-500 mr-3" />
                  <span className="text-gray-700">{region}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Regional Information
            </h3>
            <div className="space-y-3">
              {[
                'Species and wildlife data',
                'Seasonal activity patterns',
                'Regional regulations overview',
                'Climate and conditions',
                'Best times to visit',
                'Local expertise tips'
              ].map((feature) => (
                <div key={feature} className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <div className={`w-2 h-2 ${themeColors.accent} rounded-full mr-3`}></div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maps;
