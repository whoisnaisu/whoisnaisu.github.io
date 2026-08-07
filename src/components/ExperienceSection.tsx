import React, { useEffect, useRef } from "react"
import projectData from "../constants/projects-data"
import workExperience from "../constants/work-experience-data"
import getStackTagName from "../utils/getStackTagName"

function HighlightedText({
  text,
  highlights = [],
}: {
  text: string
  highlights?: Array<string>
}) {
  if (highlights.length === 0) return <>{text}</>

  const escapedHighlights = [...highlights]
    .sort((a, b) => b.length - a.length)
    .map((highlight) => highlight.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
  const pattern = new RegExp(`(${escapedHighlights.join("|")})`, "gi")
  const highlightSet = new Set(highlights.map((item) => item.toLowerCase()))

  return (
    <>
      {text.split(pattern).map((part, index) =>
        highlightSet.has(part.toLowerCase()) ? (
          <strong key={`${part}-${index}`}>{part}</strong>
        ) : (
          part
        )
      )}
    </>
  )
}

function parseMonth(value: string) {
  const [year, month] = value.split("-").map(Number)
  return new Date(year, month - 1, 1)
}

function formatDuration(start: Date, end: Date) {
  const totalMonths =
    (end.getFullYear() - start.getFullYear()) * 12 +
    end.getMonth() -
    start.getMonth() +
    1
  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12
  const parts = []

  if (years > 0) parts.push(`${years} ${years === 1 ? "yr" : "yrs"}`)
  if (months > 0) parts.push(`${months} ${months === 1 ? "mo" : "mos"}`)

  return parts.join(" ")
}

function formatPeriod(
  period: { start: string; end?: string },
  showDuration = true
) {
  const formatter = new Intl.DateTimeFormat("en", {
    month: "short",
    year: "numeric",
  })
  const start = parseMonth(period.start)
  const end = period.end ? parseMonth(period.end) : new Date()
  const endLabel = period.end ? formatter.format(end) : "Present"

  const dateRange = `${formatter.format(start)} – ${endLabel}`

  return showDuration
    ? `${dateRange} (${formatDuration(start, end)})`
    : dateRange
}

export const ProjectsSection: React.FC = () => {
  return (
    <main className="route-page page-shell">
      <header className="page-heading">
        <p className="eyebrow">PROJECTS</p>
        <h1>Things I built while learning.</h1>
        <p>
          Small projects, coursework, and experiments that helped me practice
          new tools and put ideas into code.
        </p>
      </header>

      <section className="projects-grid" aria-label="Project list">
        {projectData.map((item, index) => (
          <article
            className={`project-card${item.id === 2 ? " featured" : ""}`}
            key={item.id}
          >
            <div className="card-meta">
              <span>0{index + 1}</span>
              {item.id === 2 && <span>FEATURED</span>}
            </div>
            <h2>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.title} <span aria-hidden="true">↗</span>
              </a>
            </h2>
            <p>{item.description}</p>
            <div className="stack-container" aria-label="Technologies">
              {item.stack.map((stack) => (
                <span
                  className={`stack-tag ${getStackTagName(stack)}`}
                  key={stack}
                >
                  {stack}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}

export const WorkExperienceSection: React.FC = () => {
  const timelineRef = useRef<HTMLElement>(null)
  const primaryRoles = workExperience.filter(
    (item) => item.relationship !== "parallel"
  )
  const parallelRoles = workExperience.filter(
    (item) => item.relationship === "parallel"
  )

  useEffect(() => {
    const timelineItems = timelineRef.current?.querySelectorAll(
      ".experience-item"
    )

    if (!timelineItems) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    )

    timelineItems.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <main className="route-page page-shell">
      <header className="page-heading">
        <p className="eyebrow">EXPERIENCE</p>
        <h1>Building, debugging, and delivering with teams.</h1>
        <p>
          Roles that shaped how I approach software quality, collaboration,
          and maintainable systems.
        </p>
      </header>

      <section
        className="experience-list"
        aria-label="Work history timeline"
        ref={timelineRef}
      >
        {primaryRoles.map((item) => (
          <article
            className={`experience-item${
              parallelRoles.some((role) => role.overlapsWith === item.title)
                ? " has-parallel"
                : ""
            }`}
            key={item.id}
          >
            <div className="experience-heading">
              <p className="experience-date">
                {item.periods
                  .map((period) => formatPeriod(period, item.showDuration))
                  .join(" · ")}
              </p>
              <h2>{item.title}</h2>
              {item.company && (
                <span className="company-badge">@ {item.company}</span>
              )}
              {item.showRoleStack && item.stack && (
                <div className="stack-container" aria-label="Technologies">
                  {item.stack.map((stack) => (
                    <span
                      className={`stack-tag ${getStackTagName(stack)}`}
                      key={stack}
                    >
                      {stack}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <div className="timeline-marker" aria-hidden="true">
              <span />
            </div>
            <div className="experience-content">
              {item.milestones?.map((milestone) => (
                <div className="career-milestone" key={milestone.date}>
                  <span aria-hidden="true" />
                  <div>
                    <p>
                      {milestone.date}
                      {milestone.type === "role-change" && " · Role change"}
                    </p>
                    <h3>{milestone.title}</h3>
                  </div>
                </div>
              ))}
              {item.summary ? (
                <section className="role-summary">
                  {item.summaryLabel && <p>{item.summaryLabel}</p>}
                  <p className="role-summary-body">
                    <HighlightedText
                      text={item.summary}
                      highlights={item.summaryHighlights}
                    />
                  </p>
                </section>
              ) : (
                <ul>
                  {item.description.map((description) => (
                    <li key={description}>{description}</li>
                  ))}
                </ul>
              )}
              {parallelRoles
                .filter((role) => role.overlapsWith === item.title)
                .map((role) => (
                  <aside className="parallel-role" key={role.id}>
                    <div className="parallel-role-header">
                      <span className="parallel-badge">
                        {role.type} · Parallel role
                      </span>
                      <p>
                        {role.periods
                          .map((period) =>
                            formatPeriod(period, role.showDuration)
                          )
                          .join(" · ")}
                      </p>
                    </div>
                    <h3 className={role.company ? "has-company" : undefined}>
                      {role.title}
                    </h3>
                    {role.company && (
                      <p className="parallel-company">{role.company}</p>
                    )}
                    {role.summary ? (
                      <p className="parallel-summary">
                        <HighlightedText
                          text={role.summary}
                          highlights={role.summaryHighlights}
                        />
                      </p>
                    ) : (
                      <ul>
                        {role.description.map((description) => (
                          <li key={description}>{description}</li>
                        ))}
                      </ul>
                    )}
                    {role.stack && (
                      <div
                        className="stack-container"
                        aria-label="Technologies"
                      >
                        {role.stack.map((stack) => (
                          <span
                            className={`stack-tag ${getStackTagName(stack)}`}
                            key={stack}
                          >
                            {stack}
                          </span>
                        ))}
                      </div>
                    )}
                  </aside>
                ))}

              {item.stories?.map((story) => (
                <section
                  className="role-story"
                  aria-label={story.label}
                  key={story.label}
                >
                  <p>{story.label}</p>
                  <p className="role-story-body">
                    <HighlightedText
                      text={story.body}
                      highlights={story.highlights}
                    />
                  </p>
                  {story.stack && (
                    <div
                      className="stack-container story-stack"
                      aria-label={`${story.label} technologies`}
                    >
                      {story.stack.map((stack) => (
                        <span
                          className={`stack-tag ${getStackTagName(stack)}`}
                          key={stack}
                        >
                          {stack}
                        </span>
                      ))}
                    </div>
                  )}
                </section>
              ))}
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}
