import { Text } from '../Helpers'

import { propSetup } from '../Helpers'

export default function(p) {
  const { children, props } = propSetup(p, 'children')
  return (
    <Text className="card-title" h5 {...props}>{children}</Text>
  )
}