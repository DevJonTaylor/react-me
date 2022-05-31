import addClass from '../addClass'
import useProps from '../useProps'

export default function(props) {
  const attributes = {
    noAnimation: 'no-animation', lg: 'btn-lg', md: 'btn-md', sm: 'btn-sm', xs: 'btn-xs', wide: 'btn-wide',
    block: 'btn-block', circle: 'btn-circle', square: 'btn-square', glass: 'glass', loading: 'loading',
    primary: 'btn-primary', secondary: 'btn-secondary', ghost: 'btn-ghost', accent: 'btn-accent', info: 'btn-info',
    success: 'btn-success', warning: 'btn-warning', error: 'btn-error', link: 'btn-link', outline: 'btn-outline',
    active: 'btn-active', disabled: 'btn-disabled'
  }
  addClass('btn', props)
  useProps(attributes, props)
}