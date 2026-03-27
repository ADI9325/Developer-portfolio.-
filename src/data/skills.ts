import {
  Code2,
  Database,
  Globe,
  GitBranch,
  Terminal,
  Layers,
  Cpu,
  Wind,
  Container,
  Braces,
} from 'lucide-react'
import type { Skill } from '../types'

export const skills: Skill[] = [
  { label: 'React',       icon: Layers,     color: 'text-cyan-400'   },
  { label: 'TypeScript',  icon: Braces,     color: 'text-blue-400'   },
  { label: 'Node.js',     icon: Terminal,   color: 'text-green-400'  },
  { label: 'Tailwind CSS',icon: Wind,       color: 'text-sky-400'    },
  { label: 'JavaScript',  icon: Code2,      color: 'text-yellow-400' },
  { label: 'PostgreSQL',  icon: Database,   color: 'text-orange-400' },
  { label: 'REST APIs',   icon: Globe,      color: 'text-purple-400' },
  { label: 'Docker',      icon: Container,  color: 'text-blue-300'   },
  { label: 'Git',         icon: GitBranch,  color: 'text-red-400'    },
  { label: 'Next.js',     icon: Cpu,        color: 'text-slate-300'  },
]
