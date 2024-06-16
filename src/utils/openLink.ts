const openLink = (link: string): void => {
  try {
    const newWindow = window.open(link, "_blank")
    if (!newWindow) {
      throw new Error("Failed to open the link")
    }
  } catch (error) {
    console.error("An error occurred while trying to open the link:", error)
  }
}

export default openLink
