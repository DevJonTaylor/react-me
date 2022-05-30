import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

export default function({ config, onParticlesLoad }) {
  const initParticles = async main => await loadFull(main)

  const options = {
    fullScreen: {
      enable: true,
      zIndex: -1
    }, // Handle the display measurements of Particles

    fpsLimit: 120,
    // 120 is better than 60.
    // 60 is a little glitch.
    // Helps when props are reactive

    preset: 'bigCircles',
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#ffffff"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: "images/github.svg",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 0.7,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 100,
        random: true,
        anim: {
          enable: true,
          speed: 20,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: false,
        distance: 150,
        color: "#ffffff",
        opacity: 1,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    retina_detect: true
  }

  return (
    <Particles
      init={initParticles}
      options={{
        ...options,
        ...!config ? {} : config
      }}
    />
  )
}

