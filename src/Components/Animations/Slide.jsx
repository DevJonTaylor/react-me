import { animated, useTransition } from 'react-spring'
import { Fragment, useEffect } from 'react'

export default function({ booleanVariable, children, from, enter, leave, config, ...props }) {
  from = !from ? { height: '0vh', y: innerHeight * 2, x: 0 } : from
  enter = !enter ? { height: '100vh', y: 0, x: 0 } : enter
  leave = !leave ? { height: '0vh', y: -innerHeight, x: 0 } : leave
  config = !config ? { mass: 4.1, tension: 266, friction: 30, precision: 0.001, velocity: 0.012 } : config

  const transition = useTransition(booleanVariable, { from, enter, leave, config })

  useEffect(() => () => {
    document.querySelector('#navbar').classList.add('absolute')
    setTimeout(() => {
      document.querySelector('#navbar').classList.remove('absolute')
    }, 250)
  })

  return (
    <Fragment>
      {transition((style, item) =>
        item ? <animated.div {...props} style={style}>{children}</animated.div> : ''
      )}
    </Fragment>
  )
}