import React, { useEffect, useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import fileArrowUp from "../assets/images/file-arrow-up-alt-svgrepo-com.svg"
import sparkle from "../assets/images/sparkles-svgrepo-com.svg"

const resumeUrl =
  "https://drive.google.com/drive/folders/101SJMjiATx8oTmW5nV47NSMvtylLj-m3?usp=sharing"

const navClassName = ({ isActive }: { isActive: boolean }) =>
  `a-button${isActive ? " active" : ""}`

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  return (
    <header className="site-header">
      <nav className="nav-bar" aria-label="Main navigation">
        <NavLink to="/" className="nav-brand" aria-label="Naisu home">
          <span className="brand-mark">
            <img src={sparkle} alt="" />
          </span>
          <span>NAISU</span>
        </NavLink>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="nav-menu"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <div
          id="nav-menu"
          className={`nav-menu${isMenuOpen ? " open" : ""}`}
        >
          <div className="nav-item">
            <NavLink to="/experience" className={navClassName}>
              Experience
            </NavLink>
            <NavLink to="/projects" className={navClassName}>
              Projects
            </NavLink>
          </div>
          <a
            className="resume-button"
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Resume</span>
            <img src={fileArrowUp} alt="" />
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
