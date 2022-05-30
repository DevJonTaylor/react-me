import addToClassName from './addToClassName'

export default function addPrefixedClasses(prefix, props, classes) {
  if(!classes && !props.className) return
  if(!classes) return addPrefixedClasses(prefix, props, props.className.split(' '))

  classes.forEach(className => addToClassName(`${prefix}:${className}`, props))
}