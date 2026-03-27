import SkillCard from '../ui/SkillCard'
import { skills } from '../../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-center font-mono text-sm text-indigo-500 dark:text-indigo-400">02. skills</p>
        <h2 className="mb-4 text-center text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
          Tech Stack
        </h2>
        <p className="mx-auto mb-14 max-w-lg text-center text-base text-slate-500 dark:text-slate-400">
          Technologies I work with regularly to build fast, reliable, and scalable products.
        </p>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {skills.map((skill, i) => (
            <SkillCard key={skill.label} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
