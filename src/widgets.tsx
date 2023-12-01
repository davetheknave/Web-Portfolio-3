import { ReactElement, useState, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

export function EmblaCarousel(props: any) {
  const [emblaRef, emblaApi] = useEmblaCarousel()
  const scrollPrev = useCallback(() => { if (emblaApi) emblaApi.scrollPrev() }, [emblaApi])
  const scrollNext = useCallback(() => { if (emblaApi) emblaApi.scrollNext() }, [emblaApi])
  const slides = props.children.map((c: ReactElement, i: number) =>
  (<div key={i} className="entry-gallery embla__slide">
    {c}
  </div>)
  )
  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container h-96">
          {slides}
        </div>
      </div>
      <button className="embla__prev" onClick={scrollPrev}>
        Prev
      </button>
      <button className="embla__next" onClick={scrollNext}>
        Next
      </button>
    </div >
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