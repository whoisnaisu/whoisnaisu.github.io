import React from "react"
import { HashRouter, Navigate, Route, Routes } from "react-router-dom"
import MainSection from "./components/MainSection"
import Navbar from "./components/Navbar"
import {
  ProjectsSection,
  WorkExperienceSection,
} from "./components/ExperienceSection"
import PageTitleChanger from "./hooks/PageTitleChanger.tsx"

function App() {
  return (
    <HashRouter>
      <div className="app">
        <PageTitleChanger />
        <Navbar />
        <Routes>
          <Route path="/" element={<MainSection />} />
          <Route path="/projects" element={<ProjectsSection />} />
          <Route path="/experience" element={<WorkExperienceSection />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App
