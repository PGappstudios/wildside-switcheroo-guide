
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

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
    <header className={`${themeColors.primary} text-white shadow-strong transition-all duration-500 relative z-50`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 text-xl font-bold hover-scale group">
            <img 
              src="/lovable-uploads/9afe033d-e67a-4acb-942a-09877b7ae9a6.png" 
              alt="Wildside Guide Logo" 
              className="h-8 w-8 transition-transform duration-300 group-hover:scale-110"
            />
            <span className="transition-colors duration-300 group-hover:text-yellow-300">
              Wildside Guide
            </span>
          </Link>
          
          <nav className="hidden md:flex space-x-6">
            {navigationItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                className={`hover:text-yellow-300 transition-all duration-300 relative px-2 py-1 rounded-md hover:bg-white/10 ${
                  location.pathname === item.path ? 'text-yellow-300 bg-white/20 shadow-soft' : ''
                } fade-in-delay`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setMode(null)}
            className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-all duration-300 hover-lift shadow-soft hover:shadow-medium"
          >
            Switch Mode
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
