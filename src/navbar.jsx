import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import './assets/css/navbar.css';

const Navbar = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigate = (page) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="nav-bar">
      <h2>Jose Panoy</h2>
      <button className="menu-toggle" onClick={toggleMenu}>
        <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} />
      </button>
      <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a onClick={() => handleNavigate('home')}>HOME</a></li>
          <li><a onClick={() => handleNavigate('experience')}>EXPERIENCE</a></li>
          <li><a onClick={() => handleNavigate('about')}>ABOUT</a></li>
          <li><a onClick={() => handleNavigate('projects')}>PROJECTS</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
