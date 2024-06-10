import React from 'react';
import './assets/css/footer.css';
import { FaReact } from 'react-icons/fa'; 

function BottomNavbar() {
  return (
    <footer className="bottom-navbar">
      <div className="nav-left">
      
      </div>
      <div className="nav-right nav-item">
        <span>React</span>
        <FaReact /> 
      </div>
    </footer>
  );
}

export default BottomNavbar;
