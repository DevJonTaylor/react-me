import { useSpring, animated } from 'react-spring'
import { propSetup } from '../Helpers/'

const FROM_STYLE = { opacity: 0 }
const TO_STYLE = { opacity: 1 }

function Slide(oldProps) {
  const { children, from, to, duration, props } = propSetup(oldProps, 'children', 'from', 'to', 'duration')

  FROM_STYLE.x = `${!from ? innerWidth : from }px`
  TO_STYLE.x = `${!to ? 0 : to }px`

  const options = {
    from: { ...FROM_STYLE },
    to: { ...TO_STYLE },
    config: {
      mass: 3,
      tension: 200,
      friction: 12,
      //duration: !duration ? 200 : duration
    },
  }

  const styles = useSpring(options);

  return (
    <animated.div {...props} style={ styles }>
      { children }
    </animated.div>
  )
}

Slide.defaultProps = {
  duration: 200,
  keys: null
}


export default Slide