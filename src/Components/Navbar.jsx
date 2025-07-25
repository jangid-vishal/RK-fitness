import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/Untitled-design-24.PNG';

const navLinks = [
  { label: 'HOME', path: '/' },
  { label: 'DWARKA', path: '/dwarka' },
  { label: 'PASCHIM VIHAR', path: '/paschim-vihar' },
  { label: 'ABOUT US', path: '/about-us' },
  { label: 'CONTACT', path: '/contact' }
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="w-full fixed top-0 z-50  text-white font-[Poppins] shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="RK Logo" className="w-24 object-contain" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center gap-8 text-sm font-medium tracking-wide">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="relative group transition"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-500 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Join Now Button */}
        <div className="hidden sm:flex">
          <Link
            to="/contact"
            className="ml-6 px-4 py-2 bg-red-600 text-white rounded-full text-sm font-semibold hover:bg-red-700 transition-all duration-300"
          >
            Join Now
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="sm:hidden z-[60]">
          <button onClick={toggleMenu}>
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="sm:hidden fixed inset-0 bg-black bg-opacity-95 z-40 flex flex-col items-center justify-center space-y-8 text-lg uppercase font-semibold"
          >
            {navLinks.map((link, index) => (
              <Link key={index} to={link.path} onClick={toggleMenu}>
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={toggleMenu}
              className="mt-6 px-6 py-2 bg-red-600 rounded-full text-white font-semibold text-base hover:bg-red-700 transition"
            >
              Join Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
