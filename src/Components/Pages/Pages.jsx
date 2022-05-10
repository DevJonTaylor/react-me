import { propSetup } from '../Helpers'
import Projects from './Projects'
import AboutMe from './AboutMe'
import ContactMe from './ContactMe'

export default function(oldProps) {
  const { currentPage, props } = propSetup(oldProps, 'currentPage')

  const renderPage = () => {
    switch(currentPage) {
      case 'Projects':
        return ( <Projects key={1} /> )
      case 'About Me':
        return ( <AboutMe key={2} /> )
      case 'Contact Me':
        return ( <ContactMe key={3} /> )
      default:
        return ( <Projects key={1} /> )
    }
  }

  return (
    <main className="main" {...props}>
      <section className="section">
        {renderPage()}
      </section>
    </main>
  )
}