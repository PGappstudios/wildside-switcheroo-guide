import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { MapPin } from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';

const Species = () => {
  const { mode, themeColors } = useTheme();

  const seoData = mode === 'fishing'
    ? {
        title: 'Complete Fish Species Guide - Identification & Locations | Wildside Guide',
        description: 'Comprehensive database of fish species with detailed information on habitats, best fishing times, and locations. Expert guide to identifying fish worldwide.',
        keywords: 'fish species, fish identification, fish guide, fish database, fishing species, fish habitats, fish locations'
      }
    : {
        title: 'Complete Wildlife Guide - Hunting Species & Habitats | Wildside Guide',
        description: 'Detailed information about hunting wildlife species, their habitats, behavior, and best hunting times. Comprehensive guide to game animals worldwide.',
        keywords: 'hunting wildlife, game species, hunting animals, wildlife guide, hunting species, animal habitats, hunting database'
      };

  const species = mode === 'fishing' 
    ? [
        {
          name: 'Atlantic Salmon',
          scientificName: 'Salmo salar',
          locations: ['Norway', 'Scotland', 'Canada', 'Alaska'],
          bestTime: 'May to September',
          description: 'Prized for their fighting ability and excellent taste',
          image: 'https://www.onekindplanet.org/wp-content/uploads/2018/04/large-512x300.jpg'
        },
        {
          name: 'Largemouth Bass',
          scientificName: 'Micropterus salmoides',
          locations: ['USA', 'Canada', 'Mexico', 'Japan'],
          bestTime: 'April to October',
          description: 'Popular game fish known for aggressive strikes',
          image: 'https://www.eekwi.org/sites/default/files/styles/original/public/2021-08/largemouth-bass-virgil-beck.jpg?itok=-SgS3FNJ'
        },
        {
          name: 'Bluefin Tuna',
          scientificName: 'Thunnus thynnus',
          locations: ['Mediterranean', 'Atlantic Ocean', 'Pacific Ocean'],
          bestTime: 'June to November',
          description: 'Massive pelagic fish highly valued for sashimi',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Bluefin-big.jpg/1200px-Bluefin-big.jpg'
        },
        {
          name: 'Rainbow Trout',
          scientificName: 'Oncorhynchus mykiss',
          locations: ['North America', 'Europe', 'Asia', 'Australia'],
          bestTime: 'March to November',
          description: 'Beautiful freshwater fish with distinctive pink stripe',
          image: 'https://static.wikia.nocookie.net/undawater/images/b/b9/Rainbow_Trout.jpg/revision/latest/scale-to-width-down/693?cb=20240708222941'
        },
        {
          name: 'Northern Pike',
          scientificName: 'Esox lucius',
          locations: ['North America', 'Europe', 'Asia'],
          bestTime: 'May to October',
          description: 'Aggressive predator with razor-sharp teeth',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Esox_lucius_ZOO_1.jpg/960px-Esox_lucius_ZOO_1.jpg'
        },
        {
          name: 'Mahi-Mahi',
          scientificName: 'Coryphaena hippurus',
          locations: ['Tropical Atlantic', 'Pacific Ocean', 'Indian Ocean'],
          bestTime: 'Year-round in tropics',
          description: 'Colorful dolphinfish with excellent table fare',
          image: 'https://chefsmandala.com/wp-content/uploads/2018/04/Mahi-Mahi-Dolphin-Fish.jpg'
        },
        {
          name: 'Striped Bass',
          scientificName: 'Morone saxatilis',
          locations: ['Atlantic Coast USA', 'Pacific Coast USA', 'Great Lakes'],
          bestTime: 'April to November',
          description: 'Popular sport fish with distinctive horizontal stripes',
          image: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Striped_bass_FWS_1.jpg'
        },
        {
          name: 'Walleye',
          scientificName: 'Sander vitreus',
          locations: ['Northern USA', 'Canada', 'Great Lakes'],
          bestTime: 'April to October',
          description: 'Excellent eating fish with distinctive glassy eyes',
          image: 'https://norrik.com/wp-content/uploads/2023/09/walleye-lake-fishing.jpg'
        },
        {
          name: 'Red Snapper',
          scientificName: 'Lutjanus campechanus',
          locations: ['Gulf of Mexico', 'Atlantic Ocean', 'Caribbean'],
          bestTime: 'May to September',
          description: 'Prized deep-water fish with distinctive red coloration',
          image: 'https://www.crfishingcharters.com/wp-content/uploads/2022/05/costa-rica-fishing-charters-red-snapper-sportfishing-pargo-rojo.jpg'
        }
      ]
    : [
        {
          name: 'White-tailed Deer',
          scientificName: 'Odocoileus virginianus',
          locations: ['North America', 'Central America', 'South America'],
          bestTime: 'September to January',
          description: 'Most popular big game animal in North America',
          image: 'https://www.beardsleyzoo.org/uploads/1/2/4/2/124214186/published/213.jpg?1703867179'
        },
        {
          name: 'American Elk',
          scientificName: 'Cervus canadensis',
          locations: ['Western USA', 'Canada', 'Rocky Mountains'],
          bestTime: 'September to November',
          description: 'Majestic big game animal known for bugling calls',
          image: 'https://cdn.britannica.com/03/94603-050-D74D3709/elk-American-Yellowstone-National-Park-Wyoming.jpg'
        },
        {
          name: 'Wild Boar',
          scientificName: 'Sus scrofa',
          locations: ['Europe', 'Asia', 'North America', 'Australia'],
          bestTime: 'Year-round',
          description: 'Challenging and dangerous game requiring skill',
          image: 'https://www.bushgear.co.uk/cdn/shop/articles/Wild_Boar_European.jpg?v=1539682585&width=2048'
        },
        {
          name: 'Moose',
          scientificName: 'Alces alces',
          locations: ['Alaska', 'Canada', 'Northern USA', 'Scandinavia'],
          bestTime: 'September to October',
          description: 'Largest member of the deer family, impressive antlers',
          image: 'https://images.takeshape.io/86ce9525-f5f2-4e97-81ba-54e8ce933da7/dev/881f5500-77b1-468a-832e-a6f8467cedf3/Wild%20Moose%20Grazing%20shutterstock_790996543%20(1).jpg?auto=compress%2Cformat&w=1440'
        },
        {
          name: 'Black Bear',
          scientificName: 'Ursus americanus',
          locations: ['North America', 'Canada', 'Alaska'],
          bestTime: 'Spring and Fall',
          description: 'Adaptable omnivore found in various habitats',
          image: 'https://bear.org/wp-content/uploads/2023/03/20130607_Bow-copy.jpg'
        },
        {
          name: 'Mule Deer',
          scientificName: 'Odocoileus hemionus',
          locations: ['Western North America', 'Mexico'],
          bestTime: 'October to December',
          description: 'Distinguished by large ears and black-tipped tail',
          image: 'https://www.nps.gov/romo/learn/nature/images/MuleDeer_Cover_688x400.jpg'
        },
        {
          name: 'Pronghorn Antelope',
          scientificName: 'Antilocapra americana',
          locations: ['Western USA', 'Mexico', 'Southern Canada'],
          bestTime: 'August to October',
          description: 'Fastest land animal in North America',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpnfhAEOy7vOUtfwI_grkdxKEN6DKE97fAEQ&s'
        },
        {
          name: 'Mountain Goat',
          scientificName: 'Oreamnos americanus',
          locations: ['Rocky Mountains', 'Alaska', 'Western Canada'],
          bestTime: 'August to November',
          description: 'Sure-footed climber of steep mountain terrain',
          image: 'https://www.nationalforests.org/assets/header-images/_600x300_crop_center-center_none/Mountain_Goat_Mount_Massive.JPG'
        },
        {
          name: 'Bighorn Sheep',
          scientificName: 'Ovis canadensis',
          locations: ['Western North America', 'Rocky Mountains'],
          bestTime: 'September to December',
          description: 'Known for their impressive curved horns',
          image: 'https://rangerrick.org/wp-content/uploads/2018/01/Bighorn-RR-March-2018-donald-m-jones.jpg'
        }
      ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `${mode === 'fishing' ? 'Fish' : 'Wildlife'} Species Guide`,
    "description": seoData.description,
    "numberOfItems": species.length,
    "itemListElement": species.map((item, index) => ({
      "@type": mode === 'fishing' ? "Animal" : "Animal",
      "position": index + 1,
      "name": item.name,
      "description": item.description,
      "scientificName": item.scientificName
    }))
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonical={`https://wildside-guide.com/${mode === 'fishing' ? 'species' : 'animals'}`}
        ogTitle={seoData.title}
        ogDescription={seoData.description}
        schemaData={schemaData}
      />
      
      <Breadcrumbs />

      <header className={`bg-gradient-to-r ${themeColors.gradient} text-white py-20`}>
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
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {species.map((item, index) => (
            <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src={item.image}
                alt={`${item.name} - ${item.scientificName}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-1">
                  {item.name}
                </h2>
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
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Species;
