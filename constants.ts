import type { NavLink, Book, Service } from './types';

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

export const QOMIX_CLASSICS: Book[] = [
  { id: 'gatsby', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', imageUrl: '/assets/qomix/gatsby-cover.jpg' },
  { id: 'chekhov', title: 'The Great Stories', author: 'Anton Chekhov', imageUrl: '/assets/qomix/chekhov-stories-cover.jpg' },
  { id: 'metamorphosis', title: 'The Metamorphosis', author: 'Franz Kafka', imageUrl: '/assets/qomix/metamorphis-cover.jpg' },
  { id: 'carol', title: 'A Christmas Carol', author: 'Charles Dickens', imageUrl: '/assets/qomix/christmas-carol-cover.jpg' },
  { id: 'room', title: 'A Room of One\'s Own', author: 'Virginia Woolf', imageUrl: '/assets/qomix/room-cover.jpg' },
  { id: 'hunger', title: 'A Hunger Artist', author: 'Franz Kafka', imageUrl: '/assets/qomix/hunger-artist-cover.jpg' },
  { id: 'oldman', title: 'The Old Man and the Sea', author: 'Ernest Hemingway', imageUrl: '/assets/qomix/oldman-cover.jpg' },  
];


export const IDEOGRAPHIC_SERVICES: Service[] = [
  { title: "Brand Messaging", description: "Crafting core narratives that resonate deeply with your audience." },
  { title: "Category Education", description: "Simplifying complex ideas to build market understanding and trust." },
  { title: "Content Marketing", description: "Engaging stories that capture attention and drive action." },
  { title: "Social Content", description: "Inherently shareable visuals that spread your message organically." },
  { title: "Creative Dispatches", description: "Unique, high-impact graphic reports and communications." },
];