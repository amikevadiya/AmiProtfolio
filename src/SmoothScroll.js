import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './css/Style.css';
import WOW from 'wowjs';
import 'wowjs/css/libs/animate.css';
import HomePage from './Home';
import Portfolio from './components/portfolio/PortfolioPage';
import Nav from './components/Nav';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

const SmoothScroll = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollInstance = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true, // Enable smooth scrolling
      // Add more Locomotive Scroll options here
    });

    // ScrollTrigger configuration
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.scrollerProxy(scrollRef.current, {
      scrollTop(value) {
        if (arguments.length) {
          scrollInstance.scrollTo(value, 0, 0);
        }
        return scrollInstance.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    ScrollTrigger.defaults({ scroller: scrollRef.current });

    return () => {
      scrollInstance.destroy(); // Clean up the Locomotive Scroll instance
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      <Router>
        <Nav />
        <div>
          <HomePage />
          <Portfolio />
          <Footer />
        </div>
      </Router>
    </div>
  );
};

export default SmoothScroll;
