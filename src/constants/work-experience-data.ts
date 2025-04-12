import { IWorkData } from "../interfaces/IWorkData"

const data: Array<IWorkData> = [
  {
    id: 1,
    title: "Software Developer",
    date: "May 2024 - Present",
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
    title: "Full-stack Developer",
    description: [
      "Developed and maintained web applications using Vue, Nuxt and TypeScript.",
      "Improved codebase performance, readability, and maintainability.",
      "Implemented new features aligned with client requirements.",
      "Reviewed code, debugged problems, and corrected issues."
    ],
    date: "Mar 2023 - Apr 2024",
    stack: ["TypeScript", "Nuxt 2", "SCSS", "C#", "ASP .NET Core", "Mongo DB"]
  },
  {
    id: 3,
    title: `Teaching Assistant`,
    description: [
      "Provided guidance to developer in training assignments in TechUp's Basic programming course.",
      "Assisted in troubleshooting and problem-solving for coding challenges.",
      "Collaborated with instructors to ensure student success in coding tasks."
    ],
    date: ["Aug 2023 - Oct 2023", "Dec 2023 - Feb 2024"],
    stack: ["CLI", "Git", "JavaScript", "HTML", "CSS", "React.js"]
  }
]

export default data
