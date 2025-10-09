import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import Button from './Button';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-4 border-ink bg-paper">
      <div className="container mx-auto px-6">
        <div className="flex items-center py-4">
          {/* Logo - Left */}
          <div className="flex-1">
            <Link to="/" data-cursor-hover="true" className="flex items-center hover:opacity-80 transition-opacity">
              <img 
                src="/assets/auteur-logo.svg" 
                alt="Auteur Global" 
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Nav - Center */}
          <nav className="hidden md:flex items-center space-x-8 flex-1 justify-center">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                data-cursor-hover="true"
                className={({ isActive }) =>
                  `text-ink-soft hover:text-ink transition-colors font-semibold ${isActive ? '!text-ink underline decoration-2 underline-offset-4' : ''}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Contact Button - Right */}
          <div className="hidden md:flex flex-1 justify-end">
            <Link to="/contact" data-cursor-hover="true">
              <Button variant="secondary" className="px-6 py-2 !border-ink/50 hover:!border-ink hover:!text-ink hover:!bg-transparent">Contact</Button>
            </Link>
          </div>

          {/* Mobile Nav Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-ink focus:outline-none" data-cursor-hover="true">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t-2 border-ink bg-paper">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                data-cursor-hover="true"
                className={({ isActive }) =>
                  `text-ink-soft hover:text-ink transition-colors font-semibold ${isActive ? '!text-ink underline decoration-2 underline-offset-4' : ''}`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link to="/contact" onClick={() => setIsOpen(false)} data-cursor-hover="true">
                <Button variant='primary' className='!bg-ink !text-paper hover:!bg-ink-soft'>Contact</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;