
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Fish } from 'lucide-react';

const ModeSelector = () => {
  const { setMode } = useTheme();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Outdoor Adventures
          </h1>
          <p className="text-xl text-gray-600">
            Choose your passion and discover the best spots, gear, and knowledge
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div
            onClick={() => setMode('fishing')}
            className="group cursor-pointer transform hover:scale-105 transition-all duration-300"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-blue-400 to-teal-600 flex items-center justify-center">
                <Fish className="h-24 w-24 text-white" />
              </div>
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Fishing</h2>
                <p className="text-gray-600 mb-6">
                  Discover the best fishing spots worldwide, learn about fish species, 
                  seasons, and regulations. Get expert advice on gear and techniques.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    Global Spots
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    Fish Species
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    Regulations
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            onClick={() => setMode('hunting')}
            className="group cursor-pointer transform hover:scale-105 transition-all duration-300"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-green-600 to-amber-600 flex items-center justify-center">
                <Map className="h-24 w-24 text-white" />
              </div>
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Hunting</h2>
                <p className="text-gray-600 mb-6">
                  Explore hunting areas, learn about legal weapons, seasons, and wildlife. 
                  Stay informed about regulations and best practices.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    Hunting Areas
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    Wildlife
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    Legal Info
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModeSelector;
