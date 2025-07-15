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
        title: 'Best Hunting Gear & Equipment Reviews | Top-Rated Tools 2024',
        description: 'Discover the best hunting gear and equipment. Expert reviews of top-rated apparel, weapons, and accessories from trusted brands on Amazon.',
        keywords: 'hunting gear, hunting equipment, hunting apparel, hunting tools, best hunting gear, hunting gear reviews'
      };

  const fishingProducts = [
    {
      name: 'Anchor Wizard Low Profile Kayak Anchor System',
      price: 'From $99.99',
      rating: 4.9,
      votes: 87,
      soldOut: false,
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop'
    },
    {
      name: 'Fishing Online Custom Chinook PFD',
      price: '$89.95',
      rating: 5.0,
      votes: 12,
      soldOut: false,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop'
    },
    {
      name: 'FishOn Tungsten Worm Weights',
      price: 'From $1.99',
      rating: 5.0,
      votes: 18,
      soldOut: false,
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop'
    },
    {
      name: 'Ketch Karbonate Measuring Board',
      price: 'From $29.99',
      rating: 4.9,
      votes: 63,
      soldOut: false,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
    },
    {
      name: 'Power-Pole Battery Pack and Charger',
      price: '$199.99',
      rating: 4.9,
      votes: 14,
      soldOut: false,
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop'
    },
    {
      name: 'Power-Pole Micro Shallow Water Anchor',
      price: '$599.99',
      rating: 4.9,
      votes: 38,
      soldOut: false,
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop'
    },
    {
      name: 'Power-Pole Ultra-Lite / Heavy-Duty Spikes',
      price: 'From $79.99',
      rating: 4.8,
      votes: 58,
      soldOut: false,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop'
    }
  ];

  const huntingProducts = [
    {
      name: 'Attack Pant',
      price: '$149',
      rating: null,
      votes: 14826,
      soldOut: false,
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop'
    },
    {
      name: 'KUIU Performance Polo',
      price: '$89',
      rating: null,
      votes: 427,
      soldOut: false,
      image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=300&fit=crop'
    },
    {
      name: 'Tiburon Pant',
      price: '$149',
      rating: null,
      votes: 4000,
      soldOut: false,
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop'
    },
    {
      name: 'PRO Chest Pack',
      price: '$179',
      rating: null,
      votes: 452,
      soldOut: false,
      image: 'https://images.unsplash.com/photo-1622260614153-03223fb72052?w=400&h=300&fit=crop'
    },
    {
      name: 'Gila LS Hoodie',
      price: '$79',
      rating: null,
      votes: 1644,
      soldOut: false,
      image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=300&fit=crop'
    },
    {
      name: 'Tiburon 13″ Short',
      price: '$99',
      rating: null,
      votes: 2059,
      soldOut: false,
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop'
    },
    {
      name: 'KUIU Kutana Stretch Woven Pant',
      price: '$169',
      rating: null,
      votes: 3244,
      soldOut: false,
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop'
    },
    {
      name: 'Mesa Vented LS Snap Shirt',
      price: '$109',
      rating: null,
      votes: 533,
      soldOut: false,
      image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=300&fit=crop'
    },
    {
      name: 'KUIU HD Mud Boot',
      price: '$229',
      rating: null,
      votes: 525,
      soldOut: false,
      image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=300&fit=crop'
    },
    {
      name: 'PRO Brush Pant',
      price: '$199',
      rating: null,
      votes: 1108,
      soldOut: false,
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop'
    }
  ];

  // Filter out sold out products
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
            {mode === 'fishing' ? 'Best-Selling Fishing Products' : 'Best-Selling Hunting Products'}
          </h1>
          <p className="text-xl">
            {mode === 'fishing' 
              ? 'Top-rated fishing gear from Amazon.com' 
              : 'Premium hunting gear and apparel from Amazon.com'
            }
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg leading-tight text-gray-800">
                  {product.name}
                </CardTitle>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-2xl font-bold text-green-600">
                    {product.price}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-between mb-4">
                  {product.rating && (
                    <StarRating rating={product.rating} />
                  )}
                  <span className="text-sm text-gray-500">
                    {product.votes.toLocaleString()} {mode === 'fishing' ? 'votes' : 'reviews'}
                  </span>
                </div>
                <Button 
                  className={`w-full ${themeColors.accent} hover:opacity-90 transition-opacity`}
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
