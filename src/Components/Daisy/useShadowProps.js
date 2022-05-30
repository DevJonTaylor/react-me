import useProps from './useProps'

export default function(props) {
  const attributes = {
    smShadow: 'shadow-sm',
    shadow: 'shadow',
    mdShadow: 'shadow',
    lgShadow: 'shadow-md',
    xlShadow: 'shadow-lg',
    xxlShadow: 'shadow-xl',
    innerShadow: 'shadow-2xl',
    noShadow: 'shadow-inner'
  }

  useProps(attributes, props)
}