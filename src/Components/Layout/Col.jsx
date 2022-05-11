import { addToClass, bsClasses, propSetup, setNumber, setSizes } from '../Helpers'

export default function(p) {
  const { a, props } = propSetup(p, 'a')
  setSizes(props)
  if(a) setNumber(props, 'col', a, 12)
  else if(props.className && props.className.indexOf('col') === -1) addToClass(props, 'col')
  bsClasses(props)


  return (
    <div {...props}></div>
  )
}