
import React from 'react';

interface AdBannerProps {
  size?: 'leaderboard' | 'banner' | 'large-banner';
  className?: string;
}

const AdBanner: React.FC<AdBannerProps> = ({ size = 'banner', className = '' }) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'leaderboard':
        return 'w-full h-[90px] max-w-[728px]';
      case 'banner':
        return 'w-full h-[60px] max-w-[468px]';
      case 'large-banner':
        return 'w-full h-[100px] max-w-[970px]';
      default:
        return 'w-full h-[60px] max-w-[468px]';
    }
  };

  return (
    <div className={`${getSizeClasses()} mx-auto ${className}`}>
      <div className="w-full h-full bg-gray-100 border border-gray-300 rounded-sm flex flex-col items-center justify-center relative">
        {/* Google AdSense style header */}
        <div className="absolute top-1 left-2 text-[10px] text-gray-500 font-normal">
          AdSense
        </div>
        
        {/* Ad content area */}
        <div className="flex flex-col items-center justify-center space-y-1">
          <div className="text-xs text-gray-600 font-medium">Advertisement</div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-2 bg-blue-500 rounded-sm"></div>
            <div className="w-12 h-2 bg-green-500 rounded-sm"></div>
            <div className="w-6 h-2 bg-red-500 rounded-sm"></div>
            <div className="w-8 h-2 bg-yellow-500 rounded-sm"></div>
          </div>
          <div className="text-[10px] text-gray-500">
            {size === 'leaderboard' ? '728 x 90' : size === 'large-banner' ? '970 x 90' : '468 x 60'}
          </div>
        </div>

        {/* Google-style "Ads by Google" text */}
        <div className="absolute bottom-1 right-2 text-[9px] text-gray-400">
          Ads by Google
        </div>
      </div>
    </div>
  );
};

export default AdBanner;
