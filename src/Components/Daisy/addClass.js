export default function(className, props) {
  if(!props.className) props.className = className
  else props.className += ` ${className}`
}