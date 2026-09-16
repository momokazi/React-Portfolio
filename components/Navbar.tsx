import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { PERSONAL_INFO } from '../constants';
import { useTheme } from '../context/ThemeContext';
import { cn } from '../lib/utils';
import { Button } from './ui/Button';

const navLinks = [
  { name: 'Work', href: '/projects' },
  { name: 'Stack', href: '/skills' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  // Close the sheet whenever the route changes under it.
  React.useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-40 border-b-3 border-ink bg-paper">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8">
        <Link
          to="/"
          className="group flex items-center gap-3"
          aria-label={`${PERSONAL_INFO.name} — home`}
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center border-3 border-ink bg-flame font-display text-lg text-white shadow-brutal transition-transform duration-100 ease-brutal group-hover:rotate-[-4deg]">
            HM
          </span>
          <span className="hidden font-display text-lg uppercase tracking-tight sm:block">
            {PERSONAL_INFO.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-2 md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) =>
                cn(
                  'border-3 px-4 py-2 font-bold uppercase text-sm tracking-wide rounded-brutal',
                  'transition-[transform,box-shadow,background-color] duration-100 ease-brutal',
                  isActive
                    ? 'border-ink bg-ink text-paper shadow-brutal'
                    : 'border-transparent hover:border-ink hover:bg-acid hover:text-ink hover:shadow-brutal'
                )
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="neutral"
            size="icon"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </Button>

          <Button asChild variant="primary" size="md" className="hidden md:inline-flex">
            <Link to="/contact">Hire me</Link>
          </Button>

          <Button
            variant="neutral"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t-3 border-ink bg-surface p-4 md:hidden">
          <nav className="flex flex-col gap-3" aria-label="Mobile">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) =>
                  cn(
                    'border-3 border-ink px-4 py-3 font-display uppercase tracking-tight rounded-brutal shadow-brutal',
                    isActive ? 'bg-ink text-paper' : 'bg-paper text-ink'
                  )
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Button asChild variant="primary" size="lg" className="mt-1 w-full">
              <Link to="/contact">Hire me</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
