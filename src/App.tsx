import { ThemeProvider } from './context/ThemeContext'
import Navbar   from './components/layout/Navbar'
import Footer   from './components/layout/Footer'
import Hero     from './components/sections/Hero'
import About    from './components/sections/About'
import Skills   from './components/sections/Skills'
import Projects from './components/sections/Projects'

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900 transition-colors duration-300 dark:bg-slate-900 dark:text-slate-100">
        <Navbar />
        <main>
          <Hero />

          <div className="mx-auto max-w-6xl px-6">
            <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-slate-700" />
          </div>

          <About />

          <div className="mx-auto max-w-6xl px-6">
            <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-slate-700" />
          </div>

          <Skills />

          <div className="mx-auto max-w-6xl px-6">
            <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-slate-700" />
          </div>

          <Projects />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
