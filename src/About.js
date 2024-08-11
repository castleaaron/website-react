import React from 'react';
import {Col, Row} from 'react-bootstrap';
import { CgCPlusPlus } from "react-icons/cg";
import { Grid } from '@material-ui/core';

import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiPython,
    DiGit,
    DiJava,
  } from "react-icons/di";

const About = () => {
  return (
    <div className = "About-header">
        <h1>About Me</h1>
        <p>Hi! I am Aaron Castle, a software engineer with a passion for learning and problem solving. I am a recent graduate from the University of California, Irvine with a Bachelor's degree in Computer Science. I have experience in full stack development, data structures and algorithms, and software engineering. I am currently seeking a full-time software engineering position to further develop my skills and contribute to a team.</p>
        <h1>Professional Skillset</h1>
        <Grid container spacing={2}>
            <Grid item xs={2}>
            </Grid>
            <Grid item xs={2} className="skill-icons">
                <DiJavascript1 />
            </Grid>
            <Grid item xs={1}>
            </Grid>
            <Grid item xs={2} className="skill-icons">
                <DiReact />
            </Grid>
            <Grid item xs={1}>
            </Grid>
            <Grid item xs={2} className="skill-icons">
                <DiPython />
            </Grid>
            
            <Grid item xs={12}>
            </Grid>
            <Grid item xs={2}>
            </Grid>
            <Grid item xs={2} className="skill-icons">
                <DiGit />
            </Grid>
            <Grid item xs={1}>
            </Grid>
            <Grid item xs={2} className="skill-icons">
                <DiJava />
            </Grid>
            <Grid item xs={1}>
            </Grid>
            <Grid item xs={2} className="skill-icons">
                <CgCPlusPlus />
            </Grid>
        </Grid>
      {/* <Row style={{ justifyContent: "center", paddingBottom: "50px"}}>  
        <Col xs={4} md={2}className="tech-icons">
            <CgCPlusPlus />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiJavascript1 />
        </Col>
        <Col xs={4} md={2}className="tech-icons">
            <DiNodejs />
        </Col>
        <Col xs={4} md={2}className="tech-icons">
            <DiReact />
        </Col>
        <Col xs={4} md={2}className="tech-icons">
            <DiGit />
        </Col>
        <Col xs={4} md={2}className="tech-icons">
            <DiPython />
        </Col>
        <Col xs={4} md={2}className="tech-icons">
            <DiJava />
        </Col>
      </Row> */}
    </div>
  );
};

export default About;