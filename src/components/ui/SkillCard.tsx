import type { Skill } from '../../types'

interface Props {
  skill: Skill
  index: number
}

export default function SkillCard({ skill, index }: Props) {
  const Icon = skill.icon

  return (
    <div
      className="group flex flex-col items-center gap-3 rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:border-indigo-400 hover:bg-slate-50 hover:shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-1 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-indigo-500 dark:hover:bg-slate-700"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className={`${skill.color} transition-transform duration-300 group-hover:scale-110`}>
        <Icon size={32} strokeWidth={1.5} />
      </div>
      <span className="text-sm font-medium text-slate-600 transition-colors group-hover:text-slate-900 dark:text-slate-300 dark:group-hover:text-white">
        {skill.label}
      </span>
    </div>
  )
}
