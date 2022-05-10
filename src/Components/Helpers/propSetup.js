/**
 * The point of this function is to remove destructed nodes from the props object and return a new object with the
 * props object as well as the requested nodes so the nodes are not included into passing them to the DOM.
 * @param {React.PropsWithChildren} props
 * @param {Array<string>} keys
 * @returns {{unknown}}
 */
export default function(props, ...keys) {
  const newProps = {}
  const obj = {}

  for(const [key, value] of Object.entries(props)) {
    if(keys.find(k => key === k)) obj[key] = value
    else newProps[key] = value
  }
  obj.props = newProps

  return obj
}