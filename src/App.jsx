import './assets/styles/main.scss'
import { useTheme, useResponsive } from './Hooks'
import { Fragment } from 'react'
import { Bubbles } from './Components/Particles'
import { Navigation } from './Components/NavBar'
import image from './assets/images/favicon.svg'
import { Home, Projects, Contact, About, Blog, Layout } from './Pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  const [ isDark, toggle ] = useTheme()
  const [ Small, Medium, Large, Resp ] = useResponsive()

  return (
    <Fragment>
      <BrowserRouter>
        <Navigation isDark={isDark} toggleDark={toggle}/>
        <Resp small medium>
          <Bubbles config={
            {
              backgroundMask: {
                enable: true,
                cover: {
                  color: !isDark ? '#fff' : 'rgba(0,0,0,0.14)',
                  opacity: 1
                }
              },
              background: {
                color: !isDark ? '#eee' : '#111',
                image: `url('${image}')`,
                position: 'center',
                repeat: 'repeat',
                size: '50%'
              }
            }
          } />
        </Resp>
        <Large>
          <Bubbles config={
            {
              backgroundMask: {
                enable: true,
                cover: {
                  color: !isDark ? '#fff' : 'rgba(0,0,0,0.14)', opacity: 1
                }
              },
              background: {
                color: !isDark ? '#eee' : '#111',
                image: `url('${image}')`,
                position: 'center',
                repeat: 'no-repeat',
                size: '50%'
              }
            }
          } />
        </Large>
        <main>
          <Routes>
            <Route path="/" element={<Layout isDark={isDark} toggleDark={toggle} />}>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route index path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
            </Route>
          </ Routes>
        </ main>
    </ BrowserRouter>
  </ Fragment>
  )
}