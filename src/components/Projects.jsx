import { useMemo, useState } from 'react'
import { projectFilters, projects } from '../data/data.js'
import { useReveal } from '../hooks/useReveal.js'
import { IconExternal, IconGithub } from './Icons.jsx'

// Vite handles these as URL imports so the built site works from any path.
import imgCornerstone from '../assets/proj-cornerstone.jpg'
import imgScheduler from '../assets/proj-scheduler.jpg'
import imgPassword from '../assets/proj-password.jpg'
import imgWeather from '../assets/proj-weather.jpg'
import imgQuiz from '../assets/proj-quiz.jpg'
import imgCocktails from '../assets/proj-cocktails.jpg'

const IMAGES = {
  'proj-cornerstone.jpg': imgCornerstone,
  'proj-scheduler.jpg': imgScheduler,
  'proj-password.jpg': imgPassword,
  'proj-weather.jpg': imgWeather,
  'proj-quiz.jpg': imgQuiz,
  'proj-cocktails.jpg': imgCocktails,
}

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const [headRef, headVisible] = useReveal()

  const visible = useMemo(() => {
    if (filter === 'All') return projects
    return projects.filter((p) => p.categories.includes(filter))
  }, [filter])

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div ref={headRef} className={`section-head reveal ${headVisible ? 'in' : ''}`}>
          <div className="section-num">04 · Selected work</div>
          <h2>Projects</h2>
          <p>A mix of client platforms and self-directed builds — filter by what you're curious about.</p>
        </div>

        <div className="proj-filters">
          {projectFilters.map((f) => (
            <button
              key={f}
              className={filter === f ? 'active' : ''}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {visible.length === 0 ? (
          <p className="proj-empty">No projects match that filter yet — try another tag.</p>
        ) : (
          <div className="proj-grid">
            {visible.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

function ProjectCard({ project }) {
  const [ref, visible] = useReveal()

  return (
    <div
      ref={ref}
      className={`proj-card ${project.featured ? 'featured' : ''} reveal ${visible ? 'in' : ''}`}
    >
      <div className="proj-thumb">
        {project.chip && <span className="proj-featured-chip">{project.chip}</span>}
        <img src={IMAGES[project.image]} alt={project.name} loading="lazy" />
      </div>
      <div className="proj-body">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="proj-tags">
          {project.tags.map((t) => (
            <span className="tag" key={t}>{t}</span>
          ))}
        </div>
        <div className="proj-links">
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              Live{project.featured ? ' site' : ''} <IconExternal />
            </a>
          )}
          {project.code && (
            <a href={project.code} target="_blank" rel="noopener noreferrer">
              Code <IconGithub />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
