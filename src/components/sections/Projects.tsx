import { Github } from 'lucide-react'
import ProjectCard from '../ui/ProjectCard'
import { projects } from '../../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-center font-mono text-sm text-indigo-500 dark:text-indigo-400">03. projects</p>
        <h2 className="mb-4 text-center text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
          Things I've Built
        </h2>
        <p className="mx-auto mb-14 max-w-lg text-center text-base text-slate-500 dark:text-slate-400">
          A selection of projects I've built — from side experiments to full production applications.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-600 transition-all hover:border-indigo-400 hover:text-indigo-600 hover:-translate-y-0.5 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-indigo-500 dark:hover:text-white"
          >
            <Github size={16} />
            More on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
