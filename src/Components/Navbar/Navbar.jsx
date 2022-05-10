import { useState } from 'react'
import { Slide, propSetup } from "../Helpers"
import { SpinningIcon } from '../Buttons'
import MenuBlinds from './MenuBlinds'
import MenuItem from './MenuItem'
import { Logo } from "../Logo";

export default function(oldProps) {
  const { currentPage, changePage, props } = propSetup(oldProps, 'changePage', 'currentPage')
  const [ isOpen, toggle ] = useState(false)
  const menuClick = title => {
    toggle(!isOpen)
    changePage(title)
  }


  const menuItems = [ 'Projects', 'About Me', 'Contact Me' ]
  return (
    <nav className="navbar" {...props}>
      <Slide className="nav-brand" to={0} duration={500} from={innerWidth}>
        <Logo />
      </Slide>
      <SpinningIcon toggle={toggle} isOpen={isOpen} className="hamburger" />
      <MenuBlinds isOpen={isOpen}>
        {menuItems.map((item, i)=> (
          <MenuItem key={i * 5} title={item} currentPage={currentPage} changePage={menuClick} />
        ))}
      </MenuBlinds>
    </nav>
  )
}