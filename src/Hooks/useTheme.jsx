import { useState } from 'react'
const $query = (selector) => document.querySelector(selector)

const getLocalBoolean = (name, defaultValue) => {
  const value = localStorage.getItem(name)
  return typeof value === 'string'
    ? value === 'true'
    : defaultValue
}

const setLocalBoolean = (name, data) => localStorage.setItem(name, data ? 'true' : 'false')

export function useTheme(light, dark) {
  const html = $query('html')
  const firstDarkMode = getLocalBoolean('theme', true)

  light = !light ? 'autumn' : light
  dark = !dark ? 'luxury' : dark

  const [ isDark, setDarkMode ] = useState(firstDarkMode)
  const toggleDarkMode = () => setDarkMode(!isDark)
  html.dataset.theme = !isDark ? light : dark
  setLocalBoolean('theme', isDark)

  return [ isDark, toggleDarkMode ]
}