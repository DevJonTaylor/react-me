import { useEffect } from 'react'
import logo from './assets/images/logo.svg'
import card from './assets/images/card.svg'
import bg from './assets/images/arena.png'
import { gsap } from 'gsap'
import './App.css'



function startGsap() {

  //TweenLite.set('.card',{scaleY:0.8, transformOrigin:'center'});

  gsap.to(".card", 1, {
      boxShadow: '0 0 25px 25px orange'
  })

}

const style = {
  backgroundImage: `url("${bg}")`,
  backgroundPosition: 'bottom',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '100vh',
  width: '100%',

}
function App() {
  let isUsed = false

  useEffect(() => {
    if(!isUsed) {
      isUsed = true
      startGsap()
    }
  })

  return (
    <div className="App">
      <header className="App-header" style={ style }>
        <img alt="my logo" src={logo} />
        <img alt="project completed" className="card" src={ card } height="250px"/>
      </header>
    </div>
  )
}

export default App
