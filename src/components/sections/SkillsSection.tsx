import { useRef } from 'react'
import { skillDomains, dependencyGraph } from '../../data/portfolio'
import { FadeUp, SectionLabel, Chip, useInView } from '../ui/Primitives'
import { IdeWindow } from '../ui/IdeWindow'

export function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const visible = useInView(ref, 0.1)

  return (
    <section id="skills" className="px-6 py-24" style={{ background: 'var(--surface-lo)' }}>
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <SectionLabel index="04" name="skills" />
        </FadeUp>

        <div ref={ref} className="grid lg:grid-cols-[1fr_0.9fr] gap-6">
          <FadeUp delay={0.05}>
            <IdeWindow filename="capability-graph.ts">
              <div className="space-y-6">
                {skillDomains.map((d, i) => (
                  <div key={d.id}>
                    <div className="flex items-center justify-between mb-1.5">
                      <div>
                        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem', color: 'var(--text)', fontWeight: 600 }}>{d.name}</p>
                        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: 2 }}>{d.summary}</p>
                      </div>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem', color: 'var(--cyan)', fontWeight: 700, minWidth: 38, textAlign: 'right' }}>
                        {d.level}%
                      </span>
                    </div>
                    <div className="skill-track">
                      <div
                        className="skill-fill"
                        style={{ width: visible ? `${d.level}%` : '0%', transitionDelay: `${i * 0.12}s` }}
                      />
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {d.modules.map((m) => <Chip key={m} label={m} />)}
                    </div>
                  </div>
                ))}
              </div>
            </IdeWindow>
          </FadeUp>

          <div className="space-y-4">
            <FadeUp delay={0.1}>
              <IdeWindow filename="dependency-graph.ts">
                <div className="code-block text-xs">
                  {dependencyGraph.map((line, i) => {
                    const [from, ...rest] = line.split(' -> ')
                    return (
                      <div key={i}>
                        <span className="tok-nm">{from}</span>
                        {rest.map((part, j) => (
                          <span key={j}>
                            <span className="tok-op"> → </span>
                            <span className={j === rest.length - 1 ? 'tok-str' : 'tok-nm'}>{part}</span>
                          </span>
                        ))}
                      </div>
                    )
                  })}
                </div>
              </IdeWindow>
            </FadeUp>

            <FadeUp delay={0.15}>
              <IdeWindow filename="team-value.md">
                <p style={{ fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.14em', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: 12 }}>
                  what teams get
                </p>
                <ul className="space-y-2.5">
                  {[
                    'Reusable components and cleaner project structure.',
                    'Projects presented with stronger clarity for recruiters.',
                    'Interfaces that feel modern without being noisy.',
                    'A developer who cares about code quality + product.',
                  ].map((txt) => (
                    <li key={txt} className="flex gap-2 items-start" style={{ fontSize: '0.8125rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                      <span style={{ color: 'var(--cyan)', flexShrink: 0 }}>→</span>
                      {txt}
                    </li>
                  ))}
                </ul>
              </IdeWindow>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  )
}
