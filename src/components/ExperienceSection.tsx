import React from "react"
import projectData from "../constants/projects-data"
import workExperience from "../constants/work-experience-data"
import openLink from "../utils/openLink"
import getStackTagName from "../utils/getStackTagName"

const DetailSection: React.FC = () => {
  return (
    <div className="container-2">
      <div className="title" id="project-info">
        PROJECTS
      </div>
      <p className="description">
        You can click on the project title to see a repository.
      </p>
      <div className="projects-area">
        {projectData.map((item, index) => {
          return (
            <div className="card" key={index}>
              <h2
                className="card-title"
                onClick={() => {
                  openLink(item.link)
                }}
              >
                {item.title}
              </h2>
              <br />
              <div className="card-description">
                <div>{item.description}</div>
                <div className="stack-container">
                  {item.stack.map((stack, index) => {
                    return (
                      <span
                        className={`stack-tag ${getStackTagName(stack)}`}
                        key={index}
                      >
                        {stack}
                      </span>
                    )
                  })}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="title" id="work-info">
        WORK EXPERIENCE
      </div>
      <p className="description">
        Coding related work experience && my responsible for the roles.
      </p>
      <div className="work-area">
        {workExperience.map((item, index) => {
          return (
            <div className="card" key={index}>
              <h2 className="card-title">{item.title}</h2>
              {typeof item.date === "string" ? (
                <div>{item.date}</div>
              ) : (
                <div>
                  {item?.date?.map((dateList, index) => (
                    <div key={index}>{dateList}</div>
                  ))}
                </div>
              )}
              <br />
              <div className="card-description">
                <ul>
                  {item?.description?.map((list, index) => {
                    return <li key={index}>{list}</li>
                  })}
                </ul>
                <div className="stack-container">
                  {item?.stack?.map((stack, index) => {
                    return (
                      <span
                        className={`stack-tag ${getStackTagName(stack)}`}
                        key={index}
                      >
                        {stack}
                      </span>
                    )
                  })}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default DetailSection
