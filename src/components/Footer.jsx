export default function Footer() {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer>
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Dinesh Thapa — Built with care, deployed with confidence.</p>
        <button className="to-top" onClick={() => go('home')}>
          Back to top ↑
        </button>
      </div>
    </footer>
  )
}
