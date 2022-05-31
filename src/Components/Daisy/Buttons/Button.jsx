import { Fragment } from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import useButtonProps from './useButtonProps'
import addClass from '../addClass'

export default function ({ li, link, to, internal, activeClass, newTab, children, ...props }) {
  const Li = ({ li, children, ...props }) => li
    ? ( <li { ...props }>{ children }</li> )
    : ( <Fragment>{ children }</Fragment> )

  useButtonProps(props)

  let isActiveClass = false
  const liProps = !li ? {} : { li: true }
  if(newTab) props.target = "_blank"
  if(activeClass) {
    const resolved = useResolvedPath(to)
    if(useMatch({ path: resolved.pathname, end: true })) {
      addClass(activeClass, !li ? props : liProps)
    }
  }


  return (
    <Fragment>
      { link ?
        (
          <Li { ...liProps }>
            <a href={to} { ...props }>{ children }</a>
          </Li>
        ) : '' }
      { internal
        ? (
          <Li { ...liProps }>
            <Link to={to} { ...props }>{ children }</Link>
          </Li>
        ) : '' }
      { (!link && !internal)
        ? (
        <Li { ...liProps }>
          <button { ...props }>{ children }</button>
        </Li>
        ) : ''
      }
    </Fragment>
  )
}