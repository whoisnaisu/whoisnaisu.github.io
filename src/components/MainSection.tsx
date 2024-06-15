import React, { MouseEventHandler } from "react"
import Lottie from "lottie-react"
import reveal from "../assets/images/lottie/reveal-loading.json"
import github from "../assets/images/GitHub-Mark.png"
import gmail from "../assets/images/gmail.png"
import linkedin from "../assets/images/linkedin.png"
import fileArrowUp from "../assets/images/file-arrow-up-alt-svgrepo-com.svg"

const ggdriveResume =
  "https://drive.google.com/drive/folders/101SJMjiATx8oTmW5nV47NSMvtylLj-m3?usp=sharing"

const openLink: React.MouseEventHandler<HTMLDivElement> = (event) => {
  event.preventDefault()
  console.log("click")
  window.open(ggdriveResume, "_blank")
}

function HeaderSection() {
  return (
    <header className="container-1">
      <nav className="nav-bar">
        <div className="left-side-nav">SOFTWARE DEVELOPER</div>
        <div className="nav-item">
          <a href="#project-info" className="a-button">
            PROJECTS
          </a>
          <a href="#work-info" className="a-button">
            WORK EXPERIENCE
          </a>
          <a href="#stack-info" className="a-button">
            STACKS
          </a>
        </div>
        <div className="right-side-nav pointer scaling " onClick={openLink}>
          <div>Resume</div>
          <img
            className="download-icon"
            src={fileArrowUp}
            alt="download icon"
          />
        </div>
      </nav>
      <div className="main">
        <div className="capsule-box">
          <h1 className="capsule-quote">
            " It's okay to start again from ZERO, <br />
            array index starts from ZERO, too."
          </h1>
          <p className="capsule-tag">NAISU</p>
        </div>
        <div className="reveal-lottie">
          <Lottie animationData={reveal} loop={true} />
        </div>
        <div className="main-right-side">
          <h1 className="greetings">Greetings ! I'm Naisu</h1>
          <br />
          <p className="introduction">
            Balancing dual roles, I'm a full-time software developer and a
            university student. This is my first static website developed with
            TypeScript, React and SCSS. While my job and homeworks keeps me
            busy, I'm always eager to connect and collaborate. Let's link up on
            LinkedIn!
          </p>
          <br />
          <div className="icon-group">
            <a
              href="https://github.com/whoisnaisu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-icon">
                <img src={github} width="50rem" alt="github icon" />
              </div>
            </a>
            <a
              href="mailto: napas14204@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-icon">
                <img src={gmail} width="50rem" alt="mail icon" />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/napas-k/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-icon">
                <img src={linkedin} width="50rem" alt="linkedin icon" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderSection
