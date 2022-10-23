import "./section3.css";
import html from "../resume-pic/html-1.svg";
import css from "../resume-pic/css-3.svg";
import javascript from "../resume-pic/logo-javascript.svg";
import git from "../resume-pic/git-icon.svg";
import mongodb from "../resume-pic/mongodb-icon-1.svg";
import postgresql from "../resume-pic/postgresql.svg";

function FooterSection() {
  return (
    <div className="App-footer">
      <div id="SkillInfo" className="Title">
        SKILLS
      </div>
      <div className="SkillSection">
        <div className="SkillBox">
          <img src={html} className="SkillIcon" />
          <img src={css} className="SkillIcon" />
          <img src={javascript} className="SkillIcon" />
          <img src={git} className="SkillIcon" />
          <img src={mongodb} className="SkillIcon" />
          <img src={postgresql} className="SkillIcon" />
        </div>
      </div>
      <div className="SummarySection">
        <div className="SummaryContext">
          <div className="Title">SUMMARY</div>
          <p>
            Duis magna voluptate sit mollit esse aliquip sit nisi. Irure velit
            deserunt nostrud consequat laboris mollit aute velit fugiat ullamco
            est. Ullamco sit fugiat aliquip reprehenderit pariatur eu occaecat
            consequat dolor ut nulla. Occaecat ut pariatur reprehenderit ipsum
            sunt labore id sunt fugiat. Duis magna voluptate sit mollit esse
            aliquip sit nisi. Irure velit deserunt nostrud consequat laboris
            mollit aute velit fugiat ullamco est.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FooterSection;
