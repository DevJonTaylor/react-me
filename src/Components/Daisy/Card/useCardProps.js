import useProps from '../useProps'

export default function(props) {
  const attributes = {
    bordered: 'card-bordered',
    imageFull: 'image-full',
    normal: 'card-normal',
    compact: 'card-compact',
    side: 'card-side',
    glass: 'glass'
  }

  return useProps(attributes, props)
}