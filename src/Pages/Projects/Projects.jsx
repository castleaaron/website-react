import "../../App.css"
import bokeh from "../../images/bokeh-plot.png"
import colordetection from "../../images/color-detection.webp"
import fft from "../../images/fft.png"
import blender from "../../images/blender.png"
import website from "../../images/website.png"
import "./Projects.css"
import { ExternalLink, Github } from "lucide-react"

const Projects = () => {
  const projects = [
    {
      title: "Gene Network Analysis of Age Associated Diseases",
      image: bokeh,
      description:
        "This project leverages Python and Bokeh to create an interactive tool for analyzing gene expression data related to aging and disease. Users can input their own gene-set expression data into the system. The core of the project involves constructing gene networks to identify interactions and relationships between genes, particularly those associated with senescent cells.",
      tags: ["Python", "Bokeh", "Data Analysis", "Neural Networks"],
      links: {
        github: "https://github.com/castleaaron/castleaaron.github.io/blob/main/5461_Final_Paper.pdf",
        demo: "https://castleaaron.github.io/",
      },
    },
    {
      title: "Color Filter Test",
      image: colordetection,
      description:
        "Employing Python, OpenCV and NumPy, I engineered an innovative application aimed to look at photographs taken from a camera source. The fundamental objective of this application centers around the validation of the precise alignment of the six distinct color filters.",
      tags: ["Python", "OpenCV", "NumPy", "Image Processing"],
      links: {
        github: "https://github.com/castleaaron",
        demo: "#",
      },
    },
    {
      title: "Drone Vibration Analysis",
      image: fft,
      description:
        "Utilized Python, Matplotlib, Pandas, and NumPy, to develop a sophisticated application. This application interfaces with ulog files extracted from drone systems, effectively detecting the presence of vibration anomalies through analysis of accelerometer data.",
      tags: ["Python", "Matplotlib", "Pandas", "NumPy", "FFT Analysis"],
      links: {
        github: "https://github.com/castleaaron",
        demo: "#",
      },
    },
    {
      title: "Personal Portfolio Website",
      image: website,
      description:
        "This project involved creating a personal portfolio website to showcase my skills, projects, and experience. The website was built using React, a JavaScript library for building user interfaces. I utilized various components and libraries to create a responsive and visually appealing design.",
      tags: ["React", "JavaScript", "CSS", "Responsive Design"],
      links: {
        github: "https://github.com/castleaaron",
        demo: "#",
      },
    },
    {
      title: "ElevateVR",
      video: "https://www.youtube.com/embed/3zYH7Qymuz8?si=mJfX5gN2taRKhwqW",
      description:
        "ElevateVR is an immersive drone simulation platform designed to enhance both entertainment and educational experiences for users interested in FPV (First-Person View) drone racing. The project provides a virtual environment where users can interact with a customizable drone, adjusting its settings to emulate real-life drones.",
      tags: ["Unity", "C#", "VR Development", "3D Modeling"],
      links: {
        github: "https://github.com/castleaaron",
        demo: "https://www.youtube.com/watch?v=3zYH7Qymuz8&embeds_referring_euri=http%3A%2F%2Flocalhost%3A3000%2F&source_ve_path=MjM4NTE",
      },
    },
    {
      title: "Blender FIles",
      image: blender,
      description:
        "A collection of Blender files showcasing various 3D models and animations created using Blender, a powerful open-source 3D creation suite. These files demonstrate my skills in 3D modeling, texturing, and animation.",
      tags: ["Blender", "3D Modeling", "Animation", "Open Source"],
      links: {
        github: "https://github.com/castleaaron/BlenderFiles",
        demo: "#",
      }
    }
  ]

  return (
    <div className="projects-page">
      <div className="projects-header">
        <h1>My Projects</h1>
        <p>A collection of my recent work and personal projects</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-media">
              {project.video ? (
                <iframe
                  src={project.video}
                  title={project.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              ) : (
                <img src={project.image || "/placeholder.svg"} alt={project.title} />
              )}
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag, tagIndex) => (
                  <span className="tag" key={tagIndex}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  <Github size={18} />
                  <span>Code</span>
                </a>
                <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                  <ExternalLink size={18} />
                  <span>Demo</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects

