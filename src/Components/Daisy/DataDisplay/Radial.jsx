import addClass from '../addClass'
import addStyle from '../addStyle'
import usePrefixColors from '../usePrefixColors'

export default function ({ size, value, thick, children, ...props }) {
  usePrefixColors('bg', props)
  addClass('radial-progress', props)
  if(size) addStyle({ '--size': size }, props)
  if(value) addStyle({ '--value': value }, props)
  if(thick) addStyle({ '--thickness': thick }, props)

  return (
    <div { ...props }>{ children }</div>
  )
}