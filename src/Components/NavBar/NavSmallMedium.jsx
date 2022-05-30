import { Fragment, useState, useId } from 'react'
import NavBar from './NavBar'
import NavSect from './NavSect'
import Link from './Link'
import { socials, navLinks } from './Links'
import { Hamburger, LightAndDarkMode } from '../Daisy/Buttons'
import { Slide } from '../Animations'
import { useTheme } from '../../Hooks'

export default function({ isDark, toggleDark, ...props }) {
  const [ isOpen, toggleOpen ] = useState(false)
  const routes = navLinks.map(navLink => ({ ...navLink, key: useId() }))
  const sm = socials.map(social => ({ ...social, key: useId() }))

  const toggle = () => toggleOpen(!isOpen)

  const
    from = { y: innerHeight * 2, x: 0 },
    enter = { y: 0, x: 0 },
    leave = { y: -innerHeight, x: 0 },
    config = { mass: 4.1, tension: 266, friction: 30, precision: 0.001, velocity: 0.012 }

  return (
    <Fragment>
      <div className="h-[10vh]" />
      <NavBar {...props} id="navbar" className="z-40 fixed top-0 left-0 h-[10vh]">
        <NavSect w75>
          <Link to="/" className="w-full">
            <img src="/src/assets/images/logo2.svg" alt="Jon Taylor's Logo" />
          </Link>
        </NavSect>
        <NavSect w25 className="flex flex-row-reverse">
          <Hamburger isOpen={ isOpen } toggle={ toggle } />
        </NavSect>
      </NavBar>
      <Slide
        id="slideMenu"
        className="bg-base-100 pt-10 w-full h-[90vh] fixed z-30"
        booleanVariable={ isOpen }
        from={ from }
        leave={ leave }
        enter={ enter }
        config={ config }
      >
        <div className="flex justify-center items-center mt-10">
          {sm.map(({ url, icon, key }) => (
            <a target="_blank" className="btn btn-circle btn-outline ml-2" href={url} key={key}>{icon}</a>
          ))}
        </div>
        <ul className="menu bg-base-100 w-full">
          {routes.map(({ url, text, key }) => (
            <Link to={url} activeClass="bordered" li key={key} onClick={() => toggle()}>{text}</Link>
          ))}
        </ul>
      </Slide>
    </Fragment>
  )
}