import { useState, useId } from 'react'
import { projects, tags, CLIENT, VUE, HTML5, JS, SVELTE, CSS, NODE, JSX, PHP } from '../../projects'
import { FaJs, FaHtml5, FaNode, FaReact, FaVuejs, FaCss3, FaPhp, FaFile } from 'react-icons/fa'
import { SiSvelte } from 'react-icons/si'
import { Button } from '../Buttons'
import { Container, Row, Col } from '../Layout'
import { Text } from '../Helpers'

function isShowing(project, availableTags) {
  for(const tag of project.tags)
    if(availableTags.find(t => t.name === tag)) return true

  return false
}

const getIcon = name => {
  switch(name) {
    case JS:
      return (<FaJs />)
    case NODE:
      return (<FaNode />)
    case CSS:
      return (<FaCss3 />)
    case CLIENT:
      return (<FaFile />)
    case JSX:
      return (<FaReact />)
    case SVELTE:
      return (<SiSvelte />)
    case VUE:
      return (<FaVuejs />)
    case PHP:
      return (<FaPhp />)
    case HTML5:
      return (<FaHtml5 />)
  }
}

export default function() {
  const projectsWithId = projects.map(project => {
    project.key = useId()
    return project
  })
  const [ availableTags, setTags ] = useState(tags.map(tag => {
    tag.key = useId()
    return tag
  }))

  // projectsWithId.map( ({
  //                        key,
  //                        image,
  //                        title,
  //                        desc,
  //                        github,
  //                        deployed,
  //                        tags
  //                      }) => {
  //   for(const tag of tags) {
  //     if(availableTags.find(({ name, isOn }) => tag === name && isOn)) {
  //       return {
  //         id: key,
  //         renderItem: (
  //           <Card h={100}>
  //             <CardImage src={`./src/assets/images/${image}`} alt={`${title} Screenshot`} />
  //             <CardBody>
  //               <CardTitle center truncate>{title}</CardTitle>
  //             </CardBody>
  //           </Card>
  //         )
  //       }
  //     }
  //   }
  // })

  return (
    <article>
      <Container>
        <Row>
          <Col>
            <Text h1 center>Projects</Text>
          </Col>
        </Row>
        <Row center>
          <Col a>
            <Text h2 center>Filters</Text>
          </Col>
            {
              availableTags.map(tag => {
              return (
                <Col className="text-center" mt={3} pe={0} key={tag.key} >
                  <Button
                    onClick={() => setTags(availableTags.map(t => {
                      if(t.name === tag.name) t.isOn = !t.isOn
                      return t
                    }))} shadow info circle outline={!tag.isOn}>{getIcon(tag.name)}</Button>
                </Col>
              )
            })}
        </Row>
        <Row center mt={4}>

        </Row>
      </Container>
    </article>
  )
}