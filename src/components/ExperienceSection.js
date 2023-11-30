import "../assets/css/ExperienceSection.css";
import projectData from "../constants/projects-data";
import workExperience from "../constants/work-experience-data";


function DetailSection() {

  const openLink = (link) => {
    window.open(link)
  }

  return (
    <div className="container-2">
      <div className="title" id="project-info">
        PROJECTS
      </div>
      <p className="description">You can click on the project title to see a repository.</p>
      <div className="projects-area">
        {projectData.map((item) => {
          return (
            <div className="card">
              <h2 className="card-title" onClick={() => { openLink(item.link) }}>
                {item.title}
              </h2>
              <br />
              <p className="circle-description">
                {item.description}
              </p>
            </div>
          )
        })}
      </div>

      <div className="title" id="work-info">
        WORK EXPERIENCE
      </div>
      <p className="description">Previous work experience && my responsible for the roles.</p>
      <div className="work-area">
        {workExperience.map((item) => {
          return (
            <div className="card">
              <h2 className="card-title">{item.title}</h2>
              <div>{item.date}</div>
              <br />
              <p className="circle-description">
                <ul>
                  {item.description.map((list, index) => {
                    return (
                      <li>{list}</li>
                    )
                  })}
                </ul>
              </p>
            </div>
          )
        })}
      </div>
      <hr className="close-line" />
    </div>
  );
}

export default DetailSection;
