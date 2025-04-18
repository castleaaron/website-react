"use client"
import "./Resume.css"
import { Download } from "lucide-react"
import ResumeImage from "./resume.png" // Import the resume image

const Resume = () => {
  // Function to handle resume download
  const handleDownload = () => {
    // Create a link to download the resume
    const link = document.createElement("a")
    link.href = ResumeImage
    link.download = "Aaron_Castle_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="resume-page">
      <div className="resume-header">
        <h1>My Resume</h1>
        <p>View my qualifications and experience</p>
        <button className="download-button" onClick={handleDownload}>
          <Download size={18} />
          <span>Download PDF</span>
        </button>
      </div>

      <div className="resume-container">
        <div className="resume-card">
          <img src={ResumeImage || "/placeholder.svg"} alt="Aaron Castle Resume" className="resume-image" />
        </div>
      </div>

      <div className="resume-footer">
        <p>Last updated: March 2024</p>
        <p>
          Feel free to <a href="mailto:castleaaron@icloud.com">contact me</a> for more information
        </p>
      </div>
    </div>
  )
}

export default Resume

