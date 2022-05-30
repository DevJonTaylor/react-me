import { createStore } from 'redux'

// action types
const DARK_MODE = 0

export function reducer(state, action) {
  if(state === undefined) return {
    darkMode: true,
    dark: 'luxury',
    light: 'autumn',
  }

  switch(action.type) {
    case DARK_MODE:
      return {
        ...state,
        payload: action.payload
      }
    default:
      return { ...state }
  }
}

const themeStore = createStore(reducer)

export default themeStore