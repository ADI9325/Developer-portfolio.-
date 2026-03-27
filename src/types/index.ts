import type { LucideIcon } from 'lucide-react'

export interface Skill {
  label: string
  icon: LucideIcon
  color: string
}

export interface Project {
  title: string
  description: string
  techStack: string[]
  githubUrl?: string
  liveUrl?: string
  featured?: boolean
}
