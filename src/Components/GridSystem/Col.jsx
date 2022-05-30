/**
 * auto
 * 1/2 50%
 * 1/3 33%
 * 2/3 66%
 * 1/4 25%
 * 2/4 50%
 * 3/4 75%
 * 1/5 20%
 * 2/5 40%
 * 3/5 60%
 * 4/5 80%
 * 1/6 17%
 * 2/6 34%
 * 3/6 51%
 * 4/6 68%
 * 5/6 85%
 * 1/12 8%
 * 2/12 16%
 * 3/12 24%
 * 4/12 32%
 * 5/12 40%
 * 6/12 48%
 * 7/12 56%
 * 8/12 64%
 * 9/12 72%
 * 10/12 90%
 * 11/12 98%
 * full 100%
 */
import { applyBreakpoints } from '../../lib'

const COMPONENT_CLASSES = [ ]

export default function Col({ size, siblings, sm, lg, xl, xxl, children, ...props }) {
  if(!size && !siblings) COMPONENT_CLASSES.push('basis-auto')
  if(!size) COMPONENT_CLASSES.push('basis-full')
  if(!siblings) {
    siblings = 12
    COMPONENT_CLASSES.push(`basis-${size}/${siblings}`)
  }

  applyBreakpoints({ sm, lg, xl, xxl, props }, COMPONENT_CLASSES)
  return (
    <div { ...props } >
      { children }
    </div>
  )
}

export function Col1({ children, ...props }) {
  return (
    <Col size={1} siblings={12} { ...props }>
      {children}
    </Col>
  )
}

export function ColFull({ children, ...props }) {
  return (
    <Col siblings={12} { ...props }>
      {children}
    </Col>
  )
}

export function Col2({ children, ...props }) {
  return (
    <Col size={2} siblings={12} { ...props }>
      {children}
    </Col>
  )
}

export function Col3({ children, ...props }) {
  return (
    <Col size={3} siblings={12} { ...props }>
      {children}
    </Col>
  )
}

export function Col4({ children, ...props }) {
  return (
    <Col size={4} siblings={12} { ...props }>
      {children}
    </Col>
  )
}

export function Col5({ children, ...props }) {
  return (
    <Col size={5} siblings={12} { ...props }>
      { children }
    </Col>
  )
}

export function Col6({ children, ...props }) {
  return (
    <Col size={6} siblings={12} { ...props }>
      { children }
    </Col>
  )
}

export function Col7({ children, ...props }) {
  return (
    <Col size={7} siblings={12} { ...props }>
      { children }
    </Col>
  )
}

export function Col8({ children, ...props }) {
  return (
    <Col size={8} siblings={12} { ...props }>
      { children }
    </Col>
  )
}

export function Col9({ children, ...props }) {
  return (
    <Col size={9} siblings={12} { ...props }>
      { children }
    </Col>
  )
}

export function Col10({ children, ...props }) {
  return (
    <Col size={10} siblings={12} { ...props }>
      { children }
    </Col>
  )
}

export function Col11({ children, ...props }) {
  return (
    <Col size={11} siblings={12} { ...props }>
      { children }
    </Col>
  )
}

export function Col12({ children, ...props }) {
  return (
    <Col size={12} siblings={12} { ...props }>
      { children }
    </Col>
  )
}