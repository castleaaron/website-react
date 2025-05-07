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
import { useRef, useEffect } from "react"
import "./About.css"

const SkillIcon = ({ icon: Icon, name }) => {
  const wrapperRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!wrapperRef.current) return;
    
    const wrapper = wrapperRef.current;
    const rect = wrapper.getBoundingClientRect();
    
    // Calculate mouse position relative to the center of the element
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate the rotation based on mouse position
    // Limit rotation to a reasonable range (e.g., -10° to 10°)
    const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * 10;
    const rotateX = -((e.clientY - centerY) / (rect.height / 2)) * 10;
    
    wrapper.style.setProperty('--rotateX', `${rotateX}deg`);
    wrapper.style.setProperty('--rotateY', `${rotateY}deg`);
  };

  const handleMouseLeave = () => {
    if (!wrapperRef.current) return;
    const wrapper = wrapperRef.current;
    
    // Reset rotation when mouse leaves
    wrapper.style.setProperty('--rotateX', '0deg');
    wrapper.style.setProperty('--rotateY', '0deg');
  };

  return (
    <div 
      className="icon-wrapper" 
      ref={wrapperRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Icon />
      <span className="icon-name">{name}</span>
    </div>
  );
};

const About = () => {
  return (
    <div className="App-header">
      <div className="About-header">
        <h1 className="About">About Me</h1>
        
        {/* <div className="about-me">
          <h1>👋 Hi, I'm Aaron Castle!</h1>
        </div> */}
        <h1 className="about-me-header">🎓 Education: </h1>
        <div className="about-me">
          <p>
            I'm currently pursuing a <strong>Master of Science in Computer Science</strong>{" "}
            at the University of Minnesota. I also completed my Bachelor's degree in Computer Science here, graduating
            with a stellar <strong>3.90 GPA</strong>!
          </p>
        </div>
        <h1 className="about-me-header">⚙️ Experience:</h1>
        <div className="about-me">
            <p>
              I've honed my skills as a <strong>Software Engineer Intern</strong> at Allianz
              Technology and as a <strong>Production Engineer Intern</strong> at Sentera. I also enjoy helping others as
              an <strong>Undergraduate Teaching Assistant</strong>.
            </p>
          </div>
          <h1 className="about-me-header">👨‍💻 Skills:</h1>
          <div className="about-me">
            <p>
              I'm skilled in Java, Python, C/C++, and JavaScript. I build responsive websites
              with React and Node.js, analyze data with Python, and create innovative solutions with OpenCV and other
              libraries.
            </p>
          </div>
          <h1 className="about-me-header">🏃‍➡️ Hobbies: </h1>
          <div className="about-me">
            <p>
              <strong>Hobbies:</strong> When I'm not coding, you can find me cycling, fencing, or engaging with my
              fraternity and university clubs.
            </p>
          </div>
        
        <h1 className="Professional">Professional Skillset</h1>
        <div className="skill-icons">
          <SkillIcon icon={DiJavascript1} name="JavaScript" />
          <SkillIcon icon={DiReact} name="React" />
          <SkillIcon icon={DiNodejs} name="Node.js" />
          <SkillIcon icon={DiPython} name="Python" />
          <SkillIcon icon={DiJava} name="Java" />
          <SkillIcon icon={CgCPlusPlus} name="C++" />
          <SkillIcon icon={DiGit} name="Git" />
          <SkillIcon icon={DiMongodb} name="MongoDB" />
          <SkillIcon icon={SiDotnet} name=".NET" />
          <SkillIcon icon={DiLinux} name="Linux" />
          <SkillIcon icon={DiCss3} name="CSS" />
          <SkillIcon icon={DiVisualstudio} name="Visual Studio" />
          <SkillIcon icon={DiUnitySmall} name="Unity" />
          <SkillIcon icon={SiUnrealengine} name="Unreal Engine" />
          <SkillIcon icon={SiTypescript} name="TypeScript" />
          <SkillIcon icon={SiBlender} name="Blender" />
          <SkillIcon icon={SiWebgl} name="WebGL" />
        </div>
      </div>
    </div>
  )
}

export default About