export default function(styleObject, props) {
  if(!props.style) props.style = styleObject
  else props.style = { ...props.style, ...styleObject }
}