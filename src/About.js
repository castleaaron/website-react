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
        <p className = "Description-about">Hi! I am Aaron Castle, a software engineer with a passion for learning and problem solving. I am a recent graduate from the University of California, Irvine with a Bachelor's degree in Computer Science. I have experience in full stack development, data structures and algorithms, and software engineering. I am currently seeking a full-time software engineering position to further develop my skills and contribute to a team.</p>
        <img src={require('./images/person-working.png')} className="person-working" alt="logo" />
        <h1>Professional Skillset</h1>
        <Grid container spacing={2}>
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
        <h1 style={{ marginTop: '100px', marginBottom: '0px'}}>GitHub Contributions</h1>
        <GitHubCalendarComponent username="castleaaron" className = "GithubCalendar"/>
    </div>
    </div>
  );
};

export default About;