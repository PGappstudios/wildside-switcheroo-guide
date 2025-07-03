
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { Fish, Target } from 'lucide-react';

const Header = () => {
  const { mode, setMode, themeColors } = useTheme();
  const location = useLocation();

  if (!mode) return null;

  const navigationItems = mode === 'fishing' 
    ? [
        { name: 'Best Spots', path: '/spots' },
        { name: 'Tools & Gear', path: '/tools' },
        { name: 'Seasons', path: '/seasons' },
        { name: 'Fish Species', path: '/species' },
        { name: 'Maps', path: '/maps' },
        { name: 'Regulations', path: '/regulations' }
      ]
    : [
        { name: 'Hunting Areas', path: '/areas' },
        { name: 'Weapons', path: '/weapons' },
        { name: 'Seasons', path: '/seasons' },
        { name: 'Animals', path: '/animals' },
        { name: 'Maps', path: '/maps' },
        { name: 'Regulations', path: '/regulations' }
      ];

  return (
    <header className={`${themeColors.primary} text-white shadow-lg transition-all duration-500`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
            {mode === 'fishing' ? <Fish className="h-6 w-6" /> : <Target className="h-6 w-6" />}
            <span>{mode === 'fishing' ? 'Fishing' : 'Hunting'}</span>
          </Link>
          
          <nav className="hidden md:flex space-x-6">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`hover:text-gray-200 transition-colors ${
                  location.pathname === item.path ? 'text-yellow-300' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setMode(null)}
            className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors"
          >
            Switch Mode
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
