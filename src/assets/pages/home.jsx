import React from 'react';
import TopContent from '../../top-content.jsx';
import MidContent from '../../mid-content.jsx';
import ContactInfo from '../../contact-info.jsx';
import ScrollButton from '../../scroll-button.jsx'; 


function Home() {
  return (
    <>
      <TopContent />
      <MidContent />
      <ContactInfo />
      <ScrollButton />
    </>
  );
}

export default Home;
