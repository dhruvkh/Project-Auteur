import React from 'react';
import { Link } from 'react-router-dom';
import { FOOTER_LINKS } from '../constants';
import type { NavLink } from '../types';

const Footer: React.FC = () => {
  return (
    <footer className="bg-panel-muted border-t border-panel-dark">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link to="/" data-cursor-hover="true" className="flex items-center hover:opacity-80 transition-opacity">
              <img 
                src="/assets/auteur-logo.svg" 
                alt="Auteur Global" 
                className="h-6 w-auto"
              />
            </Link>
          </div>
          <nav className="flex space-x-6 mb-4 md:mb-0">
            {FOOTER_LINKS.map((link: NavLink) => (
              <Link key={link.name} to={link.path} data-cursor-hover="true" className="text-body-neutral hover:text-ink transition-colors">
                {link.name}
              </Link>
            ))}
          </nav>
          <p className="text-sm text-body-neutral">&copy; {new Date().getFullYear()} Auteur Global. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;