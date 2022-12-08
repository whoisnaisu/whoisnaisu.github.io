import "./section1.css";

import github from "../resume-pic/GitHub-Mark.png";
import gmail from "../resume-pic/gmail.png";
import phone from "../resume-pic/phone.jpg";

function HeaderSection() {
  return (
    <header className="container-1">
      <nav className="nav-bar">
        <div className="left-side-nav">NAISU</div>
        <div className="nav-item">
          <a href="#project-info" className="project-button">
            PROJECTS
          </a>
          <a href="#work-info" className="work-button">
            WORK EXPERIENCE
          </a>
          <a href="#stack-info" className="stack-button">
            STACKS
          </a>
        </div>
        <div className="right-side-nav">Resume</div>
      </nav>
      <div className="main">



        <div className="capsule-box">
          <h1 className="capsule-quote">
            " It's okay to start again from ZERO, <br />
            array index starts from ZERO, too."
          </h1>
          <p className="capsule-tag">ENTRY-LEVEL SOFTWARE DEVELOPER</p>
        </div>
        <div className="main-right-side">
          <h1 className="greetings">
            Greetings !
            <br />
            I'm Napas Kumpunya (Naisu)
          </h1>
          <br />
          <p className="introduction">
            I graduated from full-stack developer bootcamp at{" "}
            <a href="https://www.techupth.com/">
              <strong>Tech Up</strong>
            </a>
            . I'm looking for an opportunity to work as a developer in the near future!
            Hope you having fun along with my new lifelong journey!
          </p>
          <br />
          <div className="icon-group">
            <a href="https://github.com/whoisnaisu">
              <div className="github-icon">
                <img src={github} width="50rem" alt="git hub icon" />
              </div>
            </a>
            <a href="mailto: napas14204@gmail.com">
              <div className="gmail-icon">
                <img src={gmail} width="50rem" alt="mail icon" />
              </div>
            </a>
            <a href="tel:+0804467024">
              <div className="phone-icon">
                <img src={phone} width="50rem" alt="phon icon" />
              </div>
            </a>
          </div>
        </div>
      </div>
      <hr className="close-line" />
    </header>
  );
}

export default HeaderSection;
