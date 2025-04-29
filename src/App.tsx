import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { data as dataFetcher } from './Data.tsx'
import { ImageEntry } from './entry.tsx';
import { BigView } from './bigview.tsx';
import { Header } from './header.tsx';
import { ErrorPage } from './ErrorPage.tsx'
import { AspirePrivacy } from './Aspire-Privacy.tsx';


function App() {
  const [data] = useState(dataFetcher());
  function getSlug(title: string) {
    return title.replace(/[^A-Za-z0-9_]/g, "-").replace(/-+/g, "-");
  }
  const routes: any = data.map((d, i) => {
    return {
      path: "/" + getSlug(d.name),
      element:
        (
          <BigView key={i} className={("description" in d ? "" : " hidden")}
            data={d}
          />
        )
    }
  })
  routes.push({
    path: "/",
    element:
      <div id="gallery" className={"lg:relative w-full top-32 flex flex-col 2xl:flex-row flex-wrap gap-16 justify-center"}>
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
  })
  routes.push({
    path: "/Aspire-To-The-Stars/privacy",
    element : <AspirePrivacy />,
    errorElement: <ErrorPage />
  })
  const router = createBrowserRouter(routes);
  return (
    <>
      <Header bio={`I am a designer, developer, and artist. My passion is in creating experiences inspired by the world around me. I am perpetually learning, constantly expanding my skill set, so that I can continue punching above my weight.`} />
      <div id="page" className="lg:absolute left-64 pl-12 pr-12 w-full">
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
