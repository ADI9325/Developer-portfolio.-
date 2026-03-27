import { MapPin, Briefcase, GraduationCap } from 'lucide-react'

const chips = [
  { icon: MapPin,        text: 'India'                  },
  { icon: Briefcase,     text: 'Full Stack Developer'   },
  { icon: GraduationCap, text: 'B.Tech Computer Science'},
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-center font-mono text-sm text-indigo-500 dark:text-indigo-400">01. about me</p>
        <h2 className="mb-16 text-center text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
          Who I Am
        </h2>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left — avatar */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-violet-500/10 blur-xl dark:from-indigo-500/30 dark:to-violet-500/20" />
              <div className="relative h-64 w-64 overflow-hidden rounded-2xl border-2 border-indigo-300/50 bg-slate-100 dark:border-indigo-500/40 dark:bg-slate-800 sm:h-80 sm:w-80">
                <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 text-4xl font-bold text-white shadow-lg">
                    A
                  </div>
                  <span className="text-sm text-slate-500 dark:text-slate-400">Aditya</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-xl dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
                2+ yrs exp
              </div>
            </div>
          </div>

          {/* Right — bio */}
          <div>
            <h3 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
              I build things for the web.
            </h3>
            <p className="mb-4 text-base leading-relaxed text-slate-500 dark:text-slate-400">
              I'm a passionate full stack developer who loves turning complex problems into simple, elegant solutions. My journey in tech started with curiosity about how websites work — and it hasn't stopped since.
            </p>
            <p className="mb-6 text-base leading-relaxed text-slate-500 dark:text-slate-400">
              I focus on writing clean, maintainable code and care deeply about developer experience and end-user performance. When I'm not coding, I'm reading about system design or contributing to open source.
            </p>

            <div className="flex flex-wrap gap-3">
              {chips.map(({ icon: Icon, text }) => (
                <span
                  key={text}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                >
                  <Icon size={14} className="text-indigo-500 dark:text-indigo-400" />
                  {text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
