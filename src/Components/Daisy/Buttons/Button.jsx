import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import useButtonProps from './useButtonProps'

export default function ({ link, to, internal, children, ...props }) {
  useButtonProps(props)

  return (
    <Fragment>
      { link
        ? (
          <a href={to} { ...props }>{ children }</a>
        ) : '' }
      { internal
        ? (
          <Link to={to} { ...props }>{ children }</Link>
        ) : '' }
      { (!link && !internal)
        ? (
          <button { ...props }>{ children }</button>
        ) : ''
      }
    </Fragment>
  )
}