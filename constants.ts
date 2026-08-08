import type { NavLink, Book, Service } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'Qomix', path: '/qomix' },
  { name: 'Qanvas', path: '/qanvas' },
  { name: 'Vision', path: '/vision' },
  { name: 'Team', path: '/team' },
  { name: 'Advisors', path: '/advisors' },
];

export const FOOTER_LINKS: NavLink[] = [
  { name: 'Who we are', path: '/who-we-are' },
  { name: 'Contact', path: '/contact' },
];

export const QOMIX_CLASSICS: Book[] = [
  { 
    id: 'gatsby', 
    title: 'The Great Gatsby', 
    author: 'F. Scott Fitzgerald', 
    imageUrl: '/assets/qomix/gatsby-cover.jpg', 
    snippet: 'The dreamer who fabricates himself from nothing; the lover consumed by illusion. This edition distills the Jazz Age into a dazzling mirror of longing and its hollow core.'
  },
  { 
    id: 'chekhov', 
    title: 'The Great Stories', 
    author: 'Anton Chekhov', 
    imageUrl: '/assets/qomix/chekhov-stories-cover.jpg', 
    snippet: 'Worlds where comedy and cruelty, tenderness and despair, hover in the air between words. Five brilliant miniatures where the stories are brief, but their echo is endless.'
  },
  { 
    id: 'metamorphosis', 
    title: 'The Metamorphosis', 
    author: 'Franz Kafka', 
    imageUrl: '/assets/qomix/metamorphis-cover.jpg',
    snippet: 'A man wakes to find himself a monstrous insect. Out of this beginning, Kafka crafts a profound work of human alienation, giving delirious form to the ‘Kafkaesque’.'
  },
  { 
    id: 'carol', 
    title: 'A Christmas Carol', 
    author: 'Charles Dickens', 
    imageUrl: '/assets/qomix/christmas-carol-cover.jpg',
    snippet: 'The story of Scrooge is a moral experiment in miniature—an embodiment of the radical human capacity for change, wrapped in the skin of a captivating ghost story.'
  },
  { 
    id: 'room', 
    title: 'A Room of One\'s Own', 
    author: 'Virginia Woolf', 
    imageUrl: '/assets/qomix/room-cover.jpg',
    snippet: 'Virginia Woolf asks a question the world still struggles with: what does it take for a woman to write? The answer is as precise as it is revolutionary.'
  },
  { 
    id: 'hunger', 
    title: 'A Hunger Artist', 
    author: 'Franz Kafka', 
    imageUrl: '/assets/qomix/hunger-artist-cover.jpg',
    snippet: 'Three stories that examine the human condition: a man who starves for art, a machine that writes justice on flesh, and a hunter caught between life and death.'
  },
  { 
    id: 'oldman', 
    title: 'The Old Man and the Sea', 
    author: 'Ernest Hemingway', 
    imageUrl: '/assets/qomix/oldman-cover.jpg',
    snippet: 'A tale as lean as a line cast into blue water. This is a modern epic pared to the bone—a parable of endurance, pride, and one man’s struggle against the sea.'
  },
  {
    id: 'dorian',
    title: 'The Picture of Dorian Gray',
    author: 'Oscar Wilde',
    imageUrl: '/assets/qomix/dorian-gray-cover.jpg',
    snippet: 'A glittering fable of youth, vanity, and the soul’s decay. A portrait that tells a truth no mirror can bear, exploring beauty as a mask and desire as corruption.'
  },
  {
    id: 'macbeth',
    title: 'Macbeth',
    author: 'William Shakespeare',
    imageUrl: '/assets/qomix/macbeth-cover.jpg',
    snippet: 'A man meets prophecy. A woman dares him on. Together they summon a storm no crown can contain. A feverish and bloody tragedy of ambition.'
  },
  {
    id: 'usher',
    title: 'The Fall of the House of Usher',
    author: 'Edgar Allan Poe',
    imageUrl: '/assets/qomix/usher-cover.jpg',
    snippet: 'A universe built from terror, irony, and precision. This volume reimagines Poe’s most enduring works in a haunting graphic form.'
  }
];


export const IDEOGRAPHIC_SERVICES: Service[] = [
  { title: "Brand Messaging", description: "Crafting core narratives that resonate deeply with your audience." },
  { title: "Category Education", description: "Simplifying complex ideas to build market understanding and trust." },
  { title: "Content Marketing", description: "Engaging stories that capture attention and drive action." },
  { title: "Social Content", description: "Inherently shareable visuals that spread your message organically." },
  { title: "Creative Dispatches", description: "Unique, high-impact graphic reports and communications." },
];