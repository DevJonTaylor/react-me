import { addToClass, bsClasses, propSetup, setNumber, setSizes } from '../Helpers'

export default function(p) {
  const { col, props } = propSetup(p, 'col')
  addToClass(props, 'row')
  bsClasses(props)
  if(col) setNumber(props, 'row-col', col, 12)
  setSizes(props, 'row-cols')


  return (
    <div {...props}></div>
  )
}