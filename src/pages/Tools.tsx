import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Star } from 'lucide-react';

const Tools = () => {
  const { mode, themeColors } = useTheme();

  const fishingProducts = [
    {
      name: 'Anchor Wizard Low Profile Kayak Anchor System',
      price: 'From $99.99',
      rating: 4.9,
      votes: 87,
      soldOut: false
    },
    {
      name: 'Dobyns Fury Series Casting Rod',
      price: 'From $149.99',
      rating: 5.0,
      votes: 10,
      soldOut: true
    },
    {
      name: 'Dobyns Fury Series Spinning Rod',
      price: '$149.99',
      rating: 4.0,
      votes: 4,
      soldOut: true
    },
    {
      name: 'Fishing Online Custom Chinook PFD',
      price: '$89.95',
      rating: 5.0,
      votes: 12,
      soldOut: false
    },
    {
      name: 'FishOn Tungsten Worm Weights',
      price: 'From $1.99',
      rating: 5.0,
      votes: 18,
      soldOut: false
    },
    {
      name: 'Hawg Trough Measuring Board (Pre-lined & Floating)',
      price: 'From $21.99',
      rating: 4.8,
      votes: 596,
      soldOut: true
    },
    {
      name: 'Ketch Karbonate Measuring Board',
      price: 'From $29.99',
      rating: 4.9,
      votes: 63,
      soldOut: false
    },
    {
      name: 'Power-Pole Battery Pack and Charger',
      price: '$199.99',
      rating: 4.9,
      votes: 14,
      soldOut: false
    },
    {
      name: 'Power-Pole Micro Shallow Water Anchor',
      price: '$599.99',
      rating: 4.9,
      votes: 38,
      soldOut: false
    },
    {
      name: 'Power-Pole Ultra-Lite / Heavy-Duty Spikes',
      price: 'From $79.99',
      rating: 4.8,
      votes: 58,
      soldOut: false
    }
  ];

  const huntingProducts = [
    {
      name: 'Attack Pant',
      price: '$149',
      rating: null,
      votes: 14826,
      soldOut: false
    },
    {
      name: 'KUIU Performance Polo',
      price: '$89',
      rating: null,
      votes: 427,
      soldOut: false
    },
    {
      name: 'Tiburon Pant',
      price: '$149',
      rating: null,
      votes: 4000,
      soldOut: false
    },
    {
      name: 'PRO Chest Pack',
      price: '$179',
      rating: null,
      votes: 452,
      soldOut: false
    },
    {
      name: 'Gila LS Hoodie',
      price: '$79',
      rating: null,
      votes: 1644,
      soldOut: false
    },
    {
      name: 'Tiburon 13″ Short',
      price: '$99',
      rating: null,
      votes: 2059,
      soldOut: false
    },
    {
      name: 'KUIU Kutana Stretch Woven Pant',
      price: '$169',
      rating: null,
      votes: 3244,
      soldOut: false
    },
    {
      name: 'Mesa Vented LS Snap Shirt',
      price: '$109',
      rating: null,
      votes: 533,
      soldOut: false
    },
    {
      name: 'KUIU HD Mud Boot',
      price: '$229',
      rating: null,
      votes: 525,
      soldOut: false
    },
    {
      name: 'PRO Brush Pant',
      price: '$199',
      rating: null,
      votes: 1108,
      soldOut: false
    }
  ];

  const products = mode === 'fishing' ? fishingProducts : huntingProducts;

  const handleViewOnAmazon = (productName: string) => {
    const searchQuery = encodeURIComponent(productName);
    window.open(`https://www.amazon.com/s?k=${searchQuery}`, '_blank');
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

  return (
    <div className="min-h-screen bg-gray-50">
      <div className={`bg-gradient-to-r ${themeColors.gradient} text-white py-20`}>
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
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300 relative">
              {product.soldOut && (
                <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium z-10">
                  Sold Out
                </div>
              )}
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
                  disabled={product.soldOut}
                >
                  {product.soldOut ? 'Currently Unavailable' : 'View on Amazon'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;
