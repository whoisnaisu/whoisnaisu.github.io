import React from "react"
import html from "../assets/images/html-1.svg"
import css from "../assets/images/css-3.svg"
import javascript from "../assets/images/logo-javascript.svg"
import git from "../assets/images/git-icon.svg"
import mongodb from "../assets/images/mongodb-icon-1.svg"
import postgresql from "../assets/images/postgresql.svg"
import typescript from "../assets/images/Typescript_logo_2020.svg"
import react from "../assets/images/React-icon.svg"
import vue from "../assets/images/Vue.js_Logo_2.svg"

function FooterSection() {
  const summary = `Developer with one year of hands-on experience and strong organizational skills. Dedicated to grow as a skillful developer, ready to support the team in reaching company goals, and improve
  code maintainability. Always open to learn new skills and frameworks.`

  return (
    <div className="container-3">
      <div id="stack-info" className="title">
        TECH STACKS
      </div>
      <div className="stacks-section">
        <div className="stack-box">
          <img src={html} className="icon" alt="html" />
          <img src={css} className="icon" alt="css" />
          <img src={javascript} className="icon" alt="javascript" />
          <img src={typescript} className="icon" alt="typescript" />
          <img src={react} className="icon" alt="react" />
          <img src={vue} className="icon" alt="vue" />
          <img src={git} className="icon" alt="git" />
          <img src={mongodb} className="icon" alt="mongodb" />
          <img src={postgresql} className="icon" alt="postgresql" />
        </div>
      </div>
      <div className="summary-section">
        <div className="summary-context">
          <div className="title">SUMMARY</div>
          <p>{summary}</p>
        </div>
      </div>
    </div>
  )
}

export default FooterSection
