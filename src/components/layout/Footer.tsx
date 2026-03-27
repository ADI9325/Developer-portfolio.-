import { Github, Linkedin, Mail, Code2 } from 'lucide-react'

const socials = [
  { icon: Github,   href: 'https://github.com',      label: 'GitHub'   },
  { icon: Linkedin, href: 'https://linkedin.com',    label: 'LinkedIn' },
  { icon: Mail,     href: 'mailto:hello@aditya.dev', label: 'Email'    },
]

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10 dark:border-slate-700/60 dark:bg-slate-900">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        {/* Brand */}
        <div className="flex items-center gap-2 text-base font-bold text-slate-900 dark:text-white">
          <Code2 size={18} className="text-indigo-500 dark:text-indigo-400" />
          <span className="font-mono text-indigo-500 dark:text-indigo-400">&lt;</span>
          <span>Aditya</span>
          <span className="font-mono text-indigo-500 dark:text-indigo-400">/&gt;</span>
        </div>

        {/* Copyright */}
        <p className="text-sm text-slate-400 dark:text-slate-500">
          © {new Date().getFullYear()} Aditya. Built with React &amp; Tailwind.
        </p>

        {/* Socials */}
        <div className="flex items-center gap-4">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-slate-400 transition-colors hover:text-indigo-500 dark:hover:text-indigo-400"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
