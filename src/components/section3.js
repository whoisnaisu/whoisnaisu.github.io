import "../assets/css/section3.css";
import html from "../assets/images/html-1.svg";
import css from "../assets/images/css-3.svg";
import javascript from "../assets/images/logo-javascript.svg";
import git from "../assets/images/git-icon.svg";
import mongodb from "../assets/images/mongodb-icon-1.svg";
import postgresql from "../assets/images/postgresql.svg";

function FooterSection() {
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
          <img src={git} className="icon" alt="git" />
          <img src={mongodb} className="icon" alt="mongodb" />
          <img src={postgresql} className="icon" alt="postgresql" />
        </div>
      </div>
      <div className="summary-section">
        <div className="summary-context">
          <div className="title">SUMMARY</div>
          <p>
            Intuitive problem-solver, familiar with Full-Stack JavaScript. Looking to start the
            career as an entry-level software developer. Motivated to advance and
            expand my skill set through targeted mentorship and challenging projects
          </p>
        </div>
      </div>
    </div>
  );
}

export default FooterSection;