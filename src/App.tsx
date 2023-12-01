import { useState } from 'react'
import './App.css'
import { data as dataFetcher } from './Data.tsx'
import { HorizontalEntry, ImageEntry } from './entry.tsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn as linkedin, faGithub as github } from '@fortawesome/free-brands-svg-icons'
import { faAt as email } from '@fortawesome/free-solid-svg-icons'

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
      <header className="fixed h-full text-center ml-8 flex flex-col justify-center gap-40">
        <div className="mt-32">
          <h1 className="mb-8">David Stearns</h1>
          <p className="">Let's make something together</p>
        </div>
        <div id="socials" className="font-bold flex flex-col gap-16 text-3xl">
          <a href="mailto:dave.j.stearns@gmail.com">
            <FontAwesomeIcon icon={email} />
          </a>
          <a href="http://linkedin.com/in/david-stearns-70727437">
            <FontAwesomeIcon icon={linkedin} />
          </a>
          <a href="http://github.com/davetheknave">
            <FontAwesomeIcon icon={github} />
          </a>
        </div>
      </header>
      <div id="page" className="absolute top-32 ml-20 grid grid-cols-3 gap-8 left-64">
        {data.map((d, i) => (
          <ImageEntry
            key={i}
            title={d.name}
            year={d.year}
            subtitle={d.oneline}
            platforms={d.platforms}
            thumbnail={d.thumbnail}
            images={d.images}
            links={d.links.map((a, ii) => (<a key={ii} href={a.link}>{a.title}</a>))}
            open={open[i]}
            click={() => closeAll(i)}
          >
            {d.description}
          </ImageEntry>
        ))}
      </div>
    </>
  )
}

export default App
