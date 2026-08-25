import { experience } from '../data/data.js'
import { useReveal } from '../hooks/useReveal.js'

export default function Experience() {
  const [headRef, headVisible] = useReveal()

  return (
    <section className="experience" id="experience">
      <div className="container">
        <div ref={headRef} className={`section-head reveal ${headVisible ? 'in' : ''}`}>
          <div className="section-num">02 · Deploy log</div>
          <h2>Experience</h2>
          <p>A build history of the roles that shaped how I write and ship code — most recent first.</p>
        </div>

        <div className="pipeline">
          {experience.map((job) => (
            <JobItem key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  )
}

function JobItem({ job }) {
  const [ref, visible] = useReveal()

  return (
    <div ref={ref} className={`job ${job.current ? 'is-current' : ''} reveal ${visible ? 'in' : ''}`}>
      <div className="job-node"></div>
      <div className="job-head">
        <span className="job-role">{job.role}</span>
        {job.current && <span className="job-status">current</span>}
        <span className="job-date">{job.date}</span>
      </div>
      <div className="job-company">
        {job.companyUrl ? (
          <a href={job.companyUrl} target="_blank" rel="noopener noreferrer">
            {job.company} ↗
          </a>
        ) : (
          job.company
        )}
      </div>
      <ul className="job-bullets">
        {job.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
      <div className="job-tags">
        {job.tags.map((t) => (
          <span className="tag" key={t}>{t}</span>
        ))}
      </div>
    </div>
  )
}
