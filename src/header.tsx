import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn as linkedin, faGithub as github, faInstagram as instagram, faSoundcloud as soundcloud } from '@fortawesome/free-brands-svg-icons'
import { faAt as email } from '@fortawesome/free-solid-svg-icons'

export function Header(props: any) {
  return (
    <header className="lg:fixed lg:w-96 lg:h-full text-center flex flex-col justify-center mb-8">
      <div className="lg:ml-16 lg:mr-16 m-4">
        <h1 className="mb-8"><a href="/">David Stearns</a></h1>
        <p className="mb-8">{props.bio}</p>
        <p className="">Let's create something together.</p>
      </div>
      <div id="socials" className="font-bold flex flex-row gap-16 text-3xl items-center justify-center lg:flex-col">
        <a aria-label="Send me an email" href="mailto:david@stearns.xyz">
          <FontAwesomeIcon icon={email} />
        </a>
        <a aria-label="See my LinkedIn" href="http://linkedin.com/in/david-stearns-70727437" target="_blank">
          <FontAwesomeIcon icon={linkedin} />
        </a>
        <a aria-label="Check out my GitHub" href="http://github.com/davetheknave" target="_blank">
          <FontAwesomeIcon icon={github} />
        </a>
        {/* <a aria-label="Check out my Instagram" href="" target="_blank">
          <FontAwesomeIcon icon={instagram} />
        </a>
        <a aria-label="Check out my Soundcloud" href="" target="_blank">
          <FontAwesomeIcon icon={soundcloud} />
        </a> */}
      </div>
    </header>
  )
}