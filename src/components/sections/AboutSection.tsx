import { FileCode2, ArrowUpRight, Terminal, Download } from 'lucide-react'
import { contactLinks, profile, stats } from '../../data/portfolio'
import { FadeUp, SectionLabel, Chip } from '../ui/Primitives'
import { IdeWindow } from '../ui/IdeWindow'

export function AboutSection() {
  return (
    <section id="about" className="px-6 py-24 max-w-6xl mx-auto">
      <FadeUp>
        <SectionLabel index="01" name="about" />
      </FadeUp>

      <div className="grid lg:grid-cols-[1fr_0.7fr] gap-6">
        <FadeUp delay={0.05}>
          <IdeWindow filename="about.md">
            <div>
              <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: 12, letterSpacing: '0.12em' }}>
                // {profile.role}
              </p>
              <h2
                className="text-3xl font-bold leading-snug tracking-tight"
                style={{ fontFamily: 'var(--font-sans)', color: 'var(--text)', marginBottom: 16 }}
              >
                {profile.headline}
              </h2>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.8, color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', marginBottom: 20 }}>
                {profile.summary}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {profile.focus.map((f) => <Chip key={f} label={f} />)}
              </div>

              <div className="flex flex-wrap gap-2.5">
                <a href="/resume.pdf" download className="btn-term">
                  <Download className="size-4" />[ resume.pdf ]
                </a>
                <a href={contactLinks.github} target="_blank" rel="noreferrer" className="btn-term">
                  <FileCode2 className="size-4" />[ github ]
                </a>
                <a href={contactLinks.linkedin} target="_blank" rel="noreferrer" className="btn-term">
                  [ linkedin ]<ArrowUpRight className="size-4" />
                </a>
                <a href="#hero" className="btn-term">
                  <Terminal className="size-4" />[ terminal ]
                </a>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  style={{
                    background: 'var(--surface-hi)',
                    border: '1px solid var(--border)',
                    borderRadius: 8,
                    padding: '12px 14px',
                  }}
                >
                  <p style={{ fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.14em', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>{s.label}</p>
                  <p style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text)', marginTop: 6, fontFamily: 'var(--font-mono)' }}>{s.value}</p>
                </div>
              ))}
            </div>
          </IdeWindow>
        </FadeUp>

        <FadeUp delay={0.12}>
          <IdeWindow filename="identity.ts">
            <div className="code-block text-xs">
              <span className="tok-kw">const </span>
              <span className="tok-nm">identity</span>
              <span className="tok-op"> = </span>
              <span className="tok-op">{'{'}</span>{'\n'}
              {'  '}<span className="tok-nm">style</span><span className="tok-op">: </span><span className="tok-str">'developer first'</span><span className="tok-op">,</span>{'\n'}
              {'  '}<span className="tok-nm">product</span><span className="tok-op">: </span><span className="tok-str">'clear and useful'</span><span className="tok-op">,</span>{'\n'}
              {'  '}<span className="tok-nm">code</span><span className="tok-op">: </span><span className="tok-str">'modular + maintainable'</span><span className="tok-op">,</span>{'\n'}
              {'  '}<span className="tok-nm">goal</span><span className="tok-op">: </span><span className="tok-str">'build work that is easy to trust'</span>{'\n'}
              <span className="tok-op">{'}'}</span>
            </div>

            <div className="mt-6">
              <p style={{ fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.14em', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: 12 }}>
                principles
              </p>
              <ul className="space-y-3">
                {profile.principles.map((p) => (
                  <li key={p} className="flex gap-2 items-start" style={{ fontSize: '0.8125rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                    <span style={{ color: 'var(--cyan)', marginTop: 2, flexShrink: 0 }}>→</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <p style={{ fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.14em', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: 12 }}>
                github · linkedin
              </p>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', lineHeight: 1.75 }}>
                {profile.githubSummary}
              </p>
            </div>
          </IdeWindow>
        </FadeUp>
      </div>
    </section>
  )
}
