
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import WorldMap from '../components/WorldMap';
import AdBanner from '../components/AdBanner';

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
