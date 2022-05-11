import { propSetup, addToClass, bsClasses, setNumber } from '../Helpers'

export default function(p) {
  const { fluid, props } = propSetup(p, 'fluid')
  addToClass(props, 'container')
  if(fluid) addToClass(props, 'container-fluid')
  bsClasses(props)

  return (
    <div {...props}></div>
  )
}