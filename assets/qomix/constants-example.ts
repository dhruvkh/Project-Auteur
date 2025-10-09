// Example of how to update constants.ts to use local images
// Copy this into your constants.ts file after adding your images

import type { NavLink, Book, Service } from '../../types';
import { getQomixImage } from './imageHelpers';

export const NAV_LINKS: NavLink[] = [
  { name: 'Qomix', path: '/qomix' },
  { name: 'Qanvas', path: '/qanvas' },
  { name: 'Ideographic', path: '/ideographic' },
];

export const FOOTER_LINKS: NavLink[] = [
  { name: 'Vision', path: '/vision' },
  { name: 'Team', path: '/team' },
  { name: 'Advisors', path: '/advisors' },
];

// Updated QOMIX_CLASSICS using local images
// Replace the external URLs with local image paths once you add the images
export const QOMIX_CLASSICS: Book[] = [
  { 
    id: 'gatsby', 
    title: 'The Great Gatsby', 
    author: 'F. Scott Fitzgerald', 
    imageUrl: getQomixImage('gatsby', 'https://storage.googleapis.com/a-photos-public/qomix_titles_img_001.jpg')
  },
  { 
    id: 'chekhov', 
    title: 'The Great Stories', 
    author: 'Anton Chekhov', 
    imageUrl: getQomixImage('chekhov', 'https://storage.googleapis.com/a-photos-public/qomix_titles_img_002.jpg')
  },
  { 
    id: 'metamorphosis', 
    title: 'The Metamorphosis', 
    author: 'Franz Kafka', 
    imageUrl: getQomixImage('metamorphosis', 'https://storage.googleapis.com/a-photos-public/qomix_titles_img_003.jpg')
  },
  { 
    id: 'carol', 
    title: 'A Christmas Carol', 
    author: 'Charles Dickens', 
    imageUrl: getQomixImage('carol', 'https://storage.googleapis.com/a-photos-public/qomix_titles_img_004.jpg')
  },
  { 
    id: 'room', 
    title: 'A Room of One\'s Own', 
    author: 'Virginia Woolf', 
    imageUrl: getQomixImage('room', 'https://storage.googleapis.com/a-photos-public/qomix_titles_img_005.jpg')
  },
  { 
    id: 'hunger', 
    title: 'A Hunger Artist', 
    author: 'Franz Kafka', 
    imageUrl: getQomixImage('hunger', 'https://storage.googleapis.com/a-photos-public/qomix_titles_img_006.jpg')
  },
  { 
    id: 'oldman', 
    title: 'The Old Man and the Sea', 
    author: 'Ernest Hemingway', 
    imageUrl: getQomixImage('oldman', 'https://storage.googleapis.com/a-photos-public/qomix_titles_img_007.jpg')
  },
  { 
    id: 'placeholder1', 
    title: 'Another Classic', 
    author: 'Famous Author', 
    imageUrl: '/assets/qomix/placeholder-book-cover.jpg'
  },
  { 
    id: 'placeholder2', 
    title: 'Timeless Story', 
    author: 'Historic Writer', 
    imageUrl: '/assets/qomix/placeholder-book-cover.jpg'
  },
];

export const IDEOGRAPHIC_SERVICES: Service[] = [
  { title: "Brand Messaging", description: "Crafting core narratives that resonate deeply with your audience." },
  { title: "Category Education", description: "Simplifying complex ideas to build market understanding and trust." },
  { title: "Content Marketing", description: "Engaging stories that capture attention and drive action." },
  { title: "Social Content", description: "Inherently shareable visuals that spread your message organically." },
  { title: "Creative Dispatches", description: "Unique, high-impact graphic reports and communications." },
];