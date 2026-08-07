import { IWorkData } from "../interfaces/IWorkData"

const data: Array<IWorkData> = [
  {
    id: 1,
    title: "Software Developer",
    company: "Evokehub",
    summaryLabel: "Where I am now",
    summary: "I am still working at Evokehub and continue to enjoy being here because the company gives me an environment where I can keep learning. Becoming a mid-level developer did not mean that the learning stopped; it gave me more responsibility while reminding me how much there is still to understand. I also value the English-speaking work environment that Evokehub provides. Communicating in English every day once felt unfamiliar, but it has now become a natural part of how I work and grow.",
    summaryHighlights: ["Evokehub", "keep learning", "mid-level developer", "English-speaking work environment"],
    periods: [{ start: "2024-05" }],
    stories: [
      {
        label: "Growing into a mid-level role",
        body: "In June 2026, I was given the opportunity to grow into a Mid-level Software Developer role. My day-to-day responsibilities did not change dramatically overnight, so the recognition came as something I had not expected. I am still learning and working to take on more responsibility so that I can grow into the expectations that came with the role.",
        highlights: ["June 2026", "Mid-level Software Developer", "take on more responsibility"]
      },
      {
        label: "Opening up to coding agents",
        body: "After the structural change, I had to work across many more projects, including codebases written in languages and frameworks I was not familiar with. It was neither practical nor valuable to master every part of every stack before I could contribute. A major shift began when my Technical Manager encouraged me to try a coding agent. I was initially skeptical of AI coding, but after experimenting with Claude and building a new development workflow around it with supporting tools and extensions, I learned how to establish enough context to understand what I was changing, review the result, and move forward safely. It reduced the time I spent on repetitive or low-value implementation details and made unfamiliar codebases far easier to work with, leaving me more time to focus on the problem and deliver the work that mattered.",
        highlights: ["many more projects", "unfamiliar codebases", "new development workflow", "move forward safely", "deliver the work"]
      },
      {
        label: "Growing in a smaller team",
        body: "Another structural change reduced the size of the team, and once again I found myself working without a senior developer. This time, however, I had more experience than I did at ZIPEVENT and still had the support and direction of a Technical Manager. I did not feel that I had finished learning, but I felt capable of continuing to grow while taking responsibility for the work in front of me.",
        highlights: ["structural change", "without a senior developer", "Technical Manager", "continuing to grow"]
      },
      {
        label: "Adapting to a faster pace",
        body: "The new team worked on an Australian fintech startup and had a very different rhythm from my previous team. The earlier environment emphasized structure and moved at a more deliberate pace, while the startup team worked through shorter iterations and moved quickly from discussion to implementation. I adapted without much difficulty and found the faster pace energetic and enjoyable.",
        highlights: ["Australian fintech startup", "shorter iterations", "faster pace"]
      },
      {
        label: "Moving to a new team",
        body: "Following a structural change, the needs of the team shifted. In January 2025, I was given the option to move internally. I felt the project needed a senior engineer who could carry delivery immediately, while I was still at a stage where good mentorship mattered to my growth. I chose to transfer to another team rather than stay in a situation that was no longer the right fit for either side. The move also brought me into a different technical environment built around TypeScript, React, C#, and SQL.",
        highlights: ["structural change", "January 2025", "senior engineer", "mentorship"],
        stack: ["TypeScript", "React.js", "C#", "SQL"]
      },
      {
        label: "Learning the workflow around the code",
        body: "ZIPEVENT did not have a dedicated QA team, so my first team at Evokehub was also my first experience with a structured quality process, multiple environments, and more complex testing. It was also the first time I wrote unit tests with NUnit as part of my regular development work. I found the workflow frustrating at first because every change had to move through steps I was not used to. Over time, I came to understand the process as an important safety net—one that gave me more confidence in what we delivered rather than something standing in the way of delivery.",
        highlights: ["multiple environments", "unit tests", "NUnit", "important safety net"]
      },
      {
        label: "Learning the architecture",
        body: "I joined a team working on a Norwegian fintech project and encountered a kind of difficulty I had not faced before: a legacy codebase with a complex architecture, built across jQuery, C#, and older versions of ASP.NET MVC. It took me some time to adapt. My teammates told me I was picking it up quickly, but the system still felt difficult to understand from the inside. That experience made me realize that coding is not only about writing individual pieces of code—the architecture determines whether you can understand how the system behaves as a whole.",
        highlights: ["Norwegian fintech project", "legacy codebase", "architecture"],
        stack: ["jQuery", "C#", "ASP.NET MVC", "NUnit"]
      },
      {
        label: "Joining Evokehub",
        body: "The role stood out to me because the job description was more challenging than anything I had worked with before. It placed a much stronger emphasis on C#, and English was used for all communication at work—both were new to me. I received an offer and joined the team, stepping into a technical and communication environment I had never experienced before.",
        highlights: ["C#", "English"]
      }
    ],
    description: [
      "Developed, tested, and maintained FinTech software applications, managing both front-end and back-end functionalities using JavaScript, J-Query, C#, ASP .NET MVC, Razor and Microsoft SQL Server.",
      "Collaborated with the QA team to ensure the software passed all tests.",
      "Presented demos to customers, showing software features.",
      "Reviewed code, debugged software problems, and corrected issues."
    ],
    stack: ["React.js", "TypeScript", "SCSS", "C#", "ASP .NET Core"]
  },
  {
    id: 2,
    title: "Junior Full-stack Developer",
    company: "ZIPEVENT",
    summaryLabel: "Before the next step",
    summary: "By the end of my time at ZIPEVENT, I was maintaining web applications with Vue, Nuxt, and TypeScript. One of the projects I worked on was the web application for Techsauce Global Summit 2023, where I helped implement client-requested features, improve performance and readability, and debug issues across both frontend and backend code. I wanted to keep growing and take on broader challenges, so I began looking for my next opportunity.",
    summaryHighlights: ["Vue", "Nuxt", "TypeScript", "Techsauce Global Summit 2023"],
    description: [
      "Developed and maintained web applications using Vue, Nuxt and TypeScript.",
      "Improved codebase performance, readability, and maintainability.",
      "Implemented new features aligned with client requirements.",
      "Reviewed code, debugged problems, and corrected issues."
    ],
    showRoleStack: true,
    periods: [{ start: "2023-03", end: "2024-04" }],
    stories: [
      {
        label: "Working without a senior",
        body: "Later, another junior developer joined the team. With no senior developer on the team, I took on some of the coordination work—delegating tasks and helping manage the delivery timeline. I could handle the responsibility, but I had never seen a senior developer demonstrate what good guidance looked like. I worried that without that example, I might develop the wrong habits while trying to guide someone else. The experience taught me how to create structure and keep work moving, while also showing me how important mentorship and feedback are for growing in the right direction."
      },
      {
        label: "Expanding into backend",
        body: "After working mainly on the frontend for a while, I began to notice its limits. Some issues that appeared in the UI could not be fully understood or fixed by looking at the frontend alone. Reading through the backend repository helped me trace problems across the system and see the application as a whole. I told the CTO that I wanted to take on backend work, which led to an opportunity to learn C# and .NET and begin making changes to the codebase.",
        highlights: ["frontend", "backend repository", "C#", ".NET"]
      },
      {
        label: "Starting with Nuxt 2",
        body: "I started with Nuxt 2, which was challenging because my coding bootcamp background was in React. I had to adapt quickly and pick up a new stack immediately. Once I became comfortable with it, I found Vue 2's structure cleaner and more straightforward than React for the work I was doing.",
        highlights: ["Nuxt 2", "React", "Vue 2"]
      }
    ],
    stack: ["TypeScript", "Nuxt 2", "SCSS", "C#", "ASP .NET Core", "Mongo DB"]
  },
  {
    id: 4,
    title: "B.Sc. in Computer Science",
    company: "Sukhothai Thammathirat Open University",
    type: "Education",
    relationship: "parallel",
    overlapsWith: "Junior Full-stack Developer",
    summary: "In July 2023, while working at ZIPEVENT, I enrolled in a Computer Science bachelor's program at Sukhothai Thammathirat Open University. Personal and family circumstances had meant that I had never attended university before. Since I was building a career in software, I wanted to strengthen my foundations and chose an open university so that I could study alongside my work. I am still studying at my own pace and am not rushing to graduate. The program has given me useful foundations, but it has also shown me that Computer Science and Software Development are related without being the same discipline. Theory supports my work, while learning to build and deliver software continues through practice.",
    summaryHighlights: ["July 2023", "Computer Science", "open university", "Software Development"],
    description: [],
    showDuration: false,
    periods: [{ start: "2023-07" }]
  },
  {
    id: 3,
    title: `Teaching Assistant`,
    type: "Part-time",
    relationship: "parallel",
    overlapsWith: "Junior Full-stack Developer",
    summary: "Shortly after graduating from the coding bootcamp, I was given the opportunity to return as a part-time Teaching Assistant for its basic programming course. Although the material covered the fundamentals, teaching it required me to understand those concepts more clearly than when I was only learning them. The role also taught me how to explain technical ideas, adapt to different learners, and communicate while helping them work through problems.",
    summaryHighlights: ["coding bootcamp", "Teaching Assistant"],
    description: [
      "Provided guidance to developer in training assignments in TechUp's Basic programming course.",
      "Assisted in troubleshooting and problem-solving for coding challenges.",
      "Collaborated with instructors to ensure student success in coding tasks."
    ],
    periods: [
      { start: "2023-08", end: "2023-10" },
      { start: "2023-12", end: "2024-02" }
    ],
    stack: ["CLI", "Git", "JavaScript", "HTML", "CSS", "React.js"]
  }
]

export default data
