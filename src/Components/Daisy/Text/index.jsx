import { Fragment } from 'react'
import useTextProps from './useTextProps'

export default function ({ p, div, h1, h2, h3, h4, h5, h6, span, label, legend, children, ...props }) {
  useTextProps(props)

  if(props.className === '') delete props.className
  return (
    <Fragment>
      { p ? (<p { ...props }>{children}</p>) : '' }
      { div ? (<div { ...props }>{children}</div>) : '' }
      { h1 ? (<h1 { ...props }>{children}</h1>) : '' }
      { h2 ? (<h2 { ...props }>{children}</h2>) : '' }
      { h3 ? (<h3 { ...props }>{children}</h3>) : '' }
      { h4 ? (<h4 { ...props }>{children}</h4>) : '' }
      { h5 ? (<h5 { ...props }>{children}</h5>) : '' }
      { h6 ? (<h6 { ...props }>{children}</h6>) : '' }
      { span ? (<span { ...props }>{children}</span>) : '' }
      { label ? (<label { ...props }>{children}</label>) : '' }
      { legend ? (<legend { ...props }>{children}</legend>) : '' }
    </Fragment>
  )
}