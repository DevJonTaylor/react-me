export default function ( { children, className, ...props } ) {
  const classes = [
    'flex',
    'justify-between',
    'items-center',
    'navbar',
    'bg-base-300',
    ...!className ? [] : className.split(' ')
  ]
  return (
    <nav className={classes.join(' ')}{...props}>
      { children }
    </nav>
  )
}