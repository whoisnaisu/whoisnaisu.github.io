const getStackTagName = (name: string): string => {
  try {
    if (!name) {
      return ""
    } else {
      const cleanedName = name
        .replace(/#/g, "sharp")
        .replace(/[^a-zA-Z]/g, "")
        .toLowerCase()
      return cleanedName
    }
  } catch (error) {
    console.error(
      "An error occurred while trying to get stack tag name:",
      error
    )
    return ""
  }
}

export default getStackTagName
