export function HorizontalEntry(props: any) {
  return (
    <div
      onClick={() => { props.onClick() }}
      className={"horizontal-entry p-3 w-full mr-8 cursor-pointer" + (props.open ? " entry-expanded" : "")}>
      <div className="entry-title w-full flex gap-4 items-center">
        {props.thumbnail ?
          (<img
            className="entry-title-image max-h-96 max-w-xl"
            src={props.thumbnail} />
          ) : null}
        <div className="entry-title-text w-full">
          <h2 className="entry-title-name flex justify-between">
            <span>{props.title}</span>
            <span>{props.year}</span>
          </h2>
          <p className="entry-title-subtitle max-w-xs">{props.subtitle}</p>
        </div>
      </div>
    </div>
  )
}
export function ImageEntry(props: any) {
  return (
    <div className="2xl:w-5/12 2xl:mb-20">
      {props.thumbnail ? (
        <img
          className="w-full object-contain mb-2 cursor-pointer"
          onClick={() => { props.onClick() }}
          src={props.thumbnail}
        />
      ) : null}
      <div className="flex flex-col justify-end">
        <h2 className="flex justify-between">
          <span>{props.title}</span>
          <span>{props.year}</span>
        </h2>
        <p className="">{props.subtitle}</p>
      </div>
    </div>
  )
}