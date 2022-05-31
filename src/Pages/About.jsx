import { Fragment } from 'react'
import Text from '../Components/Daisy/Text'
import { useId } from 'react'
import { TextCard } from '../Components/Daisy/Card'
import Radial from '../Components/Daisy/DataDisplay/Radial'

export default function () {
  const GithubLink = () => (
    <a href="https://www.github.com/devjontaylor" target="_blank" className="text-primary">GitHub.</a>
  )
  const textArr = [
    {
      title: 'Family',
      str: ``
    },
    {
      title: 'Code',
      str: `I really enjoy tinkering with anything reactive like (React, Vue, Svelte) if I am going to be working on the 
    frontend.  If we go to the backend I then look for automation.  Anything from commandline applications, scaffolding,
     system applications, and I really dig API servers.`
    }
  ].map(text => ({ ...text, key: useId() }))

  const skills = [
    {
      name: 'JavaScript',
      skill: 75
    },
    {
      name: 'PHP',
      skill: 70
    },
    {
      name: 'React',
      skill: 60
    },
    {
      name: 'Vue',
      skill: 60
    }
  ].map(skill => {
    skill.key = useId()
    return skill
  })

  return (
    <Fragment>
      <Text h1 center xl6>
        About
        <Text legend primary xl2>Jon Taylor</Text>
      </Text>
      <div className="columns-1 mt-5">
        <TextCard title="Family">
          <Text p lg>
            I am a family first who enjoys hanging, puzzles, video games, movies, and projects. We play a bunch of Fortnite.
          </Text>
        </TextCard>
      </div>
      <div className="columns-2 bg-gradient-to-b from-accent rounded-xl">
        { skills.map(({ name, skill, key }) => (
          <div key={ key } className="flex justify-center my-2">
            <Radial value={ skill } size="7rem">{ name }</Radial>
          </div>
        )) }
      </div>
    </Fragment>
  )
}