import { GITHUB_URL, LINKEDIN_URL, EMAIL } from '../data/portfolio'

export default function Footer() {
  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <span>© {new Date().getFullYear()} brewcase · Rishabh Pagaria · Built with React & Express</span>
        <span style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer">GitHub</a>
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={`mailto:${EMAIL}`}>Email</a>
          <span className="to-top" onClick={toTop}>Back to top ↑</span>
        </span>
      </div>
    </footer>
  )
}
