import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const titles: Record<string, string> = {
  "/": "Naisu — Software Developer",
  "/projects": "Projects — Naisu",
  "/experience": "Experience — Naisu",
}

function PageTitleChanger() {
  const location = useLocation()

  useEffect(() => {
    document.title = titles[location.pathname] ?? titles["/"]
  }, [location.pathname])

  return null
}

export default PageTitleChanger
