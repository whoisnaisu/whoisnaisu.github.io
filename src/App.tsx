import React from "react"
import MainSection from "./components/MainSection"
import ExperienceSection from "./components/ExperienceSection"
import TechStackSection from "./components/TechStackSection.tsx"
import PageTitleChanger from "./hooks/PageTitleChanger.tsx"

function App() {
  return (
    <div className="app">
      <PageTitleChanger />
      <MainSection />
      <ExperienceSection />
      <TechStackSection />
    </div>
  )
}

export default App
