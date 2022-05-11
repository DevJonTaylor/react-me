import { snakeCase } from 'lodash'

function addToClass(props, classArray) {
  const { className } = props
  if(!Array.isArray(classArray)) classArray = [classArray]
  props.className = `${!className ? '' : className + ' '}${classArray.join(' ')}`
  return props
}

function setPrefix(prefix, string) {
  return !prefix ? string : `${prefix}-${string}`
}

function setColor(props, prefix, defaultColor = 'primary') {
  const colorClassName = []
  const colorsToCheckFor = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link']
  for(const color of colorsToCheckFor) {
    if(props[color]) {
      colorClassName.push(setPrefix(prefix, color))
      delete props[color]
    }
  }

  if(colorClassName.length === 0) {
    props[defaultColor] = true
    return setColor(props, prefix, defaultColor)
  }

  return addToClass(props, colorClassName)
}

function setNumber(props, className, value, defaultNumber = 1) {
  addToClass(props, `${className}-${value === true ? defaultNumber : value}`)
}

export function setSizes(props, prefix = 'col', defaultValue = 12) {
  const attrToCheck = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl']
  for(const size of attrToCheck) {
    if(props[size]) {
      const val = props[size]
      addToClass(props, setPrefix(prefix, `${size}-${val === true ? defaultValue : val}`))
      delete props[size]
    }
  }
}

function bsClasses(props) {
  const classes = ['shadow', 'shadowNone', 'shadowSm', 'shadowLg', 'circle', 'center']
  const numberClasses = ['p', 'py', 'px', 'ps', 'pe', 'pt', 'pb', 'm', 'mx', 'my', 'ms', 'me', 'mt', 'mb', 'w', 'h']

  for(const className of classes) {
    if(props[className]) {
      switch(className) {
        case 'circle':
          addToClass(props, 'rounded-circle')
          break
        case 'center':
          addToClass(props, ['d.flex', 'justify-content-center'])
          break
        default:
          addToClass(props, snakeCase(className))
          break
      }
      delete props[className]
    }
  }

  for(const nc of numberClasses) {
    if(props[nc] || props[nc] === 0) {
      setNumber(props, nc, props[nc])
      delete props[nc]
    }
  }
}

export { bsClasses, setNumber, addToClass, setColor }