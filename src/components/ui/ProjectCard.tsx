import { ExternalLink, Github, Folder } from 'lucide-react'
import type { Project } from '../../types'

interface Props {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: Props) {
  return (
    <div
      className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-indigo-400/60 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-indigo-500/60"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Header */}
      <div className="mb-4 flex items-start justify-between">
        <div className="rounded-lg bg-indigo-50 p-2.5 text-indigo-500 transition-colors group-hover:bg-indigo-100 dark:bg-indigo-500/10 dark:text-indigo-400 dark:group-hover:bg-indigo-500/20">
          <Folder size={22} strokeWidth={1.5} />
        </div>
        <div className="flex gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition-colors hover:text-slate-700 dark:hover:text-white"
              aria-label="GitHub repository"
            >
              <Github size={19} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition-colors hover:text-indigo-500 dark:hover:text-indigo-400"
              aria-label="Live demo"
            >
              <ExternalLink size={19} />
            </a>
          )}
        </div>
      </div>

      {/* Title */}
      <h3 className="mb-2 text-lg font-semibold text-slate-900 transition-colors group-hover:text-indigo-600 dark:text-slate-100 dark:group-hover:text-indigo-400">
        {project.title}
      </h3>

      {/* Description */}
      <p className="mb-5 flex-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
        {project.description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-700 dark:text-slate-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}
