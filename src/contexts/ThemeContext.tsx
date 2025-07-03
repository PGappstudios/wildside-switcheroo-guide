
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Mode = 'fishing' | 'hunting' | null;

interface ThemeContextType {
  mode: Mode;
  setMode: (mode: Mode) => void;
  themeColors: {
    primary: string;
    secondary: string;
    accent: string;
    gradient: string;
  };
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<Mode>(null);

  const getThemeColors = () => {
    if (mode === 'fishing') {
      return {
        primary: 'bg-blue-600',
        secondary: 'bg-blue-100',
        accent: 'bg-teal-500',
        gradient: 'from-blue-600 to-teal-600'
      };
    } else if (mode === 'hunting') {
      return {
        primary: 'bg-green-700',
        secondary: 'bg-green-100',
        accent: 'bg-amber-600',
        gradient: 'from-green-700 to-amber-600'
      };
    }
    return {
      primary: 'bg-gray-700',
      secondary: 'bg-gray-100',
      accent: 'bg-gray-500',
      gradient: 'from-gray-700 to-gray-500'
    };
  };

  return (
    <ThemeContext.Provider value={{ mode, setMode, themeColors: getThemeColors() }}>
      {children}
    </ThemeContext.Provider>
  );
};
