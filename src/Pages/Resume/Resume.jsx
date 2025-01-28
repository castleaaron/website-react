import React from 'react';
import './Resume.css';
import ResumeImage from './resume.png'; // Import the image

const Resume = () => {
  return (
    <div className="resume-container">
      <img src={ResumeImage} alt="Aaron Castle Resume" className="resume-image" />
    </div>
  );
};

export default Resume;
