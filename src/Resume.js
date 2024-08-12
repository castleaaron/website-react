import React from 'react';
import Stars from './Stars';
import { Document, Page, pdfjs } from 'react-pdf';

// Correctly set the workerSrc property
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
  return (
    <div className="App-header">
      <Stars />
      <img src={require('./images/resume.png')} className="resume-png" alt="logo" />
    </div>
  );
};

export default Resume;