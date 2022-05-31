import { Fragment, useId } from 'react'
import { CardBody, CardContainer, CardImage } from '../Components/Daisy/Card'
import { Button } from '../Components/Daisy/Buttons'
import Text from '../Components/Daisy/Text'
import { useResponsive } from '../Hooks'

export default function () {
  const years = new Date().getFullYear() - 2017
  const buttons = [
    'Projects',
    'Contact Me',
    'About Me',
    'Blog'
  ].map(text => ({
    text,
    url: `/${text.toLowerCase().split(' ')[0]}`,
    key: useId()
  }))

  return (
    <Fragment>
      <div className="basis-full">
        <Text h1 center xl6>
          Jon Taylor
          <Text legend primary xl2>Automate Everything</Text>
        </Text>
      </div>
      <div className="columns-1 mb-2">
        <CardContainer compact bordered className="w-full bg-gradient-to-t from-accent">
          <CardImage
            className="mt-5 rounded-[3em]"
            img='/src/assets/images/me.jpg'
            desc="Jon Taylor's Gravatar"
          />
          <CardBody>
            <Text p lg>
              My name is Jon Taylor and I am a Full Stack Web Developer!
            </Text>
            <Text p lg>
              I have over {years} years experience.
              I love to work with reactive frameworks (React, Vue, or Svelte), and creating and maintaining API servers.
            </Text>
          </CardBody>
        </CardContainer>
      </div>
      <div className="columns-2 md:columns-4">
        { buttons.map(
          ({ text, url, key}) => (
            <div className="basis-1/2 mb-2" key={key}>
              <Button className="w-full" internal primary to={url}>{text}</Button>
            </div> ) ) }
      </div>

    </Fragment>
  )
}