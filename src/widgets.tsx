import { ReactElement, useState, useCallback, useEffect } from 'react'
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faCircle } from '@fortawesome/free-solid-svg-icons'

export function EmblaCarousel(props: any) {
  const [emblaRef, emblaApi] = useEmblaCarousel()
  const scrollPrev = useCallback(() => { if (emblaApi) emblaApi.scrollPrev() }, [emblaApi])
  const scrollNext = useCallback(() => { if (emblaApi) emblaApi.scrollNext() }, [emblaApi])
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const slides = props.children.map((c: ReactElement, i: number) =>
  (<div key={i} className="entry-gallery embla__slide">
    {c}
  </div>)
  )
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  )
  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])
  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])
  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on('reInit', onInit)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onInit, onSelect])
  return (
    <div className="embla relative">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides}
        </div>
      </div>
      <div className="embla__buttons text-3xl bottom-0 h-full w-full flex justify-between items-center mt-1">
        <button className="embla__prev" onClick={scrollPrev}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
      <div className="embla__dots flex justify-center gap-2">
        {scrollSnaps.map((_, index) => (
          <button
            type="button"
            key={index}
            onClick={() => scrollTo(index)}
            className={'embla__dot'.concat(
              index === selectedIndex ? ' embla__dot--selected' : ''
            )}
          ><FontAwesomeIcon icon={faCircle} /></button>
        ))}
      </div>
        <button className="embla__next" onClick={scrollNext}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
}
export function Tag(props: any) {
  const replacements = {
    "mac": "macOS",
    "windows": "Windows",
    "linux": "Linux",
    "web": "Web"
  }
  const text = replacements[props.children as keyof typeof replacements] || props.children
  return (
    <span className="tag">{text}</span>
  )
}