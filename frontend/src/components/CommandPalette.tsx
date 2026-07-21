import { useEffect, useMemo, useRef, useState } from 'react'
import { NAV_STOPS, EMAIL, GITHUB_URL, LINKEDIN_URL } from '../data/portfolio'

interface Command {
  label: string
  hint: string
  run: () => void
}

interface Props {
  open: boolean
  onClose: () => void
}

// Cmd/Ctrl-K command palette for keyboard-first navigation.
export default function CommandPalette({ open, onClose }: Props) {
  const [query, setQuery] = useState('')
  const [cursor, setCursor] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    onClose()
  }

  const commands = useMemo<Command[]>(
    () => [
      ...NAV_STOPS.map((s) => ({ label: `Go to ${s.label}`, hint: 'section', run: () => go(s.id) })),
      { label: 'Email Rishabh', hint: 'contact', run: () => { window.location.href = `mailto:${EMAIL}` } },
      { label: 'Open GitHub', hint: 'link', run: () => window.open(GITHUB_URL, '_blank') },
      { label: 'Open LinkedIn', hint: 'link', run: () => window.open(LINKEDIN_URL, '_blank') },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [onClose],
  )

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return commands
    return commands.filter((c) => c.label.toLowerCase().includes(q) || c.hint.includes(q))
  }, [query, commands])

  useEffect(() => {
    if (open) {
      setQuery('')
      setCursor(0)
      requestAnimationFrame(() => inputRef.current?.focus())
    }
  }, [open])

  useEffect(() => setCursor(0), [query])

  if (!open) return null

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setCursor((c) => Math.min(c + 1, results.length - 1)) }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setCursor((c) => Math.max(c - 1, 0)) }
    else if (e.key === 'Enter') { e.preventDefault(); results[cursor]?.run() }
    else if (e.key === 'Escape') { onClose() }
  }

  return (
    <div className="cmd-overlay" onClick={onClose}>
      <div className="cmd" onClick={(e) => e.stopPropagation()} role="dialog" aria-label="Command palette">
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={onKey}
          placeholder="Type a command or search…"
          aria-label="Command search"
        />
        <div className="cmd-list">
          {results.length === 0 && <div className="cmd-empty">No matches.</div>}
          {results.map((c, i) => (
            <div
              key={c.label}
              className={`cmd-item ${i === cursor ? 'active' : ''}`}
              onMouseEnter={() => setCursor(i)}
              onClick={c.run}
            >
              <span className="idx">{String(i + 1).padStart(2, '0')}</span>
              <span className="label">{c.label}</span>
              <span className="idx" style={{ marginLeft: 'auto' }}>{c.hint}</span>
            </div>
          ))}
        </div>
        <div className="cmd-foot">
          <span><kbd>↑↓</kbd>navigate</span>
          <span><kbd>↵</kbd>select</span>
          <span><kbd>esc</kbd>close</span>
        </div>
      </div>
    </div>
  )
}
