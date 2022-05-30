export default function(className, props) {
  props.className = !props.className
    ? className
    : `${props.className} ${className}`
}