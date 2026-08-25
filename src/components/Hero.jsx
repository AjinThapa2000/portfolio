import { profile, stats } from '../data/data.js'
import { useTypewriter } from '../hooks/useTypewriter.js'
import { useCountUp } from '../hooks/useCountUp.js'
import { IconArrowRight, IconMail } from './Icons.jsx'
import heroPhoto from '../assets/profile-hero.jpg'

export default function Hero() {
  const typed = useTypewriter(profile.roles)

  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div>
          <div className="eyebrow">$ whoami</div>
          <h1>
            Full-stack developer who ships <span className="accent">fast, reliable</span> web systems.
          </h1>
          <span className="typewriter">
            {typed}
            <span className="cursor" aria-hidden="true" />
          </span>
          <p className="hero-desc">
            I'm Dinesh — a web developer based in Exeter, UK, building clean React &amp; Node.js
            applications and production WordPress platforms with PHP, REST APIs and CI/CD
            pipelines behind them.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={() => go('projects')}>
              View my work
              <IconArrowRight />
            </button>
            <button className="btn btn-ghost" onClick={() => go('contact')}>
              Get in touch
              <IconMail />
            </button>
          </div>
          <div className="hero-stats">
            {stats.map((s) => (
              <StatItem key={s.label} {...s} />
            ))}
          </div>
        </div>

        <div className="hero-media">
          <div className="hero-photo-wrap">
            <img src={heroPhoto} alt="Dinesh Thapa" />
          </div>
          <div className="badge-float" aria-hidden="true">
            <span>★ OPEN&nbsp;TO&nbsp;WORK ★</span>
          </div>
          <div className="term-card">
            <div className="term-bar">
              <span></span><span></span><span></span>
            </div>
            <div className="term-body">
              <div className="row"><span className="k">location</span><span className="v">Exeter, UK</span></div>
              <div className="row"><span className="k">role</span><span className="v">Full-Stack Dev</span></div>
              <div className="row"><span className="k">status</span><span className="v ok">available</span></div>
              <div className="row"><span className="k">reply_time</span><span className="v">&lt; 24h</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function StatItem({ value, suffix, label }) {
  const [ref, count] = useCountUp(value)
  return (
    <div ref={ref}>
      <b>{count}{suffix}</b>
      <span>{label.toUpperCase()}</span>
    </div>
  )
}
