import { techStack } from '../data/data.js'

export default function Marquee() {
  return (
    <div className="marquee-wrap">
      <div className="marquee">
        <MarqueeRow />
        <MarqueeRow aria-hidden="true" />
      </div>
    </div>
  )
}

function MarqueeRow(props) {
  return (
    <span {...props}>
      {techStack.map((t) => (
        <span key={t}>
          <i>▹</i>
          {t}
        </span>
      ))}
    </span>
  )
}
