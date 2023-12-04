import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { data as dataFetcher } from './Data.tsx'
import { ImageEntry } from './entry.tsx';
import { BigView } from './bigview.tsx';
import { Header } from './header.tsx';
import { ErrorPage } from './ErrorPage.tsx'


function App() {
  const [data] = useState(dataFetcher());
  const [currentDataEntry, setCurrentDataEntry] = useState({});
  function getSlug(title: string) {
    return title.replace(/[^A-Za-z0-9_]/g, "-");
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element:
        <div id="gallery" className={"lg:relative w-full top-32 flex flex-col 2xl:flex-row flex-wrap gap-16 justify-center" + ("description" in currentDataEntry ? " hidden" : "")}>
          {data.map((d, i) => (
            <ImageEntry
              key={i}
              title={d.name}
              slug={getSlug(d.name)}
              year={d.year}
              subtitle={d.oneline}
              platforms={d.platforms}
              thumbnail={d.thumbnail}
              images={d.images}
              links={d.links.map((a, ii) => (<a key={ii} href={a.link}>{a.title}</a>))}
            >
              {d.description}
            </ImageEntry>
          ))}
        </div>,
        errorElement: <ErrorPage />
    },
  ]);
  return (
    <>
      <Header bio={`I am a designer, developer, and artist. My passion is in creating experiences inspired by the world around me. I am perpetually learning, constantly expanding my skill set, so that I can continue punching above my weight.`} />
      <div id="page" className="lg:absolute left-64 pl-12 pr-12 w-full">
        <RouterProvider router={router} />
        <BigView className={("description" in currentDataEntry ? "" : " hidden")}
          data={currentDataEntry}
        />
      </div>
    </>
  )
}

export default App
