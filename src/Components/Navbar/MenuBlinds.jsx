import { useTransition, animated } from 'react-spring'
import { propSetup } from '../Helpers'
import { Logo } from "../Logo";

export default function(oldProps) {
  const { isOpen, children, props } = propSetup(oldProps, 'children', 'isOpen' )

  const transition = useTransition(isOpen, {
    from: {
      y: innerHeight,
    },
    enter: {
      y: 0,
    },
    leave: {
      y: innerHeight,
    },
    config: {
      mass: 3
    }
  })

  return (
    <div>
      {transition((style, item) => item ?
        <animated.div id="menu-blinds" style={style} {...props}>
          <ul>
            {children}
          </ul>
        </animated.div> : ''
      )}
    </div>
  )
}