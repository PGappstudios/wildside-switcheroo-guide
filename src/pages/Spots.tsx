import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { MapPin } from 'lucide-react';

const Spots = () => {
  const { mode, themeColors } = useTheme();

  const spots = mode === 'fishing' 
    ? [
        {
          name: 'Great Barrier Reef, Australia',
          description: 'World-class coral reef fishing with incredible biodiversity',
          bestTime: 'April to November',
          species: ['Barramundi', 'Coral Trout', 'Mackerel'],
          image: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&w=800&q=80'
        },
        {
          name: 'Norwegian Fjords',
          description: 'Deep-water fishing in stunning natural landscapes',
          bestTime: 'May to September',
          species: ['Atlantic Salmon', 'Cod', 'Halibut'],
          image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80'
        },
        {
          name: 'Costa Rica Pacific Coast',
          description: 'Sport fishing paradise with year-round opportunities',
          bestTime: 'Year-round',
          species: ['Marlin', 'Sailfish', 'Tuna'],
          image: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?auto=format&fit=crop&w=800&q=80'
        }
      ]
    : [
        {
          name: 'Yellowstone National Park, USA',
          description: 'Premier wildlife hunting in protected wilderness areas',
          bestTime: 'September to November',
          species: ['Elk', 'Bison', 'Deer'],
          image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80'
        },
        {
          name: 'Scottish Highlands',
          description: 'Traditional hunting grounds with rich heritage',
          bestTime: 'August to February',
          species: ['Red Deer', 'Roe Deer', 'Wild Boar'],
          image: 'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=800&q=80'
        },
        {
          name: 'Alberta, Canada',
          description: 'Vast wilderness perfect for big game hunting',
          bestTime: 'September to November',
          species: ['Moose', 'Black Bear', 'Whitetail Deer'],
          image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80'
        }
      ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className={`bg-gradient-to-r ${themeColors.gradient} text-white py-20`}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">
            {mode === 'fishing' ? 'Best Fishing Spots' : 'Premier Hunting Areas'}
          </h1>
          <p className="text-xl">
            {mode === 'fishing' 
              ? 'Discover world-renowned fishing destinations' 
              : 'Explore top hunting locations worldwide'
            }
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {spots.map((spot, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src={spot.image}
                alt={spot.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <MapPin className="h-5 w-5 text-red-500 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-800">
                    {spot.name}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  {spot.description}
                </p>
                <div className="space-y-2">
                  <div>
                    <span className="font-medium text-gray-700">Best Time: </span>
                    <span className="text-gray-600">{spot.bestTime}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">
                      {mode === 'fishing' ? 'Fish Species: ' : 'Wildlife: '}
                    </span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {spot.species.map((species) => (
                        <span
                          key={species}
                          className={`${themeColors.secondary} px-2 py-1 rounded text-sm`}
                        >
                          {species}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Spots;
