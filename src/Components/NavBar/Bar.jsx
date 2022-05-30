import Link from './Link'
import { useId } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Fragment } from 'react'

export default function () {
  return (
    <Fragment>
      <div className="basis-1/3">
        <div className="w-1/2">
          <Link to="/">
            <img src="/src/assets/images/logo2.svg" alt="Jon Taylor's Logo" />
          </Link>
        </div>
      </div>
      <div className="basis-1/3 btn-group">
        {navLinks.map(
          ({ to, text, key }) => (
          <Link className="btn" to={to} activeClass="btn-active" key={key}>{text}</Link>
        ))}
      </div>
      <div className="basis-1/3 flex justify-end">
        {socials.map(
          ({ url, icon, key }) => (
            <a target="_blank" className="btn btn-circle btn-outline ml-2" href={url} key={key}>{icon}</a>
          )
        )}
      </div>
    </Fragment>
  )
}