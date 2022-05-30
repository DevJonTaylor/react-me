import { Fragment, useId } from 'react'
import { CardBody, CardContainer, CardImage } from '../Components/Daisy/Card'
import { Button } from '../Components/Daisy/Buttons'
import Text from '../Components/Daisy/Text'

export default function () {
  const makeButton = str => ({
    text: str,
    to: `/${str.split(' ')[0].toLowerCase()}`,
    key: useId()
  })
  const years = new Date().getFullYear() - 2017
  const buttons = [
    makeButton('Projects'),
    makeButton('Contact Me'),
    makeButton('About Me'),
    makeButton('Blog')
  ]

  return (
    <Fragment>
      <h1 className="text-center text-6xl">
        Jon Taylor
        <legend className="text-primary text-2xl">Automate Everything</legend>
      </h1>
      <CardContainer className="w-full z-0" glass>
        <CardImage
          className="mt-5 rounded-[3em]"
          img='/src/assets/images/me.jpg'
          desc="Jon Taylor's Gravatar"
        />
        <CardBody>
          <Text p sizeLg>
            My name is Jon Taylor and I am a Full Stack Web Developer!
          </Text>
          <Text p sizeLg>
            I have over {years} years experience. I love to work with reactive frameworks (React, Vue, or Svelte),
            and creating and maintaining API servers.
          </Text>
        </CardBody>
      </CardContainer>
      <div className="flex flex-wrap">
        { buttons.map(
            ({ text, to, key}) => (
              <div className="basis-1/2 p-2" key={key}>
                <Button className="w-full" internal btnPrimary to={to}>{text}</Button>
              </div> ) ) }
      </div>

    </Fragment>
  )
}