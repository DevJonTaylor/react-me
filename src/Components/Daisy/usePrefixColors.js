import { kebabCase, camelCase } from 'lodash'
import useProps from './useProps'

export default function(prefix, props) {
  const colors = [
    'primary',
    'primary-focus',
    'primary-content',
    'secondary',
    'secondary-focus',
    'secondary-content',
    'accent',
    'accent-focus',
    'accent-content',
    'neutral',
    'neutral-focus',
    'neutral-content',
    'base-100',
    'base-200',
    'base-300',
    'base-content',
    'info',
    'info-content',
    'success',
    'success-content',
    'warning',
    'warning-content',
    'error',
    'error-content',
  ]
  const attributes = {}

  for(const color of colors) {
    const key = camelCase(color)

    attributes[key] = kebabCase(`${prefix}-${key}`)
  }

  useProps(attributes, props)
}

