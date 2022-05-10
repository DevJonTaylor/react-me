import { useSpring, animated } from 'react-spring'
import { propSetup, translate, rotate } from '../Helpers'

function translateRotate(x, y, deg) {
  return `${translate(x, y)} ${rotate(deg)}`
}

export default function(oldProps) {
  const { isOpen, onClick, props } = propSetup(oldProps, 'isOpen', 'onClick')

  const first = useSpring({
    transform: isOpen
      ? translateRotate(5, 32, -45)
      : translateRotate(2, 7, 0)
  })

  const second = useSpring({
    transform: isOpen
      ? translateRotate(10, 4, 45)
      : translateRotate(2,19,0)
  })

  const third = useSpring({
    transform: isOpen
      ? translateRotate(5,32,-45)
      : translateRotate(2,31,0)
  })

  return (
    <div btn="hamburger" {...props}>
      <svg
        onClick={onClick}
        width="40"
        height="32"
        viewBox="0 0 44 44"
        xmlns="http://www.w3.org/2000/svg"
      >
        <animated.rect width="40" height="4" rx="2" style={first} />
        <animated.rect width="40" height="4" rx="2" style={second} />
        <animated.rect width="40" height="4" rx="2" style={third} />
      </svg>
    </div>
  )
}