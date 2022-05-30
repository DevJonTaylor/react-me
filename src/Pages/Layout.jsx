import { Outlet } from 'react-router-dom'
import { LightAndDarkMode } from '../Components/Daisy/Buttons'

export default function ({ isDark, toggleDark }) {
  return (
    <div className="container">
      <LightAndDarkMode text btnAccent className="w-full" darkMode={isDark} toggle={toggleDark} />
      <Outlet />
    </div>
  )
}