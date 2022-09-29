import "./section1.css";
import people from "../resume-pic/2.png";
import github from "../resume-pic/GitHub-Mark.png";
import gmail from "../resume-pic/gmail.png";
import phone from "../resume-pic/phone.jpg";

function HeaderSection() {
  return (
    <header className="App-header">
      {/* <img src={phone} className="App-logo" alt="logo" /> */}
      <nav className="Nav-bar">
        <div className="Boxleft">NAISU</div>
        <div className="Nav-item">
          <a href="#EducationInfo" className="Nav-button">
            EDUCATION
          </a>
          <a href="#WorkInfo" className="Nav-button">
            WORK EXPERIENCE
          </a>
          <a href="#SkillInfo" className="Nav-button">
            SKILL
          </a>
        </div>
        <div className="Boxright">Resume</div>
      </nav>
      <div className="Title-div">
        <img className="Yudelle" src={people}></img>
        <div className="TitleWhiteBox">
          <h1 className="WhiteBoxText">
            It's okay to start again from ZERO. <br />
            Even the Array index starts from ZERO.
          </h1>
          <p className="WhiteboxP">TRAINEE SOFTWARE DEVELOPER</p>
        </div>
        <div className="RightTitle">
          <h1 className="GreetingMessage">
            Greetings !
            <br />
            I'm Napas Kumpunya (Naisu)
          </h1>
          <br />
          <p className="IntroductionP">
            I'm enrolled in{" "}
            <a href="https://www.techupth.com/">
              <strong>Tech Up</strong>
            </a>
            's full-stack developer bootcamp to learn how to code. For me, this
            is a fresh beginning. and I anticipate turning into a passionate
            developer in the future. I hope you'll find my journey interesting!
          </p>
          <br />
          <div className="IconBar">
            <a href="https://github.com/whoisnaisu">
              <div className="IconLogo">
                <img src={github} width="50px" />
              </div>
            </a>
            <a href="mailto:napas14204@gmail.com">
              <div className="IconLogo">
                <img src={gmail} width="50px" />
              </div>
            </a>
            <a href="tel:+0804467024">
              <div className="IconLogo">
                <img src={phone} width="50px" />
              </div>
            </a>
          </div>
        </div>
      </div>
      <hr className="CloseLine" />
    </header>
  );
}

export default HeaderSection;
