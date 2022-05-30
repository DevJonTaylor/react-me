import { Fragment } from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

function LiLink({ to, className, children, ...props }) {
  return (
    <li className={className}>
      <Link to={ to } { ...props }>
        { children }
      </Link>
    </li>
  )
}

export default function ({ li, to, activeClass, className, children, ...props }) {
  const resolved = useResolvedPath(to)

  const isActive = useMatch({ path: resolved.pathname, end: true })

  const classes = !className ? [] : className.split(' ')

  if(activeClass && isActive) {
    classes.push(activeClass)
  }

  return (
    <Fragment>
      {li ? (
        <LiLink to={ to } className={classes.join(' ') } {...props}>{children}</LiLink>
      ) : (
        <Link to={ to } className={ classes.join(' ') } {...props}>{children}</Link>
      )}
    </Fragment>
  )
}