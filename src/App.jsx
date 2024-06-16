import React, { useState } from 'react';
import Navbar from './navbar.jsx';
import About from './assets/pages/about.jsx';
import Experience from './assets/pages/experience.jsx';
import Home from './assets/pages/home.jsx';
import Projects from './assets/pages/projects.jsx'; 
import BottomNavbar from './footer.jsx';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'experience':
        return <Experience />;
      case 'projects': 
        return <Projects />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <div>
        <Navbar onNavigate={handleNavigate} />
        <div>{renderPage()}</div>
      </div>

      <div>
        <BottomNavbar />
      </div>
    </>
  );
};

export default App;
