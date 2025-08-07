'use client';

import { useEffect, useState } from 'react';
import { initializeVisualEffects, staggerCards, createParallaxEffect } from '../utils/visual-effects';

export default function VisualEffectsInitializer() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Initialize all visual effects only after client-side hydration
    initializeVisualEffects();
    
    // Add stagger effect to cards
    staggerCards();
    
    // Create parallax effect for hero
    createParallaxEffect();
    
  }, []);

  // Don't render anything until client-side hydration is complete
  if (!isClient) {
    return null;
  }

  return null;
}
