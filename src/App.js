import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './css/Style.css';
import WOW from 'wowjs';
import 'wowjs/css/libs/animate.css';
import HomePage from './Home';
import Portfolio from './components/portfolio/PortfolioPage'
import Nav from './components/Nav';
import Footer from './components/Footer';
import UiWork from './components/portfolio/UiWork';

const App = () => {
  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);

  

  return (
    <div>
      <Router>
        <Nav />
        <div style={{ flex: '1 0 auto' }}>
          {/* Add your page content here */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/UiWork" element={<UiWork />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
