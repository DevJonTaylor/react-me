import logo from './assets/images/logo.svg'
import neuropypeImage from './assets/images/neuropype.png'
import './scss/App.scss'
import Cube from './Cube'

function ProjectCard({ className, cardImg, children }) {
  return (
    <div className={!className ? 'outer-card' : className + ' outer-card'}>
      <div className="card"></div>
      <img src={ cardImg } className="inner-card" alt={ children } />
      <div className="card-title">{ children }</div>
    </div>
  )
}

function getContext(canvas) {
  const context = canvas.getContext('2d')

  context.font = "40px Belwe Bold, Georgia, Times, Times New Roman, serif";

  return context
}

function applyShadow(canvas) {
  const context = getContext(canvas)

  context.shadowColor = 'black'
  context.shadowBlur = 5;
  //context.textAlign = "center";

  return context
}

function applyToText(canvas, text) {
  const context = getContext(canvas)

  context.fillStyle = "white";

  return context
}

function paintCanvas(context, string) {
  let angle = Math.PI * 0.40; // in radians
  let radius = 150


  context.translate(-3, 180);

  for (let i = 0; i < string.length; i++) {
    context.rotate(angle / string.length);
    context.save();
    context.translate(0, -1 * radius);
    context.fillText(string[i], 0, 0);
    context.restore();
  }
}

function CardContainer() {
  /*The window.onload function will run as
       soon as the window loads in the browser */
  window.onload = function () {
    let canvas = document.getElementById("canv")
    let string = "Nueropype"
    const shadow = applyShadow(canvas, string)
    const text = applyToText(canvas, string)

    paintCanvas(shadow, string)
    paintCanvas(text, string)
    canvas.style.transform = "rotateZ(-38deg) translateY(-55px) translateX(34px) skewX(-4deg) translate3d(7px, -23px, 0px)";
  };

  return (
    <main className="card-container" flex="jc-sa ac-c">

      <ProjectCard className="hovering-1 top-0 left-0" cardImg={ neuropypeImage }>
        <canvas id="canv" className=""/>
      </ProjectCard>
    </main>
  )
}

function App() {
  return (
    <div className="App">

      <header className="App-header" flex="fd-c ac-c jc-c">
        <div className="relative" flex="jc-c ac-c" col="">
          <div className="cover-screen backdrop-blur" col=""></div>
          <img alt="DevJonTaylor" col-7="" className="logo" src={ logo } />
        </div>
        <CardContainer />
        <Cube />
      </header>
    </div>
  )
}



// export default function() {
//   return (
//     <main>
//       <Cube />
//     </main>
//   )
// }

export default App

