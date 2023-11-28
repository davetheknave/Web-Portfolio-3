import { useState } from 'react'
import './App.css'
import { data } from './Data.tsx'

function Entry(props: any) {
  const [open, setOpen] = useState(false)
  return (
    <div onClick={() => { setOpen(!open) }} className="entry">
      <div className="entry-title">
        {props.image ? (<img className="entry-title-image" src={props.image}></img>) : null}
        <div className="entry-title-text">
          <h2 className="entry-title-name"><span>{props.title}</span><span className="entry-title-year">{props.year}</span></h2>
          <p>{props.subtitle}</p>
        </div>
      </div>
      <div className={"entry-expandable" + (open ? " entry-expanded" : "")}>
        <p>
          {props.children}
        </p>
        {props.platforms !== undefined ? (<h3>Platforms</h3>) : ""}
        <p>{props.platforms}</p>
        {props.links !== undefined && props.links.length > 0 ? (<h3>Links</h3>) : ""}
        <p className="entry-links">{props.links}</p>
      </div>
    </div>
  )
}

function App() {
  return (
    <>
      <header>
        <h1>David Stearns</h1>
        <p>I am a software developer, but I make things besides software, too.</p>
        <div className="socials">
          <a href="mailto:dave.j.stearns@gmail.com">Email</a>
          <a href="http://linkedin.com/in/david-stearns-70727437">LinkedIn</a>
          <a href="http://github.com/davetheknave">GitHub</a>
        </div>
      </header>
      <div id="page">
        {data().map((d) => (
          <Entry
            title={d.name}
            year={d.year}
            subtitle={d.oneline}
            platforms={d.platforms}
            image={d.thumbnail}
            links={d.links.map((a)=>(<a href={a.link}>{a.title}</a>))}
          >
            {d.description}
            </Entry>
        ))}
      </div>
    </>
  )
}

export default App
