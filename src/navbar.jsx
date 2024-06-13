import React from 'react';

const Navbar = ({ onNavigate }) => {
  const handleNavigate = (page) => {
    onNavigate(page);
  };

  return (
    <div className="nav-bar">
      <h2>Jose Panoy</h2>
      <nav>
        <ul>
          <li>
            <a onClick={() => handleNavigate('home')}>HOME</a>
          </li>
          <li>
            <a onClick={() => handleNavigate('experience')}>EXPERIENCE</a>
          </li>
          <li>
            <a onClick={() => handleNavigate('about')}>ABOUT</a>
          </li>
          <li>
            <a onClick={() => handleNavigate('projects')}>PROJECTS</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
