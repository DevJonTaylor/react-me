import { Card, CardBody, CardImage, CardText, CardTitle } from '../Card'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
projectsWithId.map( ({
                       key,
                       image,
                       title,
                       desc,
                       github,
                       deployed,
                       tags
                     }) => {
  for(const tag of tags) {
    if(availableTags.find(({ name, isOn }) => tag === name && isOn)) {
      return {
        id: key,
        renderItem: (
          <Card h={100}>
            <CardImage src={`./src/assets/images/${image}`} alt={`${title} Screenshot`} />
            <CardBody>
              <CardTitle center truncate>{title}</CardTitle>
            </CardBody>
          </Card>
        )
      }
    }
  }
})

function Parallax({ image, title,  }) {
  return (
    <div></div>
  )
}

export default Parallax