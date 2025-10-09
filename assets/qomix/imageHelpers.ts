// Example of how to import local images for the Qomix page
// This file demonstrates different approaches to handling local images

// Method 1: Static imports (recommended for known images)
// Uncomment and add your actual image files:
// import gatsbycover from '../assets/qomix/gatsby-cover.jpg';
// import chekhovcover from '../assets/qomix/chekhov-stories-cover.jpg';
// import metamorphosiscover from '../assets/qomix/metamorphosis-cover.png';

// Method 2: Dynamic imports using public folder paths
// Place images in assets/qomix/ and reference them like this:
export const getQomixImagePath = (imageName: string): string => {
  return `/assets/qomix/${imageName}`;
};

// Method 3: Create an image manifest for better organization
export const QOMIX_IMAGES = {
  gatsby: '/assets/qomix/gatsby-cover.jpg',
  chekhov: '/assets/qomix/chekhov-stories-cover.jpg', 
  metamorphosis: '/assets/qomix/metamorphosis-cover.png',
  carol: '/assets/qomix/christmas-carol-cover.jpg',
  room: '/assets/qomix/room-of-ones-own-cover.jpg',
  hunger: '/assets/qomix/hunger-artist-cover.jpg',
  oldman: '/assets/qomix/old-man-and-sea-cover.jpg',
  // Add more as needed
} as const;

// Helper function to get image with fallback
export const getQomixImage = (bookId: string, fallbackUrl?: string): string => {
  return QOMIX_IMAGES[bookId as keyof typeof QOMIX_IMAGES] || fallbackUrl || '/assets/qomix/placeholder-book-cover.jpg';
};