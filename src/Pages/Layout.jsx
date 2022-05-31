import { Outlet } from 'react-router-dom'
import { LightAndDarkMode } from '../Components/Daisy/Buttons'
import { useResponsive } from '../Hooks'
import { Fragment } from 'react'

export default function ({ isDark, toggleDark }) {
  const [ Small, Medium, Large, Responsive ] = useResponsive()

  return (
    <Fragment>
      <Small>
        <LightAndDarkMode block accent text className="rounded-none" darkMode={isDark} toggle={toggleDark} />
      </Small>
      <Responsive medium large>
        <LightAndDarkMode text accent darkMode={isDark} toggle={toggleDark} />
      </Responsive>
      <div className="container mx-auto px-5">
        <Outlet />
      </div>
    </Fragment>
  )
}