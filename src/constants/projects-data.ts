import { IProjectData } from "../interfaces/IProjectData"

const data: Array<IProjectData> = [
  {
    id: 1,
    title: "Book Directory",
    description:
      "Simple book search engine with google API. Searchable, Favourite bookmarks (Local storage save)",
    link: "https://github.com/whoisnaisu/redesigned-lamp",
    stack: ["TypeScript", "Vue 2", "SCSS"]
  },
  {
    id: 2,
    title: `Home Service`,
    description: `Collaborating on a full-stack group project with the Agile Scrum method, mainly responsible for front-end development. Home Service is a commercial platform website, both for users and admins.`,
    link: "https://github.com/techupth/home-service",
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Chakra UI",
      "Node.js",
      "Express.js",
      "PostgreSQL"
    ]
  },
  {
    id: 3,
    title: "Pacman Game",
    description:
      "Simple pacman game.  Tutorial by Chris Courses but in TypeScript version.",
    link: "https://github.com/whoisnaisu/pacman-game",
    stack: ["HTML", "TypeScript", "JavaScript"]
  },
  {
    id: 4,
    title: "Automatically download",
    description:
      "Automatically download helps STOU students download ebook pictures with ease. (CLI based)",
    link: "https://github.com/whoisnaisu/crispy-carnival",
    stack: ["TypeScript"]
  },
  {
    id: 5,
    title: "Protein Calculator",
    description:
      "Simple daily protein need calculator. Helps users determine their daily protein requirements based on lifestyle factors such as their weight and lifestyle.",
    link: "https://github.com/whoisnaisu/protein-cal",
    stack: ["Nuxt 3", "TypeScript", "SCSS"]
  }
]

export default data
