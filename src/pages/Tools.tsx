import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Star } from 'lucide-react';
import SEO from '../components/SEO';

const Tools = () => {
  const { mode, themeColors } = useTheme();

  const seoData = mode === 'fishing'
    ? {
        title: 'Best Fishing Gear & Equipment Reviews | Top-Rated Tools 2024',
        description: 'Discover the best fishing gear and equipment. Expert reviews of top-rated rods, reels, tackle, and accessories from trusted brands on Amazon.',
        keywords: 'fishing gear, fishing equipment, fishing rods, fishing reels, fishing tackle, best fishing tools, fishing gear reviews'
      }
    : {
        title: 'Best Hunting Weapons & Gear Reviews | Top-Rated Equipment 2024',
        description: 'Discover the best hunting weapons and gear. Expert reviews of top-rated crossbows, rifles, archery equipment, and hunting accessories from trusted brands on Amazon.',
        keywords: 'hunting weapons, hunting gear, crossbows, hunting rifles, archery equipment, hunting accessories, hunting gear reviews'
      };

  const fishingProducts = [
    {
      name: 'Gradient Fitness Kayak Anchor Kit | Paddle Board Accessories',
      price: 'From $35.99',
      rating: 4.9,
      votes: 87,
      soldOut: false,
      image: 'https://m.media-amazon.com/images/I/81JVMnZu+jL._AC_SL1500_.jpg'
    },
    {
      name: 'Stohlquist Edge Personal Flotation Device',
      price: 'From $84.95',
      rating: 5.0,
      votes: 12,
      soldOut: false,
      image: 'https://m.media-amazon.com/images/I/81jYVZJzx-L._AC_SL1500_.jpg'
    },
    {
      name: '12 Pack Tungsten Bullet Fishing Weights, Insert Free Worm Sinkers',
      price: 'From $16.99',
      rating: 5.0,
      votes: 18,
      soldOut: false,
      image: 'https://m.media-amazon.com/images/I/51gEqn2xwOL._AC_SL1500_.jpg'
    },
    {
      name: 'Fishing Online Karbonate Fish Measuring Board',
      price: 'From $44.99',
      rating: 4.9,
      votes: 63,
      soldOut: false,
      image: 'https://m.media-amazon.com/images/I/61ZO7dymIPL.__AC_SY300_SX300_QL70_FMwebp_.jpg'
    },
    {
      name: 'Sougayilang Fishing Rod Reel Combo with Telescopic Fishing Pole Spinning Reel Carrier Bag for Travel Saltwater Freshwater Fishing',
      price: 'From $69.99',
      rating: 4.9,
      votes: 14,
      soldOut: false,
      image: 'https://m.media-amazon.com/images/I/81gE6dy-WRL._AC_SL1500_.jpg'
    },
    {
      name: 'PLUSINNO Fishing Lures, 137Pcs Tackle Box with Tackle Included, Crankbaits, Spoon, Hooks, Weights & Other Accessories',
      price: 'From $16.99',
      rating: 4.9,
      votes: 38,
      soldOut: false,
      image: 'https://m.media-amazon.com/images/I/A1cBsRau-yL._AC_SL1500_.jpg'
    },
    {
      name: 'PLUSINNO Large 4-Layer Tackle Box with Tackle Included, 547Pcs Fishing Lures Kit - Pliers, Crankbait, Hooks, Weights & Accessories',
      price: 'From $54.99',
      rating: 4.8,
      votes: 58,
      soldOut: false,
      image: 'https://m.media-amazon.com/images/I/81XzUaF006L._AC_SL1500_.jpg'
    }
  ];

  const huntingProducts = [
    {
      name: 'CenterPoint Sniper 370 Crossbow Package',
      price: 'From $249.99',
      rating: 4.5,
      votes: 1247,
      soldOut: false,
      image: 'https://m.media-amazon.com/images/I/713lp136cNL._AC_SX679_.jpg'
    },
    {
      name: 'Barnett Whitetail Hunter STR Crossbow',
      price: 'From $199.99',
      rating: 4.3,
      votes: 892,
      soldOut: false,
      image: 'https://m.media-amazon.com/images/I/61jJ0qu6--L._AC_SL1500_.jpg'
    },
    {
      name: 'PSE Archery Stinger Max SS Compound Bow',
      price: 'From $329.99',
      rating: 4.7,
      votes: 456,
      soldOut: false,
      image: 'https://m.media-amazon.com/images/I/61Dua9KZhqL._AC_SY879_.jpg'
    },
    {
      name: 'CVLIFE 4-16x44 Hunting Rifle Scope',
      price: 'From $59.99',
      rating: 4.4,
      votes: 2134,
      soldOut: false,
      image: 'https://m.media-amazon.com/images/I/6121FVF5DEL.__AC_SY300_SX300_QL70_FMwebp_.jpg'
    },
    {
      name: 'TenPoint Vapor RS470 Crossbow Package',
      price: 'From $1,999.99',
      rating: 4.8,
      votes: 234,
      soldOut: false,
      image: 'https://m.media-amazon.com/images/I/71b3IwgkWZL.__AC_SX300_SY300_QL70_FMwebp_.jpg'
    },
    {
      name: 'Carbon Express Maxima RED Arrows',
      price: 'From $89.99',
      rating: 4.6,
      votes: 567,
      soldOut: false,
      image: 'https://m.media-amazon.com/images/I/61sHKG0Ij0L._AC_SX679_.jpg'
    },
    {
      name: 'KUIU Gila LS Hoodie UPF 50+ Cooling Shirt for Hunting & Outdoors Quick-Dry',
      price: 'From $129.99',
      rating: 4.7,
      votes: 823,
      soldOut: false,
      image: 'https://m.media-amazon.com/images/I/71gjyQBaBVL._AC_SX679_.jpg'
    },
    {
      name: 'Muddy Outdoors Infinity 360 Tree Stand',
      price: 'From $189.99',
      rating: 4.5,
      votes: 445,
      soldOut: false,
      image: 'https://m.media-amazon.com/images/I/61AzVRQn7bL._AC_SX679_.jpg'
    },
    {
      name: 'Bushnell Trophy Cam HD Essential E3 Trail Camera',
      price: 'From $89.99',
      rating: 4.3,
      votes: 1567,
      soldOut: false,
      image: 'https://m.media-amazon.com/images/I/71U754rOZlL._AC_SX679_.jpg'
    },
    {
      name: 'Primos Hunting The Can Deer Call',
      price: 'From $14.99',
      rating: 4.2,
      votes: 2345,
      soldOut: false,
      image: 'https://m.media-amazon.com/images/I/61unTjze7hL.__AC_SY300_SX300_QL70_FMwebp_.jpg'
    }
  ];

  const availableFishingProducts = fishingProducts.filter(product => !product.soldOut);
  const availableHuntingProducts = huntingProducts.filter(product => !product.soldOut);
  const products = mode === 'fishing' ? availableFishingProducts : availableHuntingProducts;

  const handleViewOnAmazon = (productName: string) => {
    const searchQuery = encodeURIComponent(productName);
    const amazonAssociateId = 'pgstudios0a-20';
    window.open(`https://www.amazon.com/s?k=${searchQuery}&tag=${amazonAssociateId}`, '_blank');
  };

  const StarRating = ({ rating }: { rating: number }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="relative">
            <Star 
              size={16} 
              className={`${i < fullStars ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
            />
            {hasHalfStar && i === fullStars && (
              <Star 
                size={16} 
                className="absolute top-0 left-0 fill-yellow-400 text-yellow-400"
                style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0% 100%)' }}
              />
            )}
          </div>
        ))}
        <span className="text-sm text-gray-600 ml-1">{rating}</span>
      </div>
    );
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `Best ${mode === 'fishing' ? 'Fishing' : 'Hunting'} Products`,
    "description": seoData.description,
    "numberOfItems": products.length,
    "itemListElement": products.map((product, index) => ({
      "@type": "Product",
      "position": index + 1,
      "name": product.name,
      "offers": {
        "@type": "Offer",
        "price": product.price,
        "availability": "https://schema.org/InStock"
      }
    }))
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonical={`https://wildside-guide.com/${mode === 'fishing' ? 'tools' : 'weapons'}`}
        ogTitle={seoData.title}
        ogDescription={seoData.description}
        schemaData={schemaData}
      />

      <header className={`bg-gradient-to-r ${themeColors.gradient} text-white py-20`}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">
            {mode === 'fishing' ? 'Best-Selling Fishing Products' : 'Best Hunting Weapons & Gear'}
          </h1>
          <p className="text-xl">
            {mode === 'fishing' 
              ? 'Top-rated fishing gear from Amazon.com' 
              : 'Premium hunting weapons and gear from Amazon.com'
            }
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="pb-3 flex-shrink-0">
                <CardTitle className="text-lg leading-tight text-gray-800">
                  {product.name}
                </CardTitle>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-2xl font-bold text-green-600">
                    {product.price}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="pt-0 flex-grow flex flex-col justify-between">
                <div className="flex items-center justify-between mb-4">
                  {product.rating && (
                    <StarRating rating={product.rating} />
                  )}
                  <span className="text-sm text-gray-500">
                    {product.votes.toLocaleString()} {mode === 'fishing' ? 'votes' : 'reviews'}
                  </span>
                </div>
                <Button 
                  className={`w-full ${themeColors.accent} hover:opacity-90 transition-opacity mt-auto`}
                  onClick={() => handleViewOnAmazon(product.name)}
                >
                  View on Amazon
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Tools;
