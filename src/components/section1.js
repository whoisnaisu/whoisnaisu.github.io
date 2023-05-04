import "../assets/css/section1.css";
import github from "../assets/images/GitHub-Mark.png";
import gmail from "../assets/images/gmail.png";
import phone from "../assets/images/phone.jpg";
import linkedin from "../assets/images/linkedin.png";

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
          <p className="capsule-tag">FULL-STACK DEVELOPER</p>
        </div>
        <div className="main-right-side">
          <h1 className="greetings">
            Greetings ! I'm Naisu
          </h1>
          <br />
          <p className="introduction">
            I graduated from full-stack developer bootcamp at{" "}
            <a href="https://www.techupth.com/">
              <strong>Tech Up</strong>
            </a>
            . This is my first static website developed with React. which, I believe, will no longer be updated for a while due to my responsibility for full-time job.
            If you need to get in touch, please don't hesitate to reach me through LinkedIn.
          </p>
          <br />
          <div className="icon-group">
            <a href="https://github.com/whoisnaisu" target="_blank" rel="noopener noreferrer" >
              <div className="github-icon">
                <img src={github} width="50rem" alt="github icon" />
              </div>
            </a>
            <a href="mailto: napas14204@gmail.com" target="_blank" rel="noopener noreferrer">
              <div className="gmail-icon">
                <img src={gmail} width="50rem" alt="mail icon" />
              </div>
            </a>
            <a href="https://www.linkedin.com/in/napas-k/" target="_blank" rel="noopener noreferrer">
              <div className="phone-icon">
                <img src={linkedin} width="50rem" alt="linkedin icon" />
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
