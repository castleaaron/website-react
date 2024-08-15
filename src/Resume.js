import React from 'react';
import Stars from './Stars';
import { Document, Page, pdfjs } from 'react-pdf';

// Correctly set the workerSrc property
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
  return (
    <div className="App-header">
      <Stars />
      <iframe className="iframe-container"
        src="https://docs.google.com/document/d/1ByHxAIMSPPekgAPhDqn5LCNXV3aFm0Ai/preview" 
      ></iframe>
    </div>
  );
};

export default Resume;