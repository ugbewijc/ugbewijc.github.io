import { Menu, Moon, Sun, X } from 'lucide-react';
import React, { useState } from 'react';

export const navBarMenu = [
  {
    id: 'home',
    label: 'Home',
    href: '#home',
  },
  {
    id: 'about',
    label: 'About',
    href: '#about',
  },
  {
    id: 'projects',
    label: 'Projects',
    href: '#projects',
  },
  {
    id: 'skills',
    label: 'Skills',
    href: '#skills',
  }
]

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  return (
    <nav className="portfolio-navbar py-2">
      <div className="container d-flex align-items-center justify-content-between">
        <a href="#home" className="nav-brand-logo">
          <span className="brand-monogram">JC</span>
        </a>

        {/* Desktop Nav Links */}
        <div className="d-none d-md-flex align-items-center gap-4">
          {navBarMenu.map(({ id, href, label }) => (
            <a key={id} href={href} className="nav-link">{label}</a>
          ))}

          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            className="theme-toggle-btn ms-2"
            // title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={20} className="text-warning" /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile menu button & theme toggle */}
        <div className="d-flex d-md-none align-items-center gap-2">
          <button
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            className="theme-toggle-btn"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={20} className="text-warning" /> : <Moon size={20} />}
          </button>
          <button
            className="btn p-1 text-secondary"
            onClick={() => setNavOpen(!navOpen)}
            aria-label="Toggle navigation"
          >
            {navOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {navOpen && (
        <div className="container d-md-none pt-3 pb-2 border-top  border-1 border-secondary mt-2">
          <div className="d-flex flex-column gap-2">
            {navBarMenu.map(({ id, href, label }) => (
              <a key={id} href={href} onClick={() => setNavOpen(false)} className="nav-link py-1">{label}</a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}