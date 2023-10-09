import React, { useState, useRef  } from 'react';
import beforeimg from './image/desgin.png';
import afterimg from './image/dev.png';



function CurtainEffect() {
  const picturesContainerRef = useRef(null);
  const foregroundPictureRef = useRef(null);
  const [isTextStartHovered, setIsTextStartHovered] = useState(false);
  const [isTextEndHovered, setIsTextEndHovered] = useState(false);

  function curtainEffect(foregroundPictureWidth) {
    foregroundPictureRef.current.style.width = foregroundPictureWidth + -500 + 'px';
  }

  function curtainEffectHandler(e) {
    window.requestAnimationFrame(() => {
      const picturesContainerLeft = picturesContainerRef.current.getBoundingClientRect().left;
      const pageX = e.pageX || e.touches[0].pageX; // handle touch events if needed

      curtainEffect(pageX - picturesContainerLeft);
    });
  }

  function handleTextStartHover() {
    setIsTextStartHovered(true);
  }

  function handleTextStartLeave() {
    
      setIsTextStartHovered(false);
  
  }

  function handleTextEndHover() {
    setIsTextEndHovered(true);
  }

  function handleTextEndLeave() {
  
      setIsTextEndHovered(false);
  
  }

  return (
    <div
      className="row align-items-center"
      onMouseEnter={curtainEffectHandler}
      onMouseMove={curtainEffectHandler}
      onMouseLeave={curtainEffectHandler}
      ref={picturesContainerRef}
    >
     <div
        className={`col-4 text-start ${isTextEndHovered ? 'text-start-hover' : ''}`}
        onMouseEnter={handleTextStartHover}
        onMouseLeave={handleTextStartLeave}
      >
        <h1>DEVELOPER</h1>
        <p className="text-big">Building immersive digital experiences with a fusion of code and creativity.</p>
        <a href="#" className="slider-view-link">
          <span>Front End Developer</span>
          <div className="view-icon">
            <i className="fa-solid fa-arrow-up"></i>
          </div>
        </a>
      </div>
      <div className="col-4">
        <div className="picture-curtain">
          <div className="background-picture-container">
            <img
              className="background-picture"
              src={afterimg} // Replace with your image source
              alt="background picture"
            />
          </div>
          <div className="foreground-picture-container" ref={foregroundPictureRef}>
            <img
              className="foreground-picture"
              src={beforeimg} // Replace with your image source
              alt="foreground picture"
            />
          </div>
        </div>
        <div className="social-follow">
          <ul>
            <li>
              <a href="mailto:amikevadiya05@gmail.com" target="_blank">
                <i className="fa-regular fa-envelope"></i>
              </a>
            </li>
            <li>
              <a href="https://www.behance.net/lakadiyaami" target="_blank">
                <i className="fa-brands fa-behance"></i>
              </a>
            </li>
            <li>
              <a href="https://codepen.io/amilakadiya" target="_blank">
                <i className="fa-brands fa-codepen"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/amilakadiya/" target="_blank">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`col-4 text-end ${isTextStartHovered ? 'text-end-hover' : ''}`}
        onMouseEnter={handleTextEndHover}
        onMouseLeave={handleTextEndLeave}
      >
        <h1>DESIGNER</h1>
        <p className="text-big">Transforming visions into intuitive interfaces with front-end expertise and design finesse.</p>

        <a href="#" className="slider-view-link">
          <span>UI/UX Designer</span>
          <div className="view-icon">
            <i className="fa-solid fa-arrow-up"></i>
          </div>
        </a>
      </div>
    </div>
  );
}

function MyComponent() {
  return (
    <div>
      <CurtainEffect />
     
    </div>
  );
}

export default MyComponent;
