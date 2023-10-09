import React, { useState, useEffect } from 'react';
import work from '../../data/works.json';
import { Link } from 'react-router-dom';
import Modal from '../portfolio/Modal';

const Portfolio = () => {
  const [selectedWork, setSelectedWork] = useState(null);

  // Function to open the modal
  const openModal = (workItem) => {
    setSelectedWork(workItem);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedWork(null);
  };

  // Add a class to the body element when the modal is open
  useEffect(() => {
    if (selectedWork) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [selectedWork]);

  return (
    <div>
      <div className='protfolio-page'>
        <div className='container'>
          <div className='protfolio-page-container'>
            <Link to="/">
              {/* Your SVG and heading */}
            </Link>
            <h2>Portfolio</h2>
          </div>
        </div>
      </div>
    
      <section className='protfolio-section'>
        <div className='container'>
          <div className="row">
            {work.map((workItem, index) => (
              <div className='col-lg-4 col-md-6 col-12' key={index}>
                {workItem.category === 'Figma' || workItem.category === 'Logo' ? (
                  // Open modal for 'Figma' or 'Logo' category
                  <div className="work-section-box" onClick={() => openModal(workItem)}>
                    <span className="work-count font-Londrina">{(index + 1).toString().padStart(2, '0')}</span>
                    <h4 className="work-name">{workItem.title}</h4>
                    <div className="work-name-img">
                      <div className="work-img">
                        <img src={`${process.env.PUBLIC_URL}/${workItem.imageSrc}`} alt={workItem.altText} />
                      </div>
                      <span className="work-lang">{workItem.category}</span>
                    </div>
                  </div>
                ) : (
                  // Open link for other categories
                  <a href={workItem.link} target='_blank' className="work-section-box">
                    <span className="work-count font-Londrina">{(index + 1).toString().padStart(2, '0')}</span>
                    <h4 className="work-name">{workItem.title}</h4>
                    <div className="work-name-img">
                      <div className="work-img">
                        <img src={`${process.env.PUBLIC_URL}/${workItem.imageSrc}`} alt={workItem.altText} />
                      </div>
                      <span className="work-lang">{workItem.category}</span>
                    </div>
                  </a>
                )}
              </div>
            ))}
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

export default Portfolio;
