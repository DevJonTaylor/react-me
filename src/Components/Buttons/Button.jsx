import { propSetup, bsClasses, setColor, addToClass } from '../Helpers'

export default function(p) {
  const { outline, round, children, props } = propSetup(p, 'children', 'outline', 'round')

  bsClasses(props)
  addToClass(props, 'btn')
  outline ? setColor(props, 'btn-outline') : setColor(props, 'btn')
  if(round) addToClass(props, 'btn-round')

  return (
    <button {...props}>
      {children}
    </button>
  )
}