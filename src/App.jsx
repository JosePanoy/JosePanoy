import React, { useState } from 'react';
import Navbar from './navbar.jsx';
import About from './assets/pages/about.jsx';
import Experience from './assets/pages/experience.jsx';
import Project from './assets/pages/projects.jsx';
import Home from './assets/pages/home.jsx';
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
        
        case 'project':
          return <Project />;
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

      <BottomNavbar />
    </>
  );
};

export default App;
