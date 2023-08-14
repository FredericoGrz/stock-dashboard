import { MoonIcon } from "@heroicons/react/solid"
import React, { useContext } from "react"
import ThemeContext from "../context/ThemeContext"

const ThemeIcon = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <button className={`rounded-lg border-1 border-neutral-400 p-2 absolute right-8 top-4  xl:right-32 xl:top-20 shadow-md transition duration-300 hover:scale-125 ${darkMode ? "shadow-yellow-200" : "shadow-neutral-400"}`} onClick={toggleDarkMode}>
      <MoonIcon className={`h-8 w-8 cursor-pointer stroke-1 fill-none ${darkMode ? "fill-yellow-400 stroke-yellow-400" : "fill-none stroke-neutral-400"}`} />
    </button>
  )
}

export default ThemeIcon