import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn as linkedin, faGithub as github } from '@fortawesome/free-brands-svg-icons'
import { faAt as email } from '@fortawesome/free-solid-svg-icons'

export function Header(){
    return (
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
    )
}