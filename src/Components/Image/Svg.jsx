import Image from './Image'

export default function( { desc, fileName, url, className, ...props }) {
  const Img = () => (
    <Image file={`${fileName}.svg`} desc={desc} { ...props } />
  )
  return url
    ? ( <a href={ url } className={ className }><Img /></a> )
    : ( <div className={ className }><Img /></div> )
}