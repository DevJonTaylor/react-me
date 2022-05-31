import Link from './Link'
import { useId } from 'react'
import { Fragment } from 'react'
import { socials, navLinks } from './Links'
import { Button } from '../Daisy/Buttons'

export default function () {
  for(const i in socials) socials[i].key = useId()
  for(const i in navLinks) navLinks[i].key = useId()

  return (
    <Fragment>
      <div className="basis-1/4">
        <Link to="/">
          <img className="w-full" src="/src/assets/images/logo2.svg" alt="Jon Taylor's Logo" />
        </Link>
      </div>
      <div className="basis-1/2 flex justify-center items-center btn-group">
        {navLinks.map(
          ({ url, text, key }) => (
          <Button to={ url } key={ key } internal activeClass="btn-active">
            { text }
          </Button>
        ))}
      </div>
      <div className="basis-1/4 flex justify-end">
        {socials.map(
          ({ url, icon, key }) => (
            <Button link newTab circle outline className="ml-2" to={ url } key={ key }>{ icon }</Button>
          )
        )}
      </div>
    </Fragment>
  )
}