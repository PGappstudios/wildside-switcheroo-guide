
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Map, MapPin } from 'lucide-react';

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
              ? 'Interactive maps showing the best fishing locations' 
              : 'Detailed maps of hunting areas and regulations'
            }
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="text-center mb-8">
            <Map className="h-16 w-16 mx-auto text-gray-400 mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Interactive Map Coming Soon
            </h2>
            <p className="text-gray-600">
              We're working on an interactive map feature that will show you the best {mode === 'fishing' ? 'fishing spots' : 'hunting areas'} in your region.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              {mode === 'fishing' ? 'Popular Fishing Regions' : 'Prime Hunting Regions'}
            </h3>
            <div className="space-y-3">
              {(mode === 'fishing' 
                ? ['Great Lakes Region', 'Pacific Northwest', 'Gulf Coast', 'Atlantic Coast']
                : ['Rocky Mountains', 'Great Plains', 'Southeastern Forests', 'Northern Wilderness']
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
              Map Features
            </h3>
            <div className="space-y-3">
              {[
                'GPS coordinates for prime locations',
                'Weather and conditions overlay',
                'Seasonal activity patterns',
                'Local regulation boundaries',
                'Access points and trails',
                'User-submitted reports'
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
