import { useState } from 'react'
import './App.css'
import { data as dataFetcher } from './Data.tsx'
import {Entry} from './entry.tsx';

function App() {
  const [data, setData] = useState(dataFetcher());
  const [open, setOpen] = useState<Boolean[]>([]);
  function closeAll(i: number) {
    let newArray = new Array(data.length).fill(false);
    newArray[i] = !open[i];
    setOpen(newArray);
  }
  return (
    <>
      <header>
        <h1>David Stearns</h1>
        <p>Let's make something together</p>
        <div className="socials">
          <a href="mailto:dave.j.stearns@gmail.com">Email</a>
          <a href="http://linkedin.com/in/david-stearns-70727437">LinkedIn</a>
          <a href="http://github.com/davetheknave">GitHub</a>
        </div>
      </header>
      <div id="page">
        {data.map((d, i) => (
          <Entry
            key={i}
            title={d.name}
            year={d.year}
            subtitle={d.oneline}
            platforms={d.platforms}
            thumbnail={d.thumbnail}
            images={d.images}
            links={d.links.map((a,ii) => (<a key={ii} href={a.link}>{a.title}</a>))}
            open={open[i]}
            click={() => closeAll(i)}
          >
            {d.description}
          </Entry>
        ))}
      </div>
    </>
  )
}

export default App
