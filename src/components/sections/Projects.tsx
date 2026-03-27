import { Github } from 'lucide-react'
import ProjectCard from '../ui/ProjectCard'
import { projects } from '../../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Section label */}
        <p className="mb-3 text-center font-mono text-sm text-indigo-400">03. projects</p>
        <h2 className="mb-4 text-center text-3xl font-bold text-white sm:text-4xl">
          Things I've Built
        </h2>
        <p className="mx-auto mb-14 max-w-lg text-center text-base text-slate-400">
          A selection of projects I've built — from side experiments to full production applications.
        </p>

        {/* Cards grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* More on GitHub */}
        <div className="mt-14 text-center">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-600 bg-slate-800 px-6 py-3 text-sm font-medium text-slate-300 transition-all hover:border-indigo-500 hover:text-white hover:-translate-y-0.5"
          >
            <Github size={16} />
            More on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
