export default function(attributes, props) {
  const classes = !props.className ? [] : props.className.split(' ')
  for(const [ key, val ] of Object.entries(attributes)) {
    if(props[key]) {
      delete props[key]
      classes.push(val)
    }
  }
  props.className = classes.join(' ')
  return classes.join(' ')
}