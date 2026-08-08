import React, { useEffect } from "react"
import { NavLink } from "react-router-dom"

function MainSection() {
  useEffect(() => {
    document.documentElement.classList.add("home-route")

    return () => {
      document.documentElement.classList.remove("home-route")
    }
  }, [])

  return (
    <main className="container-1">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">SOFTWARE DEVELOPER · PORTFOLIO</p>
          <h1 id="hero-title">I build software that stays understandable.</h1>
          <p className="hero-introduction">
            I'm Naisu, a full-time software developer and university student.
            I work across frontend and backend systems, with a focus on clear
            collaboration, maintainable code, and reliable delivery.
          </p>
          <div className="hero-actions">
            <NavLink to="/experience" className="primary-action">
              View my experience <span aria-hidden="true">→</span>
            </NavLink>
            <a
              className="secondary-action"
              href="https://github.com/whoisnaisu"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="hero-links" aria-label="Contact links">
            <a href="mailto:napas14204@gmail.com">Email</a>
            <a
              href="https://www.linkedin.com/in/napas-k/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <aside className="hero-profile" aria-label="Professional profile">
          <div className="profile-orbit" aria-hidden="true">
            <span className="orbit-core">N</span>
            <span className="orbit-dot orbit-dot-one" />
            <span className="orbit-dot orbit-dot-two" />
          </div>
          <dl className="profile-details">
            <div>
              <dt>Currently</dt>
              <dd>Software Developer</dd>
            </div>
            <div>
              <dt>Working across</dt>
              <dd>Frontend · Backend · FinTech</dd>
            </div>
            <div>
              <dt>Core tools</dt>
              <dd>TypeScript · React · C# · SQL</dd>
            </div>
          </dl>
        </aside>
      </section>
    </main>
  )
}

export default MainSection
