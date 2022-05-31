import { CardBody, CardContainer, CardTitle } from './index'
import Text from '../Text'
import addClass from '../addClass'

export default function ({ title, children, ...props }) {
  addClass('bg-gradient-to-t from-accent', props)
  return (
    <CardContainer bordered { ...props }>
      <CardTitle h2 xl2 className="justify-center">{ title }</CardTitle>
      <CardBody>
        { children }
      </CardBody>
    </CardContainer>
  )
}