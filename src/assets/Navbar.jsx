"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import "./Navbar.css"

// Define fallback image URLs
const GITHUB_ICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
const LINKEDIN_ICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
const EMAIL_ICON = "https://img.icons8.com/ios-filled/50/ffffff/mail.png"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  // Handle route changes - only close menu when route changes
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  // Handle body scroll lock
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-open')
    } else {
      document.body.classList.remove('menu-open')
    }

    return () => {
      document.body.classList.remove('menu-open')
    }
  }, [menuOpen])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  const isActive = (path) => {
    return location.pathname === path ? "active" : ""
  }

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">Aaron Castle</Link>
        </div>

        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {menuOpen ? (
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ) : (
              <path
                d="M3 12H21M3 6H21M3 18H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
          </svg>
        </button>

        <div className={`navbar-content ${menuOpen ? "show" : ""}`}>
          <ul className="pages">
            <li>
              <Link to="/" className={isActive("/")} onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={isActive("/about")} onClick={closeMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="/resume" className={isActive("/resume")} onClick={closeMenu}>
                Resume
              </Link>
            </li>
            <li>
              <Link to="/projects" className={isActive("/projects")} onClick={closeMenu}>
                Projects
              </Link>
            </li>
          </ul>

          <ul className="icons">
            <li>
              <a
                href="https://github.com/castleaaron"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github Profile"
                className="social-icon"
              >
                <img src={GITHUB_ICON || "/placeholder.svg"} alt="Github" className="icon" />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/aaron-castle-850175269"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="social-icon"
              >
                <img src={LINKEDIN_ICON || "/placeholder.svg"} alt="LinkedIn" className="icon" />
              </a>
            </li>
            <li>
              <a
                href="mailto:castleaaron@icloud.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
                className="social-icon"
              >
                <img src={EMAIL_ICON || "/placeholder.svg"} alt="Email" className="icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar