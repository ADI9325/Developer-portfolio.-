import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center"
    >
      {/* Ambient glow blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/20 blur-[100px]" />
        <div className="absolute right-1/4 bottom-1/4 h-[300px] w-[300px] rounded-full bg-violet-600/15 blur-[80px]" />
      </div>

      {/* Greeting chip */}
      <div className="mb-6 inline-flex animate-fade-up items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-sm text-indigo-300">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-400" />
        </span>
        Available for work
      </div>

      {/* Main heading */}
      <h1
        className="mb-4 animate-fade-up text-5xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl"
        style={{ animationDelay: '100ms' }}
      >
        Hi, I'm{' '}
        <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
          Aditya
        </span>
      </h1>

      {/* Sub-heading */}
      <p
        className="mb-4 animate-fade-up font-mono text-lg text-indigo-400 sm:text-xl"
        style={{ animationDelay: '180ms' }}
      >
        Full Stack Developer
      </p>

      {/* Description */}
      <p
        className="mb-10 max-w-xl animate-fade-up text-base leading-relaxed text-slate-400 sm:text-lg"
        style={{ animationDelay: '260ms' }}
      >
        I design and build scalable web applications with clean code and thoughtful user experiences — from database to deploy.
      </p>

      {/* CTA buttons */}
      <div
        className="mb-12 flex animate-fade-up flex-wrap justify-center gap-4"
        style={{ animationDelay: '340ms' }}
      >
        <button
          onClick={() => scrollTo('#projects')}
          className="rounded-xl bg-indigo-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all hover:bg-indigo-400 hover:shadow-indigo-400/40 hover:-translate-y-0.5 active:translate-y-0"
        >
          View My Work
        </button>
        <button
          onClick={() => scrollTo('#about')}
          className="rounded-xl border border-slate-600 bg-slate-800 px-7 py-3 text-sm font-semibold text-slate-200 transition-all hover:border-indigo-500 hover:text-white hover:-translate-y-0.5 active:translate-y-0"
        >
          About Me
        </button>
      </div>

      {/* Social icons */}
      <div
        className="mb-16 flex animate-fade-up items-center gap-5"
        style={{ animationDelay: '420ms' }}
      >
        {[
          { icon: Github,   href: 'https://github.com',     label: 'GitHub'   },
          { icon: Linkedin, href: 'https://linkedin.com',   label: 'LinkedIn' },
          { icon: Mail,     href: 'mailto:hello@aditya.dev',label: 'Email'    },
        ].map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition-all hover:border-indigo-500 hover:text-indigo-400 hover:-translate-y-0.5"
          >
            <Icon size={18} />
          </a>
        ))}
      </div>

      {/* Scroll hint */}
      <button
        onClick={() => scrollTo('#about')}
        className="animate-bounce text-slate-600 transition-colors hover:text-slate-400"
        aria-label="Scroll down"
      >
        <ArrowDown size={22} />
      </button>
    </section>
  )
}
