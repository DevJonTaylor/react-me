import { Fragment } from 'react'

export default function ({ file, desc, ...props }) {
  return (
    <Fragment>
      <img src={`/src/assets/images/${file}`} alt={desc} { ...props } />
    </Fragment>
  )
}