import React, { useEffect } from 'react';
import Slider from './components/Slider';
import About from './components/About';
import Work from './components/portfolio/Work';
import Experience from './components/experience/Experience';

function HomePage() {
  return (  
    <div>        
      <Slider />       
      <About />
      <Work />
      <Experience />               
    </div>
  );
}

export default HomePage;
