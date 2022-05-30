import { Fragment } from 'react'
import addClass from '../addClass'
import useTextProps from '../Text/useTextProps'
import Text from '../Text'

export default function ({ ...props }) {
  addClass('card-title', props)
  useTextProps(props)


  return (
    <Text { ...props } />
  )
}