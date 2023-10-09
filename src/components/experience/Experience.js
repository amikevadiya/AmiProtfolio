import React, { useState } from 'react';
import experienceData from '../../data/Experience.json';
import SliderComponent from './Experience_card';

const Experience = () => {
  const [activeBox, setActiveBox] = useState(null);

  const handleBoxClick = (index) => {
    setActiveBox(index === activeBox ? null : index);
  };
  return (
   <div>    
    <section className='experience-section'>
        <div className='container'>
            <div className='row justify-content-between align-items-center'>
                <div className='col-lg-6 col-md-12'>
                    <h2> My Journey of Hard Work 💼</h2>
                    <p className='text-big pt-5'>5 years of experience in designing and building user-friendly websites as a skilled front-end developer and UI/UX Designer. HTML5, CSS3, JS, React, TypeScript, and CMS platforms such as Shopify and WordPress are all strengths. Strong knowledge of web design fundamentals as well as UX/UI design. In addition, I am now focusing on improving my React Native abilities in order to keep current with the newest trends and technologies.</p>
                    {/* <div className='experience-view'>
                        <span>Clike here for view </span>
                        <svg width="278" height="142" viewBox="0 0 278 142" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.84961 82.9922C2.18582 84.2184 2.53744 85.7971 3.23261 86.8646C8.96839 95.6718 17.91 103.429 25.2777 110.652C37.2763 122.416 47.8529 133.072 64.0847 138.008C90.5401 146.053 118.441 130.166 139.818 116.433C172.007 95.7551 201.969 70.2158 229.049 43.2724C238.349 34.02 247.309 24.4322 256.599 15.1697C259.893 11.8847 263.753 8.88572 266.722 5.32275" stroke="#F4EEE6" strokeWidth="3" strokeLinecap="round"/>
                            <path d="M238.343 11.2971C247.403 7.17912 257.814 4.11578 267.607 2.33529C270.14 1.87478 274.596 1.44215 275.822 4.57573C276.485 6.26889 274.513 9.26426 273.858 10.6333C272.104 14.3033 270.02 17.7777 267.828 21.1994C264.837 25.8699 259.662 31.3091 260.25 37.187" stroke="#F4EEE6" strokeWidth="3" strokeLinecap="round"/>
                        </svg>
                    </div> */}
                </div>
                <div className='col-lg-5 col-md-12 position-relative'>
               
                   <div className='experince-all-section'> <div className='svg-top'>
                    <svg width="467" height="355" viewBox="0 0 467 355" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.5 6V349.5H447.5L461 134.5V6H5.5Z" stroke="#F4EEE6" strokeWidth="11" strokeLinejoin="round"/>
                    </svg>
                    </div>
                    <div className='experice-box-section'>
                    {experienceData.map((experience, index) => (
                        <div className={`experiencebox ${index === activeBox ? 'myclass' : ''}`} onClick={() => handleBoxClick(index)}key={index}>

                            <div className='experience-header'>
                                <h3>{experience.year}</h3>
                                <span>{experience.date}</span>
                            </div>                       
                            <h4>{experience.position}</h4>
                            <span className='text-bold'>{experience.company}</span>
                            {/* <ul>
                                {experience.responsibilities.map((responsibility, i) => (
                                    <li key={i}>{responsibility}</li>
                                ))}
                            </ul> */}
                            <p>{experience.responsibilities}</p>
                        </div>
                        ))}
                    </div>
                    <div className="svg-bottom">                        
                    <svg width="542" height="353" viewBox="0 0 542 353" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M93 95L46.9535 102L13.4651 15.2055V345L93 95Z" fill="#10101A"/>
                        <path d="M8 2L45.5 99L93.5 93" stroke="#F4EEE6" strokeWidth="11" strokeLinejoin="round"/>
                        <path d="M536 93H93.4905L6 347H448.51L536 93Z" fill="#10101A" stroke="#F4EEE6" strokeWidth="11" strokeLinejoin="round"/>
                        <path d="M234.895 219.778L250.096 217.214C250.096 221.219 250.28 224.369 248.814 227.105C247.349 229.742 244.15 231.134 239.657 231.134L234.895 231.867V219.778ZM251.488 195.748C251.488 194.674 251.391 193.599 251.195 192.525C251.098 191.353 250.805 190.327 250.316 189.448C249.926 188.471 249.291 187.69 248.411 187.104C247.63 186.517 246.507 186.224 245.041 186.224C243.185 186.224 241.623 186.81 240.353 187.983C239.767 186.42 239.473 185.003 239.473 183.733C239.473 182.171 239.718 180.656 240.206 179.191C240.792 177.628 241.671 176.261 242.844 175.088C244.016 173.916 245.481 172.988 247.239 172.305C249.095 171.523 251.342 171.132 253.979 171.132C256.91 171.132 259.499 171.67 261.745 172.744C264.09 173.721 266.043 175.137 267.606 176.993C269.169 178.752 270.341 180.852 271.123 183.294C272.002 185.638 272.441 188.178 272.441 190.913V277.656C269.804 277.656 267.215 277.46 264.676 277.07C262.233 276.679 259.987 275.897 257.936 274.725C255.982 273.455 254.419 271.599 253.247 269.157C252.075 266.715 251.488 263.443 251.488 259.34V195.748Z" fill="#F4EEE6"/>
                        <path d="M231.771 277.655C229.213 277.655 226.754 277.522 224.394 277.256C222.033 276.991 219.918 276.512 218.049 275.821C216.279 275.13 214.803 274.174 213.623 272.952C212.541 271.729 212 270.135 212 268.168V229.344C212 227.537 212.689 226.023 214.066 224.8C215.443 223.525 217.164 222.541 219.23 221.851C221.295 221.107 223.557 220.575 226.016 220.256C228.574 219.937 230.984 219.778 233.246 219.778V277.655H231.771Z" fill="#F4EEE6"/>
                        <path d="M284.538 214.454C284.538 213.018 284.434 211.641 284.226 210.325C284.122 209.008 283.811 207.871 283.291 206.913C282.876 205.836 282.201 204.998 281.266 204.399C280.436 203.681 279.241 203.322 277.684 203.322C276.853 203.322 275.97 203.502 275.036 203.861C274.205 204.1 273.426 204.579 272.699 205.297C272.284 204.34 272.076 203.262 272.076 202.065C272.076 197.876 273.322 194.225 275.815 191.113C278.307 188 282.045 186.444 287.03 186.444C292.949 186.444 297.466 188.419 300.582 192.369C303.801 196.2 305.411 201.886 305.411 209.427V277.656H304.476C298.245 277.656 293.365 275.98 289.834 272.628C286.303 269.157 284.538 263.651 284.538 256.11V214.454Z" fill="#F4EEE6"/>
                        <path d="M305.41 174.868C305.41 171.547 306.582 168.763 308.927 166.517C311.271 164.172 314.055 163 317.279 163C320.502 163 323.237 164.172 325.484 166.517C327.828 168.763 329.001 171.547 329.001 174.868C329.001 178.19 327.828 180.974 325.484 183.22C323.237 185.467 320.502 186.59 317.279 186.59C314.055 186.59 311.271 185.467 308.927 183.22C306.582 180.974 305.41 178.19 305.41 174.868Z" fill="#F4EEE6"/>
                    </svg>
                    </div>
                    </div>
                </div>
               
            </div>
     {/* <SliderComponent/>  */}
     {activeBox !== null && (
        <SliderComponent
          experiences={experienceData}
          activeIndex={activeBox}
          handleClose={() => setActiveBox(null)}
        />
      )}  
        </div>
    </section>  
   </div>
  );
};

export default Experience;