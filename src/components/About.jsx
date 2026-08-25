import { facts } from '../data/data.js'
import { useReveal } from '../hooks/useReveal.js'
import { IconDownload } from './Icons.jsx'
import aboutPhoto from '../assets/profile-about.jpg'

export default function About() {
  const [photoRef, photoVisible] = useReveal()
  const [textRef, textVisible] = useReveal()

  return (
    <section className="about" id="about">
      <div className="container about-grid">
        <div ref={photoRef} className={`about-photo reveal ${photoVisible ? 'in' : ''}`}>
          <img src={aboutPhoto} alt="Dinesh Thapa portrait" />
        </div>

        <div ref={textRef} className={`about-text reveal ${textVisible ? 'in' : ''}`}>
          <div className="eyebrow">01 · About</div>
          <p>
            I'm a <b>full-stack web developer</b> with a front-end-first mindset — I care about
            how an interface feels as much as how the code behind it runs. My toolkit spans{' '}
            <b>React, TypeScript and modern CSS</b> on the front end, and{' '}
            <b>PHP, Node.js and Django</b> on the back, with day-to-day experience shipping and
            maintaining production WordPress platforms for real organisations.
          </p>
          <p>
            Right now I'm building and maintaining client WordPress sites at{' '}
            <b>Bigwave Marketing</b>, and before that I led the full development cycle — from
            requirements to deployment — for <b>Cornerstone Academy Trust's</b> school website,
            including custom hooks, REST integrations and CI/CD pipelines.
          </p>
          <p>
            I'm currently looking to move deeper into <b>software engineering</b> — applications,
            algorithms and modern engineering practice — while keeping the practical, ship-it
            instincts I picked up building real products for real users.
          </p>

          <div className="facts">
            {facts.map((f) => (
              <div className="fact-box" key={f.label}>
                <b>{f.value}</b>
                <span>{f.label.toUpperCase()}</span>
              </div>
            ))}
          </div>

          <a href="/Dinesh_Thapa_CV.docx" className="btn btn-primary" download>
            Download CV
            <IconDownload />
          </a>
        </div>
      </div>
    </section>
  )
}
