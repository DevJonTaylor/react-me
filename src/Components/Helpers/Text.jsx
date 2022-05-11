import { addToClass, propSetup } from './'

const textTags = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'p',
  'span',
  'i',
  'b',
  'children',
  'center',
  'textSm',
  'textMd',
  'textLg',
  'textXl',
  'truncate'
]

function Text(tempProps) {
  const {
    h1, h2, h3, h4, h5, h6, p, span,
    i, b, center, children, textSm, textMd, textLg, textXl, truncate,
    props
  } = propSetup(tempProps, ...textTags)

  const addIfExists = (attrAndClassObject) => {
    for(const [classToAdd, attr] of Object.entries(attrAndClassObject)) {
      if(attr) addToClass(props, classToAdd)
    }
  }
  addIfExists({
    'fst-italic': i,
    'fw-bold': b,
    'text-center': center,
    'text-sm-start': textSm,
    'text-md-start': textMd,
    'text-lg-start': textLg,
    'text-xl-start': textXl,
    'text-truncate': truncate
  })

  return (
    <>
      {!h1 ? '' : <h1 {...props}>{children}</h1>}
      {!h2 ? '' : <h2 {...props}>{children}</h2>}
      {!h3 ? '' : <h3 {...props}>{children}</h3>}
      {!h4 ? '' : <h4 {...props}>{children}</h4>}
      {!h5 ? '' : <h5 {...props}>{children}</h5>}
      {!h6 ? '' : <h6 {...props}>{children}</h6>}
      {!p ? '' : <p {...props}>{children}</p>}
      {!span ? '' : <span {...props}>{children}</span>}
    </>
  )
}

export default Text