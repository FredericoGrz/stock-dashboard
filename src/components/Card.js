import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Card = ({ children }) => {
  const { darkMode } = useContext(ThemeContext)
  return (
    <div className={`w-full h-full rounded-md relative border-2 p-1 xl:p-8 md:p-2 
    ${darkMode ? "bg-gray-900 border-gray-800" : "bg-white border-neutral-200"}`}>
      {children}
    </div>
  )
}

export default Card