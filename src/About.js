import React from 'react';
import {Col, Row} from 'react-bootstrap';
import { CgCPlusPlus } from "react-icons/cg";
import { Grid } from '@material-ui/core';
import { AiOutlineDotNet } from "react-icons/ai";
import GitHubCalendarComponent from './GitHubCalendarComponent';
import Stars from './Stars';


import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiPython,
    DiGit,
    DiJava,
    DiCss3,
    DiVisualstudio,
    DiLinux,
  } from "react-icons/di";

const About = () => {


  return (
    <div className = "App-header">
    <div className = "About-header">
    <Stars />
        <h1 className = "About-h1">About</h1>
        <h1 className = "About-h1-me">Me</h1>
        <p className = "thought">I'm a Computer Science major at the University of Minnesota with a GPA of 3.88, specializing in software engineering and data analysis. My internships at Allianz Technology and Sentera have equipped me with practical experience in developing web APIs, creating automated tests, and tackling innovative projects like drone vibration analysis and color filter testing. Proficient in languages such as C#, Python, and C++, and experienced with tools like OpenCV and Docker, I thrive in both collaborative and independent environments. Outside of academics, I’m actively involved in campus life through various clubs and leadership roles. I’m eager to leverage my technical skills and experiences to contribute to impactful technology projects and further my professional growth.</p>        
        <h1 className="Professional">Professional Skillset</h1>
        <Grid className="Grids" container spacing={2}>
            <Grid item xs={2}>
            </Grid>
            <Grid item xs={2} className="skill-icons" data-text="Java Script">
                <DiJavascript1 />
            </Grid>
            <Grid item xs={1}>
            </Grid>
            <Grid item xs={2} className="skill-icons" data-text="React">
                <DiReact />
            </Grid>
            <Grid item xs={1}>
            </Grid>
            <Grid item xs={2} className="skill-icons" data-text="Python">
                <DiPython />
            </Grid>
            
            <Grid item xs={12}>
            </Grid>
            <Grid item xs={2}>
            </Grid>
            <Grid item xs={2} className="skill-icons" data-text="Git">
                <DiGit />
            </Grid>
            <Grid item xs={1}>
            </Grid>
            <Grid item xs={2} className="skill-icons" data-text="Java">
                <DiJava />
            </Grid>
            <Grid item xs={1}>
            </Grid>
            <Grid item xs={2} className="skill-icons" data-text="C++">
                <CgCPlusPlus />
            </Grid>
            <Grid item xs={12}>
            </Grid>
            <Grid item xs={2}>
            </Grid>
            <Grid item xs={2} className="skill-icons" data-text="MongoDB">
                <DiMongodb />
            </Grid>
            <Grid item xs={1}>
            </Grid>
            <Grid item xs={2} className="skill-icons" data-text=".NET">
                <AiOutlineDotNet />
            </Grid>
            <Grid item xs={1}>
            </Grid>
            <Grid item xs={2} className="skill-icons" data-text="Linux">
                <DiLinux />
            </Grid>
        </Grid>
        <h1 style={{ marginTop: '50px', marginBottom: '0px'}}>GitHub Contributions</h1>
        <GitHubCalendarComponent username="castleaaron" className = "GithubCalendar"/>
    </div>
    </div>
  );
};

export default About;