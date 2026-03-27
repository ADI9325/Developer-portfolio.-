import { ExternalLink, Github, Folder } from 'lucide-react'
import type { Project } from '../../types'

interface Props {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: Props) {
  return (
    <div
      className="group flex flex-col rounded-2xl border border-slate-700 bg-slate-800 p-6 transition-all duration-300 hover:border-indigo-500/60 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Header */}
      <div className="mb-4 flex items-start justify-between">
        <div className="rounded-lg bg-indigo-500/10 p-2.5 text-indigo-400 transition-colors group-hover:bg-indigo-500/20">
          <Folder size={22} strokeWidth={1.5} />
        </div>
        <div className="flex gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition-colors hover:text-white"
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
              className="text-slate-400 transition-colors hover:text-indigo-400"
              aria-label="Live demo"
            >
              <ExternalLink size={19} />
            </a>
          )}
        </div>
      </div>

      {/* Title */}
      <h3 className="mb-2 text-lg font-semibold text-slate-100 group-hover:text-indigo-400 transition-colors">
        {project.title}
      </h3>

      {/* Description */}
      <p className="mb-5 flex-1 text-sm leading-relaxed text-slate-400">
        {project.description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-slate-700 px-3 py-1 text-xs font-medium text-slate-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}
