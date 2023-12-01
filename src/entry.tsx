import { ReactElement, useState, useCallback } from 'react'
import { EmblaCarousel, Tag } from './widgets'

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
        <div className="h-1">
        <EmblaCarousel>
          {props.images.map((i: string) =>
            (<img src={i}></img>)
          )}
        </EmblaCarousel>
        </div>
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

    <div className="w-5/12 h-80 mb-20">
      {props.thumbnail ? (<img onClick={() => { props.onClick() }}className="h-full w-full object-cover mb-2 cursor-pointer" src={props.thumbnail}></img>) : null}
      <div className="flex flex-col justify-end">
        <h2 className="flex justify-between text-s"><span>{props.title}</span><span>{props.year}</span></h2>
        <p className="text-sm">{props.subtitle}</p>
      </div>
    </div>
  )
}