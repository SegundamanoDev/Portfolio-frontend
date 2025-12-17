import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // <-- Using React Router DOM Link
import { FiMenu, FiX } from "react-icons/fi";

// Define the navigation links with their router paths
const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // To highlight the active link

  const toggleMenu = () => setIsOpen(!isOpen);

  // Base classes for the header
  const headerClasses =
    "sticky top-0 z-50 bg-navy-bg shadow-lg shadow-black/30 backdrop-filter backdrop-blur-sm bg-opacity-95 transition-all duration-300";

  // Classes for the navigation links
  const linkClasses =
    "text-slate-light hover:text-mint-accent transition duration-300 cursor-pointer text-sm font-mono tracking-wide";

  // Classes for the Resume Button
  const buttonClasses =
    "px-4 py-2 border border-mint-accent text-mint-accent hover:bg-mint-accent hover:text-navy-bg transition duration-300 rounded-md text-sm font-mono";

  return (
    <header className={headerClasses}>
      <div className=" container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        {/* --- Logo / Name (Links to Home) --- */}
        <Link
          to="/"
          className="text-2xl font-bold text-mint-accent cursor-pointer font-mono tracking-wider"
        >
          {/* The symbols use the accent color */}
          <span className="text-mint-accent">&lt;</span>
          {/* Your name uses the primary text color */}
          <span className="text-slate-light">Wellington</span>
          {/* The closing symbol uses the accent color */}
          <span className="text-mint-accent">/&gt;</span>
        </Link>

        {/* --- Desktop Navigation --- */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              to={link.path}
              // Highlight active link by checking the current URL path
              className={
                linkClasses +
                (location.pathname === link.path ? " text-mint-accent!" : "")
              }
            >
              {link.name}
            </Link>
          ))}
          {/* Resume Button */}
          <a
            href="/wellington-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClasses}
          >
            Resume
          </a>
        </nav>

        {/* --- Mobile Menu Button --- */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-mint-accent p-2"
          aria-label="Toggle navigation menu"
        >
          {/* Use FiX when menu is open, FiMenu when closed */}
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* --- Mobile Navigation Dropdown --- */}
      <div
        className={`md:hidden ${
          isOpen ? "max-h-64 opacity-100 py-4" : "max-h-0 opacity-0"
        } 
                            overflow-hidden transition-all duration-500 bg-sapphire-bg`}
      >
        <nav className="flex flex-col items-center space-y-4">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={toggleMenu} // Close menu after clicking
              className={linkClasses + " text-lg"}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="/resume-wellington-2025-v2.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClasses + " mt-4"}
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
