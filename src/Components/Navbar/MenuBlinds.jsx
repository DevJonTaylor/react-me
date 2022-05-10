import { useTransition, animated } from 'react-spring'
import { propSetup } from '../Helpers'
import { Logo } from "../Logo";

export default function(oldProps) {
  const { isOpen, children, props } = propSetup(oldProps, 'children', 'isOpen' )

  const transition = useTransition(isOpen, {
     from: {
       opacity: 0
     },
      enter: {
        opacity: 1
    },
    leave: {
      opacity: 0
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