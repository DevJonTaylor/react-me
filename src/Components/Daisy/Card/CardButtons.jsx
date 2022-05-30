import addClass from '../addClass'

export default function ({ children, ...props }) {
  addClass('card-actions', props)

  return (
    <div { ...props }>
      {children}
    </div>
  )
}