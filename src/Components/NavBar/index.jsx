import { Fragment, useState } from 'react'
import NavSmallMedium from './NavSmallMedium'
import NavBar from './NavBar'
import Bar from './Bar'
import { useResponsive } from '../../Hooks'

function NavigationLg({ ...props }) {
  return (
    <NavBar className="flex flex-wrap w-full">
      <Bar />
    </NavBar>
  )
}

export function Navigation({ ...props }) {
  const [ Small, Medium, Large, Responsive ] = useResponsive()

  return (
    <Fragment>
      <Responsive small medium>
        <NavSmallMedium { ...props } />
      </Responsive>
      <Large>
        <NavigationLg { ...props } />
      </Large>
    </Fragment>
  )
}

export { NavBar, Bar }