import './scss/App.scss'
import {
  WebGLRenderer,
  PerspectiveCamera,
  Scene,
  BoxGeometry,
  MeshPhongMaterial,
  Mesh,
  DirectionalLight,
  Color
} from 'three'

// When setting camera be sure to set position.z = 2
const CANVAS_SELECTOR = '#scene'
const FOV_ASPECT_NEAR_FAR = [75, 2, 0.1, 5]
const BOX_WIDTH_HEIGHT_DEPTH = [1, 1, 1]
const LIGHT_COLOR_INTENSITY = [0xffffff, 1]
const LIGHT_POSITION_X_Y_Z = [-1, 2, 4]

function newGL(selector) {
  if(selector instanceof HTMLCanvasElement)
    return new WebGLRenderer({ canvas: selector, alpha: true })

  const canvas = document.querySelector(selector)

  if(!canvas) throw new Error('NO_ELEMENT')
  if(!(canvas instanceof HTMLCanvasElement)) throw new Error('NOT_CANVAS')

  return new WebGLRenderer({ canvas, alpha: true })
}

function newCamera(fov, aspect, near, far) {
  return new PerspectiveCamera(fov, aspect, near, far)
}

function newMaterial(color) {
  return new MeshPhongMaterial({ color })
}

function newGeo(boxWidth, boxHeight, boxDepth) {
  return new BoxGeometry(boxWidth, boxHeight, boxDepth)
}

function newCube(geo, color, x) {
  const geoArgument = Array.isArray(geo) ? newGeo(...geo) : geo
  const colorArgument = typeof(color) === 'number' ? newMaterial(color) : color

  const cube = new Mesh(geoArgument, colorArgument)

  if(x) cube.position.x = x

  return cube
}

function newLight(color, intensity) {
  const light = new DirectionalLight(color, intensity)
  light.position.set(...LIGHT_POSITION_X_Y_Z)

  return light
}

function setScene() {
  const director = {
    gl: newGL(CANVAS_SELECTOR),
    camera: newCamera(...FOV_ASPECT_NEAR_FAR),
    scene: new Scene(),
    cubes: [
      newCube(BOX_WIDTH_HEIGHT_DEPTH, 0x44aa88, 0),
      newCube(BOX_WIDTH_HEIGHT_DEPTH, 0x4488aa, -2),
      newCube(BOX_WIDTH_HEIGHT_DEPTH, 0xaa4488, 2)
    ],
    light: newLight(...LIGHT_COLOR_INTENSITY),
    getCanvas() {
      return this.gl.domElement
    },
    placeScene() {
      this.camera.position.z = 2
      this.cubes.forEach(cube => {
        this.scene.add(cube)
      })

      this.gl.setClearColor(0x000000, 0)
      //this.scene.background = new Color('transparent')
      this.scene.add(this.light)
    },
    /**
     *
     * @param divide
     * @returns {{width: number, weight: number}|number}
     */
    getClient(divide = false) {
      const { clientWidth, clientHeight } = this.getCanvas()
      return !divide ? { width: clientWidth, height: clientHeight } : clientWidth / clientHeight
    },
    measureAndSizeDisplay() {
      const canvas = this.getCanvas()
      const { width, height } = this.getClient()
      const needToResize = canvas.width !== width || canvas.height !== height
      if(needToResize) this.gl.setSize(width, height, false)
      return needToResize
    },
    updateProjection() {
      this.camera.aspect = this.getClient(true)
      this.camera.updateProjectionMatrix()
    },
    action() {
      this.placeScene()

      const render = time => {
        time *= .001

        if(this.measureAndSizeDisplay()) this.updateProjection()

        this.cubes.forEach((cube, i) => {
          const speed = 1 + i * .1
          const rotation = time * speed
          cube.rotation.x = rotation
          cube.rotation.y = rotation
        })
        this.gl.render(this.scene, this.camera)

        requestAnimationFrame(render)
      }

      requestAnimationFrame(render)
    }
  }

  director.action()
}

function Cube() {
  window.onload = () => setScene()

  return (
    <canvas id="scene"></canvas>
  )
}

export default Cube