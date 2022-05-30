import useProps from '../useProps'

export default function(props) {
  const attributes = {
    sizeXs: 'text-xs',
    sizeSm: 'text-sm',
    sizeBase: 'text-base',
    sizeLg: 'text-lg',
    sizeXl: 'text-xl',
    size2xl: 'text-2xl',
    size3xl: 'text-3xl',
    size4xl: 'text-4xl',
    size5xl: 'text-5xl',
    size6xl: 'text-6xl',
    size7xl: 'text-7xl',
    size8xl: 'text-8xl',
    size9xl: 'text-9xl',
    alignLeft: 'text-left',
    alignRight: 'text-right',
    alignCenter: 'text-center',
    alignJustify: 'text-justify',
    bold: 'text-bold'
  }

  useProps(attributes, props)
}












