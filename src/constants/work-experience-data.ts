import { IWorkData } from "../interfaces/IWorkData"

const data: Array<IWorkData> = [
  {
    id: 1,
    title: "Software Developer",
    date: "May 2024 - Present",
    description: ["Still a secrets ;)", "Mainly using C# ASP .Net Core"],
    stack: ["C#", "ASP .NET Core"]
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
