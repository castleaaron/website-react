import React from 'react';
import { CgCPlusPlus } from "react-icons/cg";
import { AiOutlineDotNet } from "react-icons/ai";
// import GitHubCalendarComponent from '../../assets/GitHubCalendarComponent';
import './About.css';
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
    <div className="App-header">
      <div className="About-header">
        <h1 className="About">About Me</h1>
        <div class="about-me">
            <h1>👋 Hi, I'm Aaron Castle!</h1>
            <p>🎓 <strong>Education:</strong> I'm currently pursuing a <strong>Master of Science in Computer Science</strong> at the University of Minnesota. I also completed my Bachelor's degree in Computer Science here, graduating with a stellar <strong>3.90 GPA</strong>!</p>
            <p>💻 <strong>Experience:</strong> I've honed my skills as a <strong>Software Engineer Intern</strong> at Allianz Technology and as a <strong>Production Engineer Intern</strong> at Sentera. I also enjoy helping others as an <strong>Undergraduate Teaching Assistant</strong>.</p>
            <p>🔧 <strong>Skills:</strong> I'm skilled in Java, Python, C/C++, and JavaScript. I build responsive websites with React and Node.js, analyze data with Python, and create innovative solutions with OpenCV and other libraries.</p>
            <p>🌟 <strong>Projects:</strong> From developing a <strong>Gene Network Analysis Tool</strong> to creating a <strong>Personal Portfolio Website</strong>, I love tackling challenging problems and bringing ideas to life!</p>
            <p>🌍 <strong>Hobbies:</strong> When I'm not coding, you can find me cycling, fencing, or engaging with my fraternity and university clubs.</p>
        </div>
      
        <h1 className="Professional">Professional Skillset</h1>

        <div className="skill-icons">
          <DiJavascript1 data-text="JavaScript" />
          <DiReact data-text="React" />
          <DiPython data-text="Python" />
          <DiGit data-text="Git" />
          <DiJava data-text="Java" />
          <CgCPlusPlus data-text="C++" />
          <DiMongodb data-text="MongoDB" />
          <AiOutlineDotNet data-text=".NET" />
          <DiLinux data-text="Linux" />
          <DiNodejs data-text="Node.js" />
          <DiCss3 data-text="CSS" />
          <DiVisualstudio data-text="Visual Studio" />
        </div>

        {/* <h1 style={{ marginTop: '50px', marginBottom: '0px' }}>GitHub Contributions</h1> */}
        {/* <GitHubCalendarComponent username="castleaaron" className="GithubCalendar" /> */}
        {/* <GitHubCalendar username="castleaaron"/> */}
      </div>
    </div>
  );
};

export default About;
