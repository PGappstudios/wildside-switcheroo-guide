
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  const location = useLocation();
  const { mode } = useTheme();

  // Generate breadcrumbs from current path if no items provided
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [
      { label: 'Home', href: '/' }
    ];

    pathSegments.forEach((segment, index) => {
      const href = '/' + pathSegments.slice(0, index + 1).join('/');
      let label = segment.charAt(0).toUpperCase() + segment.slice(1);
      
      // Replace with more user-friendly names
      if (segment === 'spots' || segment === 'areas') {
        label = mode === 'fishing' ? 'Fishing Spots' : 'Hunting Areas';
      } else if (segment === 'tools' || segment === 'weapons') {
        label = mode === 'fishing' ? 'Fishing Tools' : 'Hunting Weapons';
      } else if (segment === 'species' || segment === 'animals') {
        label = mode === 'fishing' ? 'Fish Species' : 'Wildlife';
      } else if (segment === 'seasons') {
        label = mode === 'fishing' ? 'Fishing Seasons' : 'Hunting Seasons';
      } else if (segment === 'regulations') {
        label = mode === 'fishing' ? 'Fishing Regulations' : 'Hunting Regulations';
      } else if (segment === 'maps') {
        label = mode === 'fishing' ? 'Fishing Maps' : 'Hunting Maps';
      }

      breadcrumbs.push({
        label,
        href: index === pathSegments.length - 1 ? undefined : href
      });
    });

    return breadcrumbs;
  };

  const breadcrumbItems = items || generateBreadcrumbs();

  if (breadcrumbItems.length <= 1) return null;

  return (
    <nav className="bg-white border-b border-gray-200 py-3" aria-label="Breadcrumb">
      <div className="container mx-auto px-4">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbItems.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="h-4 w-4 text-gray-400 mr-2" />
              )}
              {item.href ? (
                <Link
                  to={item.href}
                  className="text-blue-600 hover:text-blue-800 transition-colors flex items-center"
                >
                  {index === 0 && <Home className="h-4 w-4 mr-1" />}
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-500 flex items-center">
                  {index === 0 && <Home className="h-4 w-4 mr-1" />}
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
