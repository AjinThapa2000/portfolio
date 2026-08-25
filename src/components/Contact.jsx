import { useState } from 'react'
import { profile } from '../data/data.js'
import { useReveal } from '../hooks/useReveal.js'
import { IconMail, IconGithub, IconLinkedin } from './Icons.jsx'

export default function Contact() {
  const [ref, visible] = useReveal()
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
    } catch {
      // Clipboard API can fail (older browsers, no HTTPS) — fall back silently.
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }

  return (
    <section className="contact" id="contact">
      <div ref={ref} className={`container reveal ${visible ? 'in' : ''}`}>
        <div className="eyebrow">05 · Contact</div>
        <h2>
          Have a role or project in mind? <span className="accent">Let's talk.</span>
        </h2>
        <p>
          I'm currently open to full-stack and front-end software development opportunities —
          feel free to reach out directly.
        </p>

        <div className="contact-actions">
          <a href={`mailto:${profile.email}`} className="btn btn-primary">
            Email me
            <IconMail />
          </a>
          <button className="btn btn-ghost copy-btn" onClick={copyEmail}>
            <span className={`copy-toast ${copied ? 'show' : ''}`}>Copied to clipboard!</span>
            {profile.email}
          </button>
        </div>

        <div className="contact-card">
          <div className="term-bar">
            <span></span><span></span><span></span>
          </div>
          <div className="term-content">
            <div className="line"><span className="p1">$</span> contact --info</div>
            <div className="out">
              <div className="line">name: {profile.name}</div>
              <div className="line">location: {profile.location}</div>
              <div className="line">email: {profile.email}</div>
              <div className="line">phone: {profile.phone}</div>
              <div className="line"><span className="p2">status:</span> available for new opportunities</div>
            </div>
          </div>
        </div>

        <div className="social-row">
          <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <IconLinkedin />
          </a>
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <IconGithub />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <IconMail />
          </a>
        </div>
      </div>
    </section>
  )
}
