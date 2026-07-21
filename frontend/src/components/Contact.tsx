import { useState } from 'react'
import { CONTACT, EMAIL } from '../data/portfolio'
import { sendMessage } from '../lib/api'

type Status = { kind: 'idle' | 'ok' | 'err'; msg: string }

const LINKS = [
  { k: 'Email', v: EMAIL, href: `mailto:${EMAIL}` },
  { k: 'GitHub', v: 'Rishabh-Pagaria', href: CONTACT.github },
  { k: 'LinkedIn', v: '/in/rishabhpagaria', href: CONTACT.linkedin },
  { k: 'Publications', v: CONTACT.publications, href: undefined },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<Status>({ kind: 'idle', msg: '' })
  const [sending, setSending] = useState(false)

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    setStatus({ kind: 'idle', msg: '' })
    try {
      const confirmation = await sendMessage(form)
      setStatus({ kind: 'ok', msg: confirmation })
      setForm({ name: '', email: '', message: '' })
    } catch {
      // Backend offline? Fall back to the user's mail client so nothing is lost.
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent('Portfolio message')}&body=${body}`
      setStatus({ kind: 'ok', msg: 'Opening your email client…' })
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="wrap">
      <span className="eyebrow reveal">Start a project</span>
      <div className="contact-grid">
        <div className="reveal">
          <p className="contact-lede">
            Tell me about your project.{' '}
            <span className="text-grad">Let's build it.</span>
          </p>
          <p className="section-sub" style={{ marginTop: '0.8rem' }}>
            Share a few details and I'll reply with next steps — no obligation, no sales pitch.
          </p>
          <div className="contact-links">
            {LINKS.map((l) =>
              l.href ? (
                <a className="contact-link" key={l.k} href={l.href} target="_blank" rel="noreferrer">
                  <span className="k">{l.k}</span>
                  <span className="v">{l.v} ↗</span>
                </a>
              ) : (
                <div className="contact-link" key={l.k}>
                  <span className="k">{l.k}</span>
                  <span className="v">{l.v}</span>
                </div>
              ),
            )}
          </div>
        </div>

        <form className="contact-form reveal" style={{ '--delay': '120ms' } as React.CSSProperties} onSubmit={onSubmit}>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" value={form.name} onChange={onChange} required placeholder="Your name" />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" value={form.email} onChange={onChange} required placeholder="you@example.com" />
          </div>
          <div className="field">
            <label htmlFor="message">Project details</label>
            <textarea id="message" name="message" rows={4} value={form.message} onChange={onChange} required placeholder="What are you building? Rough timeline and budget help too." />
          </div>
          <button className="btn btn-primary" type="submit" disabled={sending}>
            {sending ? 'Sending…' : 'Send project brief →'}
          </button>
          <div className={`form-status ${status.kind === 'ok' ? 'ok' : status.kind === 'err' ? 'err' : ''}`}>
            {status.msg}
          </div>
        </form>
      </div>
    </section>
  )
}
