import { useEffect } from 'react'
import logo from './assets/images/logo.svg'
import cardImg from './assets/images/neuropype.png'
import { gsap } from 'gsap'
import './App.scss'



function startGsap() {

  //TweenLite.set('.card',{scaleY:0.8, transformOrigin:'center'});

  gsap.to(".card-shadow", 1, {
    boxShadow: 'inset 0 0 25px 100px orange'
  })

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
      <header className="App-header">
        <img alt="my logo" className="logo" src={ logo } />
        <div className="outer-card">
          <div className="card"></div>
          <img src={ cardImg } className="inner-card" alt="Neuropype" />
        </div>
      </header>
    </div>
  )
}

export default App
