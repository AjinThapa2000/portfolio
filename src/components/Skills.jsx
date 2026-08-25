import { skills } from '../data/data.js'
import { useReveal } from '../hooks/useReveal.js'
import { IconCode, IconServer, IconStar } from './Icons.jsx'

const ICONS = {
  frontend: IconCode,
  backend: IconServer,
  practice: IconStar,
}

export default function Skills() {
  const [headRef, headVisible] = useReveal()

  return (
    <section className="skills" id="skills">
      <div className="container">
        <div ref={headRef} className={`section-head reveal ${headVisible ? 'in' : ''}`}>
          <div className="section-num">03 · Stack</div>
          <h2>Skills &amp; tools</h2>
          <p>What I reach for day to day, grouped by where it lives in the stack.</p>
        </div>

        <div className="skills-grid">
          {skills.map((s) => (
            <SkillCard key={s.id} skill={s} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillCard({ skill }) {
  const [ref, visible] = useReveal()
  const Icon = ICONS[skill.id] ?? IconCode

  return (
    <div ref={ref} className={`skill-card reveal ${visible ? 'in' : ''}`}>
      <div className="icon"><Icon /></div>
      <h3>{skill.title}</h3>
      <p>{skill.blurb}</p>
      <div className="skill-list">
        {skill.items.map((item) => (
          <span className="tag" key={item}>{item}</span>
        ))}
      </div>
    </div>
  )
}
