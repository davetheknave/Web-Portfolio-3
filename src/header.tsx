import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn as linkedin, faGithub as github } from '@fortawesome/free-brands-svg-icons'
import { faAt as email } from '@fortawesome/free-solid-svg-icons'

export function Header() {
  return (
    <header className="lg:fixed lg:w-96 lg:h-full text-center flex flex-col justify-center mb-8">
      <div className="lg:ml-16 lg:mr-16 m-4">
        <h1 className="mb-8">David Stearns</h1>
        <p className="mb-8">I am a designer, developer, and artist. I create things that I find interesting, and always seek to learn everything there is to learn, so that I can continue punching above my weight.</p>
        <p className="">Let's make something together.</p>
      </div>
      <div id="socials" className="font-bold flex flex-row gap-16 text-3xl items-center justify-center lg:flex-col">
        <a className="w-0 mr-4" href="mailto:dave.j.stearns@gmail.com">
          <FontAwesomeIcon icon={email} />
        </a>
        <a className="w-0 mr-4" href="http://linkedin.com/in/david-stearns-70727437">
          <FontAwesomeIcon icon={linkedin} />
        </a>
        <a className="w-0 mr-4" href="http://github.com/davetheknave">
          <FontAwesomeIcon icon={github} />
        </a>
      </div>
    </header>
  )
}