import { profile } from '../../data/portfolio'

export function Footer() {
  return (
    <footer
      className="text-center py-8 px-6"
      style={{ borderTop: '1px solid var(--border)', background: 'var(--surface)' }}
    >
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.08em' }}>
        {profile.handle} · {profile.location} · 2026
        <span style={{ margin: '0 10px', color: 'var(--border)' }}>|</span>
        TypeScript · UTF-8 · Dark
      </p>
    </footer>
  )
}
