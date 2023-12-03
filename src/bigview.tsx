import { EmblaCarousel, Tag } from './widgets'
import Markdown from 'react-markdown'

export function BigView(props: any) {
  const platforms = props.data.platforms !== undefined && props.data.platforms.length > 0 ? (
    <>
      <h3>Platforms</h3>
      <p>
        {props.data.platforms.map((p: string, i: number) =>
          (<Tag key={i}>{p}</Tag>)
        )}
      </p>
    </>
  ) : "";

  const links = props.data.links !== undefined && props.data.links.length > 0 ?
    (
      <>
        <p className="inline-flex flex-col gap-1 mb-8 underline underline-offset-4">{props.data.links.map((a, i: number) => (<a className="mb-1" key={i} href={a.link}>{a.title}</a>))}</p>
      </>
    ) : "";

  const images = props.data.images !== undefined && props.data.images.length > 0 ? (
    <EmblaCarousel>
      {props.data.images.map((image: string, i: number) =>
        (<img key={i} src={image} className="object-scale-down"></img>)
      )}
    </EmblaCarousel>
  ) : "";


  return (
    <>
      <div className={"relative lg:top-12 flex flex-col justify-center items-center w-full mb-8" + props.className}>
        <a onClick={props.back} className="underline underline-offset-4">Back</a>
        <div className="max-w-3xl">
          <h2 className="flex justify-between notext-2xl mb-4 w-full">
            <span>
              {props.data.name}
            </span>
            <span>
              {props.data.year}
            </span>
          </h2>
          <p className="">
            <Markdown>
              {props.data.description}
            </Markdown>
          </p>
          {links}
        </div>
          {images}
        {/* <div className="absolute -bottom-36 flex justify-center w-full text-3xl mb-8">
          <FontAwesomeIcon onClick={props.back} className="cursor-pointer" icon={faXmark} />
        </div> */}
      </div>
    </>
  );
}