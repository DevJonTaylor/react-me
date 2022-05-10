import icon from '../../assets/images/favicon.svg'
import { useSpring, animated } from 'react-spring'
import { propSetup, rotate } from '../Helpers'

export default function(p) {
  const { toggle, isOpen, props } = propSetup(p, 'toggle', 'isOpen')
  const styles = useSpring({
    transform: !isOpen ? rotate(0) : rotate(810)
  })

  return (
    <animated.div {...props} style={styles} onClick={() => toggle(!isOpen)}>
      <img alt="Jon Taylor's Logo Icon" src={icon} width={50} />
    </animated.div>
  )
}
