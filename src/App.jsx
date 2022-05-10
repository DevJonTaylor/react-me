import './assets/styles/main.scss'
import { useState, useEffect } from 'react'
import { Navbar } from "./Components/Navbar";
import { LoadingScreen } from "./Components/LoadingScreen";
import { Pages } from './Components/Pages'

let finishedFirstRender = false

export default function App() {
  const [ loading, setLoading ] = useState(true)
  const [ currentPage, setPage ] = useState('Projects')

  const changePage = page => {
    setPage(page)
  }

  useEffect(() => {
    if(!finishedFirstRender) {
      finishedFirstRender = true
      setTimeout(() => {
        setLoading(false)
      }, 2000)
    }
  })

  return (
    <div>
      <Navbar
        currentPage={currentPage}
        changePage={changePage}
      />
      <Pages currentPage={currentPage} />
    </div>
  )
}