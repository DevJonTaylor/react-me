//tension: 220, friction: 120
import { useTransition, animated } from 'react-spring'

const FROM_STYLE = { opacity: 0 }
const TO_STYLE = { opacity: 1 }

export default function Fade({ children, duration, useChildren }) {

  const transitions = useTransition(children, {
    from: FROM_STYLE,
    enter: TO_STYLE,
    leave: FROM_STYLE,
    config: {
      friction: 200,
      tension: 125,
      duration: !duration ? 250 : duration,
    },
  });


  return transitions((props, item, key) =>
    item

      ? (<animated.div style={ props } key={ key }>
        { useChildren ? children : item }
      </animated.div>)

      : null,
  )
}

Fade.defaultProps = {
  duration: 200,
  keys: null
}















