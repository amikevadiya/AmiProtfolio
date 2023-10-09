import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';

import logo from '../image/logo.svg';

function Nav() {
  return (
    <div>
      <section className="nav-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-3">
              <div className="logo">
              <Link to="/" className='logo-div'> 
                <svg width="70" height="68" viewBox="0 0 70 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.5781 33.6741L22.5941 32.1533C22.5941 34.5285 22.7027 36.3969 21.8337 38.0191C20.9647 39.5833 19.0674 40.4089 16.4024 40.4089L13.5781 40.8434V33.6741ZM23.4197 19.4224C23.4197 18.7851 23.3617 18.1478 23.2459 17.5105C23.1879 16.8153 23.0141 16.207 22.7245 15.6856C22.4927 15.1063 22.1162 14.6428 21.5948 14.2952C21.1313 13.9476 20.465 13.7738 19.596 13.7738C18.4953 13.7738 17.5684 14.1214 16.8152 14.8166C16.4676 13.8897 16.2938 13.0496 16.2938 12.2965C16.2938 11.3695 16.4386 10.4716 16.7283 9.60255C17.0759 8.6756 17.5973 7.86453 18.2925 7.16933C18.9877 6.47412 19.8567 5.92375 20.8995 5.51821C22.0003 5.05474 23.3328 4.823 24.897 4.823C26.635 4.823 28.1703 5.14164 29.5027 5.77891C30.8932 6.35825 32.0518 7.19829 32.9788 8.29904C33.9058 9.34185 34.601 10.5874 35.0644 12.0358C35.5858 13.4262 35.8465 14.9325 35.8465 16.5546V68C34.2823 68 32.747 67.8842 31.2408 67.6523C29.7923 67.4205 28.4599 66.9571 27.2433 66.2619C26.0847 65.5087 25.1577 64.4081 24.4625 62.9597C23.7673 61.5113 23.4197 59.5706 23.4197 57.1373V19.4224Z" fill="#F4EEE6"/>
                  <path d="M11.7256 67.9999C10.2089 67.9999 8.75044 67.9211 7.35037 67.7635C5.9503 67.606 4.69608 67.3223 3.58768 66.9125C2.53763 66.5027 1.66258 65.9353 0.962548 65.2104C0.32085 64.4854 0 63.5398 0 62.3735V39.3478C0 38.2761 0.408354 37.3777 1.22506 36.6528C2.04177 35.8963 3.06265 35.3131 4.28771 34.9034C5.51278 34.4621 6.8545 34.1469 8.31292 33.9578C9.82965 33.7686 11.2589 33.6741 12.6006 33.6741V67.9999H11.7256Z" fill="#F4EEE6"/>
                  <path d="M43.0205 30.5164C43.0205 29.6645 42.9589 28.8481 42.8358 28.0672C42.7741 27.2863 42.5893 26.6118 42.2815 26.0439C42.035 25.405 41.6348 24.908 41.0805 24.5531C40.5878 24.1271 39.8795 23.9142 38.9557 23.9142C38.463 23.9142 37.9395 24.0206 37.3852 24.2336C36.8925 24.3756 36.4306 24.6596 35.9994 25.0855C35.753 24.5176 35.6299 23.8787 35.6299 23.1687C35.6299 20.684 36.3689 18.5188 37.8471 16.673C39.3252 14.8272 41.5424 13.9043 44.4987 13.9043C48.0092 13.9043 50.6883 15.0757 52.536 17.4184C54.4453 19.6901 55.3998 23.0623 55.3998 27.5347V68.0001H54.8455C51.1502 68.0001 48.2556 67.0063 46.1615 65.0185C44.0675 62.9598 43.0205 59.6941 43.0205 55.2216V30.5164Z" fill="#F4EEE6"/>
                  <path d="M55.3994 7.03898C55.3994 5.06921 56.0946 3.4181 57.485 2.08562C58.8754 0.695208 60.5266 0 62.4384 0C64.3502 0 65.9724 0.695208 67.3048 2.08562C68.6953 3.4181 69.3905 5.06921 69.3905 7.03898C69.3905 9.00874 68.6953 10.6599 67.3048 11.9923C65.9724 13.3248 64.3502 13.991 62.4384 13.991C60.5266 13.991 58.8754 13.3248 57.485 11.9923C56.0946 10.6599 55.3994 9.00874 55.3994 7.03898Z" fill="#F4EEE6"/>
                </svg>
                <h5>Ami Kevadiya</h5>
                </Link>
              </div>
            </div>
            <div className="col-6 ">
              <div className="nav">
                <ul className="navbar">
                  <li>
                    <ScrollLink to="about-section" smooth={true} duration={500}>
                      About
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink to="works-section" smooth={true} duration={500}>
                      Works
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink to="skills-section" smooth={true} duration={500}>
                      Skill
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink to="contact-section" smooth={true} duration={500}>
                      Contact us
                    </ScrollLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-3'>
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
          </div>
        </div>
      </section>
    </div>
  );
}

export default Nav;
