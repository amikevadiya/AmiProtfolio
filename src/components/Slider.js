// import React, { useState, useRef  } from 'react';
// import beforeimg from '../image/desgin.png';
// import afterimg from '../image/dev.png';


// const Slider = () => {
//   const picturesContainerRef = useRef(null);
//   const foregroundPictureRef = useRef(null);
//   const [isTextStartHovered, setIsTextStartHovered] = useState(false);
//   const [isTextEndHovered, setIsTextEndHovered] = useState(false);

//   function curtainEffect(foregroundPictureWidth) {
//     foregroundPictureRef.current.style.width = foregroundPictureWidth + -500 + 'px';
//   }

//   function curtainEffectHandler(e) {
//     window.requestAnimationFrame(() => {
//       const picturesContainerLeft = picturesContainerRef.current.getBoundingClientRect().left;
//       const pageX = e.pageX || e.touches[0].pageX; 
//       curtainEffect(pageX - picturesContainerLeft);
//     });
//   }

//   function handleTextStartHover() {
//     setIsTextStartHovered(true);
//   }

//   function handleTextStartLeave() {    
//       setIsTextStartHovered(false);  
//   }

//   function handleTextEndHover() {
//     setIsTextEndHovered(true);
//   }

//   function handleTextEndLeave() {  
//       setIsTextEndHovered(false);  
//   }

//   return (
//    <div>
//       <section className="slider-section">
//         <div className="container">
//             <div className="row align-items-center" onMouseEnter={curtainEffectHandler} onMouseMove={curtainEffectHandler} onMouseLeave={curtainEffectHandler} ref={picturesContainerRef}>
//               {/* developer section */}
//               <div className={`col-lg-4 col-md-12 text-start ${isTextEndHovered ? 'text-start-hover' : ''}`} onMouseEnter={handleTextStartHover} onMouseLeave={handleTextStartLeave}>      
//                   <h1>DEVELOPER</h1>
//                   <p className="text-big">Building immersive digital experiences with a fusion of code and creativity.</p>
//                   {/* <a href="#" className="slider-view-link">
//                     <span>Front End Developer</span>
//                     <div className="view-icon">
//                     <i className="fa-solid fa-arrow-up"></i>
//                   </div>
//                 </a> */}
//               </div>
//               {/* slider img and social section */}
//               <div className="col-lg-4 col-md-12 ">
//                 {/* img  section  */}
//                 <div className="slider-slide-img-container">
//                   <div className="background-picture-container">
//                     <img className="background-picture" src={afterimg} alt="background picture"/>
//                   </div>
//                   <div className="foreground-picture-container" ref={foregroundPictureRef}>
//                     <img className="foreground-picture" src={beforeimg} alt="foreground picture"/>
//                   </div>
//                 </div>
//                 {/* social section */}
//                 <div className="social-follow">
//                   <ul>
//                     <li>
//                       <a href="mailto:amikevadiya05@gmail.com" target="_blank">
//                         <i className="fa-regular fa-envelope"></i>
//                       </a>
//                     </li>
//                     <li>
//                       <a href="https://www.behance.net/lakadiyaami" target="_blank">
//                         <i className="fa-brands fa-behance"></i>
//                       </a>
//                     </li>
//                     <li>
//                       <a href="https://codepen.io/amilakadiya" target="_blank">
//                         <i className="fa-brands fa-codepen"></i>
//                       </a>
//                     </li>
//                     <li>
//                       <a href="https://www.linkedin.com/in/amilakadiya/" target="_blank">
//                         <i className="fa-brands fa-linkedin-in"></i>
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//             </div>
//              {/* Designer section */}
//             <div className={`col-lg-4 col-md-12 text-end ${isTextStartHovered ? 'text-end-hover' : ''}`} onMouseEnter={handleTextEndHover} onMouseLeave={handleTextEndLeave}>
//               <h1>DESIGNER</h1>
//               <p className="text-big">Transforming visions into intuitive interfaces with front-end expertise and design finesse.</p>
//               {/* <a href="#" className="slider-view-link">
//                 <span>UI/UX Designer</span>
//                 <div className="view-icon">
//                   <i className="fa-solid fa-arrow-up"></i>
//                 </div>
//               </a> */}
//             </div>
//             {/* end */}
//           </div>
//         </div>
//       </section>    
//    </div>
//   );
// };

