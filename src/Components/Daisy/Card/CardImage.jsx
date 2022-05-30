export default function ({ img, desc, ...props }) {
  return (
    <figure>
      <img src={img} alt={desc} { ...props } />
    </figure>
  )
}