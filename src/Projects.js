import React from 'react';
import Stars from './Stars';
import { DiJavascript1 } from 'react-icons/di';
import { Grid } from '@material-ui/core';
import './App.css'; // Import the CSS file

const Projects = () => {
  return (
    <div className="App-header">
      <Stars />
      <Grid container spacing={2}>
      <Grid item xs={12}></Grid>
      <Grid item xs={12}></Grid>
      <Grid item xs={12}></Grid>
      <Grid item xs={12}></Grid>
      <Grid item xs={12}></Grid>
      <Grid item xs={12}></Grid>
      <Grid item xs={12}></Grid>
      <Grid item xs={12}></Grid>



        <Grid item xs={1}></Grid>
        <Grid item xs={4} className="project-icons">
          <div className="project-container">
            <img src={require('./images/fft.png')} className="project-png" alt="logo" />
            <div className="project-caption">
            <div className="project-caption-title">Drone Vibration Analysis</div>
            <div className="project-caption-description">Utilized Python, Matplotlib, Pandas, and NumPy, to develop a sophisticated application. This application interfaces with ulog files extracted from drone systems, effectively detecting the presence of vibration anomalies through analysis of accelerometer data. The resultant program generates visual representations, particularly Fast Fourier Transformation (FFT) graphs, which portray the spectral distribution of vibration frequencies and amplitudes. This allows end-users to pinpoint problematic axes and isolate specific components responsible for the identified vibrational problems.</div>
          </div>
          </div>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={4} className="project-icons">
          <div className="project-container">
            <img src={require('./images/color-detection.webp')} className="project-png" alt="logo" />
            <div className="project-caption">
            <div className="project-caption-title">Color Filter Test</div>
            <div className="project-caption-description">Employing Python, OpenCV and NumPy, I engineered an innovative application aimed to look at photographs taken from a camera source. The fundamental objective of this application centers around the validation of the precise alignment of the six distinct color filters. This is accomplished through a systematic process wherein an RGB image is dissected into its individual color channels, subsequently doing a comparative analysis with pre-defined filtered counterparts. The evaluation effectively shows the accuracy of color placement within the image composition.</div>
          </div>
          </div>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}></Grid>

        
        <Grid item xs={4}></Grid>
        <Grid item xs={4} className="project-icons">
          <div className="project-container">
            <a href="https://castleaaron.github.io/index.html" target="_blank" rel="noopener noreferrer"> <img src={require('./images/bokeh-plot.png')} className="project-png" alt="logo" /></a>
            <div className="project-caption">
            <div className="project-caption-title">Gene network analysis of age associated diseases</div>
            <div className="project-caption-description">This project leverages Python and Bokeh to create an interactive tool for analyzing gene expression data related to aging and disease. Users can input their own gene-set expression data into the system. The core of the project involves constructing gene networks to identify interactions and relationships between genes, particularly those associated with senescent cells. A neural network is then employed to classify and predict diseases based on these interactions. The Bokeh library is used to provide dynamic visualizations, allowing users to explore gene networks and view disease predictions in an intuitive, interactive format.</div>
          </div>
          </div>
        </Grid>
        <Grid item xs={12}></Grid>
      <Grid item xs={12}></Grid>
      <Grid item xs={12}></Grid>
      <Grid item xs={12}></Grid>

      </Grid>
    </div>
  );
};

export default Projects;