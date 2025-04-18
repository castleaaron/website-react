import { CgCPlusPlus } from "react-icons/cg"
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
  DiUnitySmall,
} from "react-icons/di"
import { SiUnrealengine, SiCsharp, SiTypescript, SiBlender, SiWebgl } from "react-icons/si"
import { SiDotnet } from "react-icons/si"
import "./About.css"

const About = () => {
  return (
    <div className="App-header">
      <div className="About-header">
        <h1 className="About">About Me</h1>

        <div className="about-me">
          <h1>👋 Hi, I'm Aaron Castle!</h1>
          <p>
            <strong>Education:</strong> I'm currently pursuing a <strong>Master of Science in Computer Science</strong>{" "}
            at the University of Minnesota. I also completed my Bachelor's degree in Computer Science here, graduating
            with a stellar <strong>3.90 GPA</strong>!
          </p>
          <p>
            <strong>Experience:</strong> I've honed my skills as a <strong>Software Engineer Intern</strong> at Allianz
            Technology and as a <strong>Production Engineer Intern</strong> at Sentera. I also enjoy helping others as
            an <strong>Undergraduate Teaching Assistant</strong>.
          </p>
          <p>
            <strong>Skills:</strong> I'm skilled in Java, Python, C/C++, and JavaScript. I build responsive websites
            with React and Node.js, analyze data with Python, and create innovative solutions with OpenCV and other
            libraries.
          </p>
          <p>
            <strong>Projects:</strong> From developing a <strong>Gene Network Analysis Tool</strong> to creating a{" "}
            <strong>Personal Portfolio Website</strong>, I love tackling challenging problems and bringing ideas to
            life!
          </p>
          <p>
            <strong>Hobbies:</strong> When I'm not coding, you can find me cycling, fencing, or engaging with my
            fraternity and university clubs.
          </p>
        </div>

        <h1 className="Professional">Professional Skillset</h1>
        <div className="skill-icons">
          <DiJavascript1 data-text="JavaScript" />
          <DiReact data-text="React" />
          <DiNodejs data-text="Node.js" />
          <DiPython data-text="Python" />
          <DiJava data-text="Java" />
          <CgCPlusPlus data-text="C++" />
          <DiGit data-text="Git" />
          <DiMongodb data-text="MongoDB" />
          <SiDotnet data-text=".NET" />
          <DiLinux data-text="Linux" />
          <DiCss3 data-text="CSS" />
          <DiVisualstudio data-text="Visual Studio" />
          {/* <DiC data-text="C" /> */}
          <DiUnitySmall data-text="Unity" />
          {/* <SiCsharp data-text="C#" /> */}
          <SiUnrealengine data-text="Unreal Engine" />
          <SiTypescript data-text="TypeScript" />
          <SiBlender data-text="Blender" />
          <SiWebgl data-text="WebGL" />
        </div>

        {/* Uncomment when you have the GitHub calendar component ready */}
        {/* <h1 className="Professional">GitHub Contributions</h1>
        <div className="github-calendar-container">
          <GitHubCalendarComponent username="castleaaron" />
        </div> */}
      </div>
    </div>
  )
}

export default About

