import React from "react";
import "./assets/css/App.css";
import MainSection from "./components/MainSection";
import ExperienceSection from "./components/ExperienceSection";
import TechStackSection from "./components/TechStackSection";

function App() {
  return (
    <div className="App">
      <MainSection />
      <ExperienceSection />
      <TechStackSection />
    </div>
  );
}

export default App;
