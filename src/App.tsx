import { useState } from 'react'
import './App.css'
import { data as dataFetcher } from './Data.tsx'
import { HorizontalEntry, ImageEntry } from './entry.tsx';
import { BigView } from './bigview.tsx';
import { Header } from './header.tsx';

function App() {
  const [data, setData] = useState(dataFetcher());
  const [currentDataEntry, setCurrentDataEntry] = useState({});
  function open(d: typeof data[0]) {
    setCurrentDataEntry(d);
  }
  return (
    <>
      <Header />
      <div id="page" className="absolute top-40 left-64">
        <div className={"relative top-32 flex flex-wrap gap-16 justify-center"+("description" in currentDataEntry ? " hidden" : "")}>
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
              onClick={() => open(d)}
            >
              {d.description}
            </ImageEntry>
          ))}
        </div>
        <BigView className=""
          data={currentDataEntry}
          back={()=>setCurrentDataEntry({})}
        />
      </div>
    </>
  )
}

export default App
