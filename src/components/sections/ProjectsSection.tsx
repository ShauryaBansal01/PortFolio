import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, FileCode2 } from 'lucide-react'
import { projects } from '../../data/portfolio'
import { FadeUp, SectionLabel, Chip } from '../ui/Primitives'
import { IdeWindow } from '../ui/IdeWindow'

export function ProjectsSection() {
  const [selected, setSelected] = useState('lingobridge')
  const project = projects.find((p) => p.id === selected) ?? projects[0]

  return (
    <section id="projects" className="px-6 py-24" style={{ background: 'var(--surface-lo)' }}>
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <SectionLabel index="02" name="projects" />
        </FadeUp>

        <FadeUp delay={0.05}>
          <div className="flex gap-2 overflow-x-auto pb-2 mb-6">
            {projects.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setSelected(p.id)}
                className="btn-term shrink-0"
                style={{
                  borderColor: p.id === selected ? 'var(--cyan)' : 'var(--border)',
                  background: p.id === selected ? 'var(--cyan-soft)' : 'transparent',
                  color: p.id === selected ? 'var(--cyan)' : 'var(--text-muted)',
                  boxShadow: p.id === selected ? 'var(--cyan-glow)' : 'none',
                  borderRadius: 8,
                }}
              >
                {p.file}
              </button>
            ))}
          </div>
        </FadeUp>

        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="grid lg:grid-cols-[1fr_1.05fr] gap-6"
          >
            <IdeWindow filename={project.file}>
              <div>
                <p style={{ fontSize: '0.65rem', color: 'var(--cyan)', letterSpacing: '0.14em', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: 10 }}>
                  {project.status}
                </p>
                <h2 className="text-2xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-sans)', color: 'var(--text)', marginBottom: 12 }}>
                  {project.name}
                </h2>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.8, color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', marginBottom: 16 }}>
                  {project.summary}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.stack.map((t) => <Chip key={t} label={t} />)}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn-term">
                      <ExternalLink className="size-4" />[ ./live-preview ]
                    </a>
                  )}
                  <a href={project.repoUrl} target="_blank" rel="noreferrer" className="btn-term">
                    <FileCode2 className="size-4" />[ ./source ]
                  </a>
                </div>
              </div>
              <div className="mt-6">
                <p style={{ fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.14em', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: 12 }}>highlights</p>
                <ul className="space-y-2.5">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-2 items-start" style={{ fontSize: '0.8125rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                      <span style={{ color: 'var(--cyan)', flexShrink: 0 }}>→</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </IdeWindow>

            <IdeWindow filename={project.file}>
              <div className="code-block text-xs flex-1 overflow-auto">
                {project.snippet.split('\n').map((line, i) => (
                  <div key={i} className="flex gap-4">
                    <span style={{ color: 'var(--text-muted)', userSelect: 'none', minWidth: 24, textAlign: 'right' }}>{i + 1}</span>
                    <span>{line || ' '}</span>
                  </div>
                ))}
              </div>
            </IdeWindow>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
