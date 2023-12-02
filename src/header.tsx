import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn as linkedin, faGithub as github } from '@fortawesome/free-brands-svg-icons'
import { faAt as email } from '@fortawesome/free-solid-svg-icons'

export function Header() {
  return (
    <header className="fixed h-full text-center flex flex-col justify-center gap-40">
      <div className="mt-32 m-16">
        <h1 className="mb-8">David Stearns</h1>
        <p className="mb-8">I am a designer, developer, and artist. I create things that I find interesting, and always seek to learn everything there is to learn, so that I can continue punching above my weight.</p>
        <p className="">Let's make something together.</p>
      </div>
      <div id="socials" className="font-bold flex flex-col gap-16 text-3xl items-center">
        <a className="w-0" href="mailto:dave.j.stearns@gmail.com">
          <FontAwesomeIcon icon={email} />
        </a>
        <a className="w-0" href="http://linkedin.com/in/david-stearns-70727437">
          <FontAwesomeIcon icon={linkedin} />
        </a>
        <a className="w-0" href="http://github.com/davetheknave">
          <FontAwesomeIcon icon={github} />
        </a>
      </div>
    </header>
  )
}