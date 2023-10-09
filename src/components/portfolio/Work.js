import React, { useState, useEffect } from 'react';
import workData from '../../data/works.json';
import { Link } from 'react-router-dom';
import Modal from './Modal';

const Work = () => {
  const firstFourWorks = workData.slice(0, 4); // Get the first four items from the workData array
  const [selectedWork, setSelectedWork] = useState(null);

  // Function to open the modal
  const openModal = (workItem) => {
    // Check if the category is "Figma" or "Logo" before opening the modal
    if (workItem.category === 'Figma' || workItem.category === 'Logo') {
      setSelectedWork(workItem);
    } else {
      window.open(workItem.link, '_blank'); // Open link in a new tab
    }
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedWork(null);
  };

  // Add a class to the body element when the modal is open
  useEffect(() => {
    if (selectedWork) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [selectedWork]);

  return (
    <div>
      <section className="work-section" id='works-section'>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="work-heading">
                <h2>Showcasing my Dedication and Talent 🏆</h2>
                <p className="text-big">Discover the essence of creativity. Explore a selection of my remarkable projects.</p>
              </div>
              {firstFourWorks.slice(0, 2).map((work, index) => (
                <div className="work-section-box" key={index} onClick={() => openModal(work)}>
                  <span className="work-count font-Londrina">{(index + 1).toString().padStart(2, '0')}</span>
                  <h4 className="work-name">{work.title}</h4>
                  <div className="work-name-img">
                    <span className="work-lang">{work.category}</span>
                    <div className="work-img">
                      <img src={`${process.env.PUBLIC_URL}/${work.imageSrc}`} alt={work.altText} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="col-lg-6 col-md-12 work-box-right">
              {firstFourWorks.slice(2).map((work, index) => (
                <div className="work-section-box" key={index} onClick={() => openModal(work)}>
                  <span className="work-count font-Londrina">{(index + 3).toString().padStart(2, '0')}</span>
                  <h4 className="work-name">{work.title}</h4>
                  <div className="work-name-img">
                    <span className="work-lang">{work.category}</span>
                    <div className="work-img">
                      <img src={`${process.env.PUBLIC_URL}/${work.imageSrc}`} alt={work.altText} />
                    </div>
                  </div>
                </div>
              ))}
              <Link to="/portfolio" className="work-view-icon">
                <div className="view-icon">
                  <i className="fa-solid fa-arrow-up"></i>
                </div>
                <span className="d-block">View all work</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Render the modal if a work item is selected */}
      {selectedWork && (
        <Modal work={selectedWork} closeModal={closeModal} />
      )}
    </div>
  );
};

export default Work;
