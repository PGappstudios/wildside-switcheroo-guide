
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Fish, Target } from 'lucide-react';

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
            className="group cursor-pointer transform hover:scale-105 transition-all duration-500 ease-out"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-500">
              <div className="h-64 bg-gradient-to-br from-blue-400 to-teal-600 flex items-center justify-center group-hover:from-blue-500 group-hover:to-teal-700 transition-all duration-500">
                <Fish className="h-24 w-24 text-white transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" />
              </div>
              <div className="p-8 group-hover:bg-blue-50 transition-colors duration-300">
                <h2 className="text-3xl font-bold text-gray-800 mb-4 group-hover:text-blue-800 transition-colors duration-300">Fishing</h2>
                <p className="text-gray-600 mb-6 group-hover:text-blue-700 transition-colors duration-300">
                  Discover the best fishing spots worldwide, learn about fish species, 
                  seasons, and regulations. Get expert advice on gear and techniques.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm group-hover:bg-blue-200 group-hover:scale-105 transition-all duration-300">
                    Global Spots
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm group-hover:bg-blue-200 group-hover:scale-105 transition-all duration-300 delay-75">
                    Fish Species
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm group-hover:bg-blue-200 group-hover:scale-105 transition-all duration-300 delay-150">
                    Regulations
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            onClick={() => setMode('hunting')}
            className="group cursor-pointer transform hover:scale-105 transition-all duration-500 ease-out"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-500">
              <div className="h-64 bg-gradient-to-br from-green-600 to-amber-600 flex items-center justify-center group-hover:from-green-700 group-hover:to-amber-700 transition-all duration-500">
                <Target className="h-24 w-24 text-white transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" />
              </div>
              <div className="p-8 group-hover:bg-green-50 transition-colors duration-300">
                <h2 className="text-3xl font-bold text-gray-800 mb-4 group-hover:text-green-800 transition-colors duration-300">Hunting</h2>
                <p className="text-gray-600 mb-6 group-hover:text-green-700 transition-colors duration-300">
                  Explore hunting areas, learn about legal weapons, seasons, and wildlife. 
                  Stay informed about regulations and best practices.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm group-hover:bg-green-200 group-hover:scale-105 transition-all duration-300">
                    Hunting Areas
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm group-hover:bg-green-200 group-hover:scale-105 transition-all duration-300 delay-75">
                    Wildlife
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm group-hover:bg-green-200 group-hover:scale-105 transition-all duration-300 delay-150">
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
