
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import ModeSelector from '../components/ModeSelector';
import HomePage from '../components/HomePage';

const Index = () => {
  const { mode } = useTheme();

  if (!mode) {
    return <ModeSelector />;
  }

  return <HomePage />;
};

export default Index;
