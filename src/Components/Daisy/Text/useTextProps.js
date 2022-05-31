import useProps from '../useProps'
import usePrefixColors from '../usePrefixColors'

export default function(props) {
  const attributes = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    xl2: 'text-2xl',
    xl3: 'text-3xl',
    xl4: 'text-4xl',
    xl5: 'text-5xl',
    xl6: 'text-6xl',
    xl7: 'text-7xl',
    xl8: 'text-8xl',
    xl9: 'text-9xl',
    left: 'text-left',
    right: 'text-right',
    center: 'text-center',
    justify: 'text-justify',
    bold: 'text-bold'
  }
  usePrefixColors('text', props)
  useProps(attributes, props)
}












