import { addToClassName, applyBreakpoints } from '../../lib'

const COMPONENT_CLASSES = [ 'flex', 'flex-row' ]

export default function ({ children, sm, lg, xl, xxl, ...props }) {
  COMPONENT_CLASSES.forEach(cls => addToClassName(cls, props))
  applyBreakpoints({ sm, lg, xl, xxl, props }, COMPONENT_CLASSES)
  return (
    <div { ...props } className={ props.className }>
      { children }
    </div>
  )
}