import addClass from '../addClass'

export default function ({ children, ...props }) {
  addClass('card-body', props)

  return (
    <div {...props}>{children}</div>
  )
}