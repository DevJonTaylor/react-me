import { bsClasses, addToClass, propSetup } from '../Helpers'

export default function(p) {
  const { props } = propSetup(p)
  bsClasses(props)
  addToClass(props, 'card-img-top')
  return (
    <img {...props} />
  )
}