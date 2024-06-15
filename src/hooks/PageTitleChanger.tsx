import React, { useEffect, useState } from "react"

const PageTitleChanger: React.FC = () => {
  const [originalTitle, setOriginalTitle] = useState<string>(document.title)

  useEffect(() => {
    const handleBlur = () => {
      document.title = "WHO IS NAISU?"
    }

    const handleFocus = () => {
      document.title = originalTitle
    }

    window.addEventListener("blur", handleBlur)
    window.addEventListener("focus", handleFocus)

    return () => {
      window.removeEventListener("blur", handleBlur)
      window.removeEventListener("focus", handleFocus)
    }
  }, [originalTitle])

  return ""
}

export default PageTitleChanger
