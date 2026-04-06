import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { experienceEntries } from '../../data/portfolio'
import { FadeUp, SectionLabel, Chip, MacDots } from '../ui/Primitives'

export function ExperienceSection() {
  const [expanded, setExpanded] = useState('build-phase')
  const toggle = (id: string) => setExpanded((c) => (c === id ? '' : id))

  return (
    <section id="experience" className="px-6 py-24 max-w-6xl mx-auto">
      <FadeUp>
        <SectionLabel index="03" name="experience" />
      </FadeUp>

      <div className="space-y-4">
        {experienceEntries.map((entry, idx) => {
          const isOpen = expanded === entry.id
          return (
            <FadeUp key={entry.id} delay={idx * 0.06}>
              <div
                className="ide-window"
                style={{
                  borderColor: isOpen ? 'rgba(0,240,255,0.35)' : 'var(--border)',
                  boxShadow: isOpen ? '0 0 20px rgba(0,240,255,0.07)' : 'none',
                }}
              >
                <button
                  type="button"
                  onClick={() => toggle(entry.id)}
                  className="w-full text-left"
                  style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  <div className="ide-titlebar" style={{ background: isOpen ? 'var(--surface-hi)' : 'var(--surface-mid)' }}>
                    <MacDots />
                    <span className="ide-filename">{entry.year} / {entry.title}.log</span>
                    <span style={{ marginLeft: 'auto', color: isOpen ? 'var(--cyan)' : 'var(--text-muted)', fontSize: 11 }}>
                      {isOpen ? '[-]' : '[+]'}
                    </span>
                  </div>
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-3 flex-wrap">
                      <div>
                        <p style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 6 }}>
                          {entry.type} · {entry.duration}
                        </p>
                        <h3 className="text-lg font-semibold tracking-tight" style={{ fontFamily: 'var(--font-sans)', color: 'var(--text)' }}>
                          {entry.title}
                        </h3>
                        <p style={{ fontSize: '0.8125rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', marginTop: 6, lineHeight: 1.7 }}>
                          {entry.summary}
                        </p>
                      </div>
                      <ChevronDown
                        className="size-5 shrink-0 mt-1 transition-transform duration-300"
                        style={{ color: 'var(--cyan)', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                      />
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {entry.stack.map((t) => <Chip key={t} label={t} />)}
                    </div>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <ul
                        className="space-y-3"
                        style={{ padding: '0 16px 16px', borderTop: '1px solid var(--border)', paddingTop: 14 }}
                      >
                        {entry.details.map((d) => (
                          <li key={d} className="flex gap-2 items-start" style={{ fontSize: '0.8125rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                            <span style={{ color: 'var(--cyan)', flexShrink: 0 }}>→</span>
                            {d}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeUp>
          )
        })}
      </div>
    </section>
  )
}
