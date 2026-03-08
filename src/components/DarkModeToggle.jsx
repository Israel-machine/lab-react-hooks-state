import React from 'react'

const DarkModeToggle = ({ darkMode, handleToggleDarkMode }) => {

  return (
    <button onClick={handleToggleDarkMode}>{darkMode ? "Toggle Light Mode" : "Toggle Dark Mode"}</button>
  )
}

export default DarkModeToggle
