import { useEffect, useState, Fragment } from 'react'
const MEDIUM_BP = 768
const LARGE_BP = 1024

export function useResponsive() {
  const [ width, setWidth ] = useState(window.innerWidth)

  function ResponsiveComponent({ small, medium, large, children }) {
    const isSmall = !small ? false : width < MEDIUM_BP
    const isMedium = !medium ? false : width < LARGE_BP && width >= MEDIUM_BP
    const isLarge = !large ? false : width >= LARGE_BP

    return (
      <Fragment>
        { isSmall || isMedium || isLarge ? children : '' }
      </Fragment>
    )
  }

  const SmallRender = ({ children }) => ( <ResponsiveComponent small>{children}</ResponsiveComponent> )

  const MediumRender = ({ children }) => ( <ResponsiveComponent medium>{children}</ResponsiveComponent> )

  const LargeRender = ({ children }) => ( <ResponsiveComponent large>{children}</ResponsiveComponent> )

  useEffect(() => {
    const resizeEventHandler = () => setWidth(window.innerWidth)

    window.addEventListener('resize', resizeEventHandler)

    return () => window.removeEventListener('resize', resizeEventHandler)
  }, [])

  return [ SmallRender, MediumRender, LargeRender, ResponsiveComponent ]
}