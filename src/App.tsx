import { useState } from 'react'
import './App.css'

function Entry(props: any) {
  const [open,setOpen] = useState(false)
  return (
    <div onClick={()=>{setOpen(!open)}} className="entry">
      <div className="entry-title">
        {props.image ? (<img className="entry-title-image" src={props.image}></img>) : null}
        <div className="entry-title-text">
          <h2 className="entry-title-name"><span>{props.title}</span><span className="entry-title-year">{props.year}</span></h2>
          <p>{props.subtitle}</p>
        </div>
      </div>
      <div className={"entry-expandable" + (open ?" entry-expanded":"")}>
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
        <Entry title="Ocean game (NAME TBA)" year="In progress" subtitle="Stuff" platforms="Windows Mac">A video game currently in progress</Entry>
        <Entry title="Rose curve visualizer" year="2023" subtitle="A mesmerizing garden of animated mathematical roses, inviting exploration with playful and intuitive controls." platforms="Web" links={[<a href="https://davetheknave.github.io/Rose-Curve-Visualizer">View now</a>, <a href="https://github.com/davetheknave/Rose-Curve-Visualizer">View source code</a>]}>This online garden transforms mathematical beauty into a fun and mesmerizing experience. Centered around the idea of exploration and play, the controls are designed to let curiosity guide the user to explore a variety of animated rose curves.</Entry>
        <Entry title="Personal Portfolio " year="2023" subtitle="You're looking at it!"></Entry>
        <Entry title="Divine law" year="2021" image="DivineLawTitle.png" subtitle="My and my sister's entry to AI and Games Jam 2021. This is a video game about an angel that defies the laws of physics to stop a serpent from breaking into the Garden of Eden."></Entry>
        <Entry title="Old Portfolio sites" subtitle="Previous versions of my portfolio. Kept here for digital archaeologists."></Entry>
        <Entry title="D-Chess" year="2018" subtitle="A five-dimensional chess game. Made for 2 players."></Entry>
      </div>
    </>
  )
}

export default App