// export default Slider;
import React, { useState, useRef } from 'react';
import beforeimg from '../image/desgin.png';
import afterimg from '../image/dev.png';
import { Link } from 'react-router-dom';

const Slider = () => {
  const picturesContainerRef = useRef(null);
  const foregroundPictureRef = useRef(null);
  const [isTextStartHovered, setIsTextStartHovered] = useState(false);
  const [isTextEndHovered, setIsTextEndHovered] = useState(false);
  const [centerDivClass, setCenterDivClass] = useState('');

  function curtainEffect(foregroundPictureWidth) {
    foregroundPictureRef.current.style.width = foregroundPictureWidth + -500 + 'px';
  }

  function curtainEffectHandler(e) {
    window.requestAnimationFrame(() => {
      const picturesContainerLeft = picturesContainerRef.current.getBoundingClientRect().left;
      const pageX = e.pageX || e.touches[0].pageX;
      curtainEffect(pageX - picturesContainerLeft);
    });
  }

  function handleTextStartHover() {
    setIsTextStartHovered(true);
    setCenterDivClass('design');
  }

  function handleTextStartLeave() {
    setIsTextStartHovered(false);
    setCenterDivClass('');
  }

  function handleTextEndHover() {
    setIsTextEndHovered(true);
    setCenterDivClass('dev');
  }

  function handleTextEndLeave() {
    setIsTextEndHovered(false);
    setCenterDivClass('');
  }

  return (
    <div>
      <section className="slider-section wow fadeIn">
        <div
          className="container"
          onMouseEnter={curtainEffectHandler}
          onMouseMove={curtainEffectHandler}
          onMouseLeave={curtainEffectHandler}
          ref={picturesContainerRef}
        >
          <div className="row align-items-center position-relative">
          {/* developer section */}
          <div
            className={` text-slider-left ${isTextEndHovered ? 'text-start-hover' : ''}`}
            onMouseEnter={handleTextStartHover}
            onMouseLeave={handleTextStartLeave}
          >
            <h1>DEVELOPER</h1>
            <p className="text-big">Building immersive digital experiences with a fusion of code and creativity.</p>
            <Link to="/portfolio" className="slider-view-icon">
            <span className="d-block">View Project</span>
          </Link>
          </div>

          {/* slider img and social section */}
          <div
            className="text-slider-center">
            {/* img  section  */}
            <div className={`slider-slide-img-container ${centerDivClass}`}>
              <div className="background-picture-container">
                <img className="background-picture" src={afterimg} alt="background picture" />
              </div>
              <div className="foreground-picture-container" ref={foregroundPictureRef}>
                <img className="foreground-picture" src={beforeimg} alt="foreground picture" />
              </div>
            </div>
            {/* social section */}
            {/* <div className="social-follow">
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
            </div> */}
          </div>

          {/* Designer section */}
          <div
            className={`text-slider-right ${isTextStartHovered ? 'text-end-hover' : ''}`}
            onMouseEnter={handleTextEndHover}
            onMouseLeave={handleTextEndLeave}
          >
            <h1>DESIGNER</h1>
            <p className="text-big">Transforming visions into intuitive interfaces with front-end expertise and design finesse.</p>
            <Link to="/Uiwork" className="slider-view-icon">
            <span className="d-block">View Project</span>
          </Link>
          </div>
        </div>
        </div>
          
      </section>
     
    </div>
  );
};

export default Slider;

   


