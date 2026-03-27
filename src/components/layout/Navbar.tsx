import { useState, useEffect } from 'react'
import { Menu, X, Code2 } from 'lucide-react'

const navLinks = [
  { label: 'Home',     href: '#hero'     },
  { label: 'About',    href: '#about'    },
  { label: 'Skills',   href: '#skills'   },
  { label: 'Projects', href: '#projects' },
]

export default function Navbar() {
  const [isOpen, setIsOpen]       = useState(false)
  const [scrolled, setScrolled]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href: string) => {
    setIsOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-700/60 bg-slate-900/90 backdrop-blur-md shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <button
          onClick={() => handleNav('#hero')}
          className="flex items-center gap-2 text-xl font-bold text-white"
        >
          <Code2 size={22} className="text-indigo-400" />
          <span className="font-mono text-indigo-400">&lt;</span>
          <span>Aditya</span>
          <span className="font-mono text-indigo-400">/&gt;</span>
        </button>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <button
                onClick={() => handleNav(href)}
                className="text-sm font-medium text-slate-400 transition-colors hover:text-white"
              >
                {label}
              </button>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              className="rounded-lg border border-indigo-500 px-4 py-2 text-sm font-medium text-indigo-400 transition-all hover:bg-indigo-500 hover:text-white"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-slate-300 transition-colors hover:text-white md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-slate-700/60 bg-slate-900/95 px-6 pb-6 pt-4 backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <button
                  onClick={() => handleNav(href)}
                  className="w-full text-left text-base font-medium text-slate-300 transition-colors hover:text-white"
                >
                  {label}
                </button>
              </li>
            ))}
            <li>
              <a
                href="/resume.pdf"
                className="inline-block rounded-lg border border-indigo-500 px-4 py-2 text-sm font-medium text-indigo-400 transition-all hover:bg-indigo-500 hover:text-white"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
