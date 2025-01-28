import React from 'react';
import '../../App.css'; // Import the updated CSS file
import bokeh from '../../images/bokeh-plot.png'; // Import the image
import colordetection from '../../images/color-detection.webp'; // Import the image
import fft from '../../images/fft.png'; // Import the image
import website from '../../images/website.png'; // Import the image
import './Projects.css'; // Import the CSS file

const Projects = () => {
  return (
    <div className="Project-Icons">
      {/* Project Card */}
      <div className="Project-Icon">
        <h3 className="proj-title">Gene network analysis of age associated diseases</h3>
        <img src={bokeh} alt="Bokeh Plot" className="proj-img" />
        <p>This project leverages Python and Bokeh to create an interactive tool for analyzing gene expression data related to aging and disease. Users can input their own gene-set expression data into the system. The core of the project involves constructing gene networks to identify interactions and relationships between genes, particularly those associated with senescent cells. A neural network is then employed to classify and predict diseases based on these interactions. The Bokeh library is used to provide dynamic visualizations, allowing users to explore gene networks and view disease predictions in an intuitive, interactive format.</p>
      </div>

      {/* Additional Project Example */}
      <div className="Project-Icon">
        <h3 className="proj-title">Color Filter Test</h3>
        <img src={colordetection} alt="Color-filter" className="proj-img" />
        <p className="proj-title">Employing Python, OpenCV and NumPy, I engineered an innovative application aimed to look at photographs taken from a camera source. The fundamental objective of this application centers around the validation of the precise alignment of the six distinct color filters. This is accomplished through a systematic process wherein an RGB image is dissected into its individual color channels, subsequently doing a comparative analysis with pre-defined filtered counterparts. The evaluation effectively shows the accuracy of color placement within the image composition</p>
      </div>

      <div className="Project-Icon">
        <h3 className="proj-title">Personal Portfolio Website</h3>
        <img src={fft} alt="fft" className="proj-img" />
        <p>Utilized Python, Matplotlib, Pandas, and NumPy, to develop a sophisticated application. This application interfaces with ulog files extracted from drone systems, effectively detecting the presence of vibration anomalies through analysis of accelerometer data. The resultant program generates visual representations, particularly Fast Fourier Transformation (FFT) graphs, which portray the spectral distribution of vibration frequencies and amplitudes. This allows end-users to pinpoint problematic axes and isolate specific components responsible for the identified vibrational problems.</p>
      </div>

      <div className="Project-Icon">
        <h3 className="proj-title">Personal Portfolio Website</h3>
        <img src={website} alt="website" className="proj-img" />
        <p>This project involved creating a personal portfolio website to showcase my skills, projects, and experience. The website was built using React, a JavaScript library for building user interfaces. I utilized various components and libraries to create a responsive and visually appealing design. The website features sections for my bio, education, experience, skills, projects, and hobbies. It also includes links to my resume, LinkedIn profile, and GitHub repositories. The website is hosted on GitHub Pages, making it easily accessible to potential employers and collaborators.</p>
      </div>
      <div className="Project-Icon">
        <h3 className="proj-title">ElevateVR</h3>
        <iframe className="proj-img" src="https://www.youtube.com/embed/3zYH7Qymuz8?si=mJfX5gN2taRKhwqW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <p>ElevateVR is an immersive drone simulation platform designed to enhance both entertainment and educational experiences for users interested in FPV (First-Person View) drone racing. The project provides a virtual environment where users can interact with a customizable drone, adjusting its settings to emulate real-life drones. Additionally, the platform aims to bridge the gap between hobbyist drone pilots and aspiring professionals by offering realistic flight simulations. With multiplayer capabilities, ElevateVR allows users to race in real-time against others, track performance, and improve their piloting skills. The system’s underlying goal is to create an engaging, educational, and accessible platform for drone enthusiasts of all skill levels.</p>
      </div>
    </div>
  );
};

export default Projects;
