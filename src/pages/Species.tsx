import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { MapPin } from 'lucide-react';

const Species = () => {
  const { mode, themeColors } = useTheme();

  const species = mode === 'fishing' 
    ? [
        {
          name: 'Atlantic Salmon',
          scientificName: 'Salmo salar',
          locations: ['Norway', 'Scotland', 'Canada', 'Alaska'],
          bestTime: 'May to September',
          description: 'Prized for their fighting ability and excellent taste',
          image: 'https://images.unsplash.com/photo-1544943910-4c1dc44aab44?auto=format&fit=crop&w=400&q=80'
        },
        {
          name: 'Largemouth Bass',
          scientificName: 'Micropterus salmoides',
          locations: ['USA', 'Canada', 'Mexico', 'Japan'],
          bestTime: 'April to October',
          description: 'Popular game fish known for aggressive strikes',
          image: 'https://images.unsplash.com/photo-1571769264071-95e8dfe5ca04?auto=format&fit=crop&w=400&q=80'
        },
        {
          name: 'Bluefin Tuna',
          scientificName: 'Thunnus thynnus',
          locations: ['Mediterranean', 'Atlantic Ocean', 'Pacific Ocean'],
          bestTime: 'June to November',
          description: 'Massive pelagic fish highly valued for sashimi',
          image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=400&q=80'
        },
        {
          name: 'Rainbow Trout',
          scientificName: 'Oncorhynchus mykiss',
          locations: ['North America', 'Europe', 'Asia', 'Australia'],
          bestTime: 'March to November',
          description: 'Beautiful freshwater fish with distinctive pink stripe',
          image: 'https://images.unsplash.com/photo-1571769264071-95e8dfe5ca04?auto=format&fit=crop&w=400&q=80'
        },
        {
          name: 'Northern Pike',
          scientificName: 'Esox lucius',
          locations: ['North America', 'Europe', 'Asia'],
          bestTime: 'May to October',
          description: 'Aggressive predator with razor-sharp teeth',
          image: 'https://images.unsplash.com/photo-1571769264071-95e8dfe5ca04?auto=format&fit=crop&w=400&q=80'
        },
        {
          name: 'Mahi-Mahi',
          scientificName: 'Coryphaena hippurus',
          locations: ['Tropical Atlantic', 'Pacific Ocean', 'Indian Ocean'],
          bestTime: 'Year-round in tropics',
          description: 'Colorful dolphinfish with excellent table fare',
          image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=400&q=80'
        },
        {
          name: 'Striped Bass',
          scientificName: 'Morone saxatilis',
          locations: ['Atlantic Coast USA', 'Pacific Coast USA', 'Great Lakes'],
          bestTime: 'April to November',
          description: 'Popular sport fish with distinctive horizontal stripes',
          image: 'https://images.unsplash.com/photo-1520637836862-4d197d17c0a4?auto=format&fit=crop&w=400&q=80'
        },
        {
          name: 'Walleye',
          scientificName: 'Sander vitreus',
          locations: ['Northern USA', 'Canada', 'Great Lakes'],
          bestTime: 'April to October',
          description: 'Excellent eating fish with distinctive glassy eyes',
          image: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=400&q=80'
        },
        {
          name: 'Red Snapper',
          scientificName: 'Lutjanus campechanus',
          locations: ['Gulf of Mexico', 'Atlantic Ocean', 'Caribbean'],
          bestTime: 'May to September',
          description: 'Prized deep-water fish with distinctive red coloration',
          image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=400&q=80'
        }
      ]
    : [
        {
          name: 'White-tailed Deer',
          scientificName: 'Odocoileus virginianus',
          locations: ['North America', 'Central America', 'South America'],
          bestTime: 'September to January',
          description: 'Most popular big game animal in North America',
          image: 'https://images.unsplash.com/photo-1439886183900-e79ec0057170?auto=format&fit=crop&w=400&q=80'
        },
        {
          name: 'American Elk',
          scientificName: 'Cervus canadensis',
          locations: ['Western USA', 'Canada', 'Rocky Mountains'],
          bestTime: 'September to November',
          description: 'Majestic big game animal known for bugling calls',
          image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&w=400&q=80'
        },
        {
          name: 'Wild Boar',
          scientificName: 'Sus scrofa',
          locations: ['Europe', 'Asia', 'North America', 'Australia'],
          bestTime: 'Year-round',
          description: 'Challenging and dangerous game requiring skill',
          image: 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f?auto=format&fit=crop&w=400&q=80'
        },
        {
          name: 'Moose',
          scientificName: 'Alces alces',
          locations: ['Alaska', 'Canada', 'Northern USA', 'Scandinavia'],
          bestTime: 'September to October',
          description: 'Largest member of the deer family, impressive antlers',
          image: 'https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?auto=format&fit=crop&w=400&q=80'
        },
        {
          name: 'Black Bear',
          scientificName: 'Ursus americanus',
          locations: ['North America', 'Canada', 'Alaska'],
          bestTime: 'Spring and Fall',
          description: 'Adaptable omnivore found in various habitats',
          image: 'https://images.unsplash.com/photo-1452960962994-acf4fd70b632?auto=format&fit=crop&w=400&q=80'
        },
        {
          name: 'Mule Deer',
          scientificName: 'Odocoileus hemionus',
          locations: ['Western North America', 'Mexico'],
          bestTime: 'October to December',
          description: 'Distinguished by large ears and black-tipped tail',
          image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&w=400&q=80'
        },
        {
          name: 'Pronghorn Antelope',
          scientificName: 'Antilocapra americana',
          locations: ['Western USA', 'Mexico', 'Southern Canada'],
          bestTime: 'August to October',
          description: 'Fastest land animal in North America',
          image: 'https://images.unsplash.com/photo-1517022812141-23620dba5c23?auto=format&fit=crop&w=400&q=80'
        },
        {
          name: 'Mountain Goat',
          scientificName: 'Oreamnos americanus',
          locations: ['Rocky Mountains', 'Alaska', 'Western Canada'],
          bestTime: 'August to November',
          description: 'Sure-footed climber of steep mountain terrain',
          image: 'https://images.unsplash.com/photo-1498936178812-4b2e558d2937?auto=format&fit=crop&w=400&q=80'
        },
        {
          name: 'Bighorn Sheep',
          scientificName: 'Ovis canadensis',
          locations: ['Western North America', 'Rocky Mountains'],
          bestTime: 'September to December',
          description: 'Known for their impressive curved horns',
          image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&w=400&q=80'
        }
      ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className={`bg-gradient-to-r ${themeColors.gradient} text-white py-20`}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">
            {mode === 'fishing' ? 'Fish Species Guide' : 'Wildlife Guide'}
          </h1>
          <p className="text-xl">
            {mode === 'fishing' 
              ? 'Comprehensive database of fish species and their habitats' 
              : 'Detailed information about huntable wildlife'
            }
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {species.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-1">
                  {item.name}
                </h3>
                <p className="text-gray-500 italic mb-4">
                  {item.scientificName}
                </p>
                <p className="text-gray-600 mb-4">
                  {item.description}
                </p>
                
                <div className="space-y-3">
                  <div>
                    <div className="flex items-center mb-2">
                      <MapPin className="h-4 w-4 text-red-500 mr-2" />
                      <span className="font-medium text-gray-700">Locations:</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {item.locations.map((location) => (
                        <span
                          key={location}
                          className={`${themeColors.secondary} px-2 py-1 rounded text-sm`}
                        >
                          {location}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <span className="font-medium text-gray-700">Best Time: </span>
                    <span className="text-gray-600">{item.bestTime}</span>
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

export default Species;
