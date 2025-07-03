
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Tools = () => {
  const { mode, themeColors } = useTheme();

  const tools = mode === 'fishing' 
    ? [
        {
          category: 'Rods & Reels',
          items: [
            { name: 'Spinning Rod', description: 'Versatile for various fish species', price: '$50-200' },
            { name: 'Baitcasting Reel', description: 'Precision casting for experienced anglers', price: '$80-300' },
            { name: 'Fly Rod', description: 'Lightweight for fly fishing', price: '$100-500' }
          ]
        },
        {
          category: 'Tackle & Bait',
          items: [
            { name: 'Tackle Box', description: 'Organized storage for lures and hooks', price: '$20-80' },
            { name: 'Live Bait', description: 'Worms, minnows, and other live options', price: '$5-15' },
            { name: 'Artificial Lures', description: 'Spinners, spoons, and soft plastics', price: '$10-50' }
          ]
        }
      ]
    : [
        {
          category: 'Firearms',
          items: [
            { name: 'Bolt-Action Rifle', description: 'Accurate for long-range shooting', price: '$400-1500' },
            { name: 'Compound Bow', description: 'Modern archery equipment', price: '$300-800' },
            { name: 'Shotgun', description: 'Versatile for bird hunting', price: '$200-1000' }
          ]
        },
        {
          category: 'Gear & Accessories',
          items: [
            { name: 'Hunting Vest', description: 'Safety and storage combined', price: '$30-100' },
            { name: 'Binoculars', description: 'Spot wildlife from distance', price: '$100-500' },
            { name: 'Trail Camera', description: 'Monitor wildlife activity', price: '$80-300' }
          ]
        }
      ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className={`bg-gradient-to-r ${themeColors.gradient} text-white py-20`}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">
            {mode === 'fishing' ? 'Fishing Tools & Gear' : 'Hunting Weapons & Gear'}
          </h1>
          <p className="text-xl">
            {mode === 'fishing' 
              ? 'Essential equipment for successful fishing' 
              : 'Professional hunting equipment and accessories'
            }
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="space-y-12">
          {tools.map((category, index) => (
            <div key={index}>
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                {category.category}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {item.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className={`${themeColors.primary} text-white px-3 py-1 rounded text-sm`}>
                        {item.price}
                      </span>
                      <button className={`${themeColors.accent} text-white px-4 py-2 rounded hover:opacity-90 transition-opacity`}>
                        Learn More
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;
