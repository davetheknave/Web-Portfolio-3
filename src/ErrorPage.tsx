import { useRouteError } from "react-router-dom"
export function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  let specificError;
  switch (error.status) {
    case 404:
      specificError = "What you're looking for could not be found"
      break;
    default:
      specificError = "An error has occurred: " + (error.statusText || error.message)
  }

  return (
    <div id="error" className="flex flex-col justify-center h-screen">
      <h2 className="text-9xl text-center mb-10">{error.status}</h2>
      <p className="text-center">{specificError}</p>
      <p className="text-center"><a href="/">Back to homepage</a></p>
    </div>
  )
}