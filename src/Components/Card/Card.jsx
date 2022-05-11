import { bsClasses, addToClass, propSetup } from '../Helpers'

export default function(p) {
  const { children, props } = propSetup(p, 'children')
  bsClasses(props)
  addToClass(props, 'card')
  return (
    <div {...props}>{children}</div>
  )
}