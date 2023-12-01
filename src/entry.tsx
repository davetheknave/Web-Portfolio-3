import { ReactElement, useState, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

function EmblaCarousel(props: any) {
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
        <div className="embla__container">
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

function Tag(props: any) {
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
export function HorizontalEntry(props: any) {
  return (
    <div onClick={() => { props.click() }} className={"horizontal-entry entry" + (props.open ? " entry-expanded" : "")}>
      <div className="entry-title">
        {props.thumbnail ? (<img className="entry-title-image" src={props.thumbnail}></img>) : null}
        <div className="entry-title-text">
          <h2 className="entry-title-name"><span>{props.title}</span><span className="entry-title-year">{props.year}</span></h2>
          <p className="entry-title-subtitle">{props.subtitle}</p>
        </div>
      </div>
      <div className={"entry-expandable"}>
        <p>
          {props.children}
        </p>
        <EmblaCarousel>
          {props.images.map((i: string) =>
            (<img src={i}></img>)
          )}
        </EmblaCarousel>
        {props.platforms !== undefined ? (
          <>
            <h3>Platforms</h3>
            <p>
              {props.platforms.map((p: string, i: number) =>
                (<Tag key={i}>{p}</Tag>)
              )}
            </p>
          </>
        ) : ""}
        {props.links !== undefined && props.links.length > 0 ? (<h3>Links</h3>) : ""}
        <p className="entry-links">{props.links}</p>
      </div>
    </div>
  )
}
export function ImageEntry(props: any) {
  return (
    <div onClick={() => { props.click() }} className="relative">
      <div>
        {props.thumbnail ? (<img src={props.thumbnail}></img>) : null}
        <div className="">
          <h2><span>{props.title}</span><span>{props.year}</span></h2>
          <p>{props.subtitle}</p>
        </div>
      </div>
      <div className="hidden">
        <p>
          {props.children}
        </p>
        <EmblaCarousel>
          {props.images.map((image: string, i: number) =>
            (<img key={i} src={image}></img>)
          )}
        </EmblaCarousel>
        {props.platforms !== undefined ? (
          <>
            <h3>Platforms</h3>
            <p>
              {props.platforms.map((p: string, i: number) =>
                (<Tag key={i}>{p}</Tag>)
              )}
            </p>
          </>
        ) : ""}
        {props.links !== undefined && props.links.length > 0 ? (<h3>Links</h3>) : ""}
        <p>{props.links}</p>
      </div>
    </div>
  )
}