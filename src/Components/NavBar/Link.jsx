import { Fragment } from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import addClass from '../Daisy/addClass'

export default function ({ li, to, activeClass, children, ...props }) {
  const resolved = useResolvedPath(to)

  const isActive = useMatch({ path: resolved.pathname, end: true })

  if(activeClass && isActive)
    addClass(activeClass, props)

  return (
    <Fragment>
      {li ? (
        <li>
          <Link to={to} { ...props }>{ children }</Link>
        </li>
      ) : (
        <Link to={to} { ...props }>{ children }</Link>
      )}
    </Fragment>
  )
}