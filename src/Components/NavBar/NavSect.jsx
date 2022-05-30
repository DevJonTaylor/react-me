export default function NavSect({
                   w25,
                   w33,
                   w50,
                   w66,
                   w75,
                   w100,
                   className,
                   children,
                   ...props
                 }) {
  const classes = !className ? [] : className.split(' ')
  if(w25) classes.push('basis-1/4')
  if(w33) classes.push('basis-1/3')
  if(w50) classes.push('basis-2/4')
  if(w66) classes.push('basis-2/3')
  if(w75) classes.push('basis-3/4')
  if(w100) classes.push('basis-full')

  return (
    <div className={classes.join(' ')}>
      {children}
    </div>
  )
}