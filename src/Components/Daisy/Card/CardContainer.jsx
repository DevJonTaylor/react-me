import addClass from '../addClass'
import useCardProps from './useCardProps'
import useShadow from '../useShadowProps'
import usePrefixColors from '../usePrefixColors'

export default function ({ children, ...props }) {
  useShadow(props)
  addClass('card', props)
  useCardProps(props)
  usePrefixColors('bg', props)

  return (
    <div { ...props }>
      {children}
    </div>
  )
}