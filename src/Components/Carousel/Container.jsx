import { useSpringCarousel } from 'react-spring-carousel'
import { nanoid } from 'nanoid'

function setupCarouselItems(cItems) {
  return cItems.map(([item, thumb]) => ({
    id: nanoid(),
    renderItem: ({item}),
    renderThumb: ({thumb})
  }))
}

function Container({ cItems }) {
  const { carouselFragment, thumbFragments } = useSpringCarousel({
    withLoop: true,
    withThumbs: true,
    items: setupCarouselItems(cItems)
  })

  return (
    <div className="carousel-section">
      <div className="carousel-main-container">{carouselFragment}</div>
      <div className="carousel-thumb-container">{thumbFragments}</div>
    </div>
  )
}

export default Container