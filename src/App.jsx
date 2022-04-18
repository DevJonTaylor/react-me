import logo from './assets/images/logo.svg'
import neuropypeImage from './assets/images/neuropype.png'
import './scss/App.scss'

function ProjectCard({ cardImg, children }) {
  return (
    <div className="outer-card">
      <div className="card"></div>
      <img src={ cardImg } className="inner-card" alt={ children } />
      <div className="card-title">{ children }</div>
    </div>
  )
}

function CardContainer() {
  return (
    <main className="card-container" flex="jc-sa ac-c">
      <ProjectCard cardImg={ neuropypeImage }>Neuropype</ProjectCard>
      <ProjectCard cardImg={ neuropypeImage }>Neuropype</ProjectCard>
      <ProjectCard cardImg={ neuropypeImage }>Neuropype</ProjectCard>
      <ProjectCard cardImg={ neuropypeImage }>Neuropype</ProjectCard>
      <ProjectCard cardImg={ neuropypeImage }>Neuropype</ProjectCard>
    </main>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header" flex="fd-c ac-c jc-c">
        <div className="relative" flex="jc-c ac-c" col="">
          <img alt="DevJonTaylor" col-7="" className="logo" src={ logo } />
        </div>
        <CardContainer />
      </header>
    </div>
  )
}

export default App

