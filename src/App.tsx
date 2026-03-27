import Navbar   from './components/layout/Navbar'
import Footer   from './components/layout/Footer'
import Hero     from './components/sections/Hero'
import About    from './components/sections/About'
import Skills   from './components/sections/Skills'
import Projects from './components/sections/Projects'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 font-sans text-slate-100">
      <Navbar />
      <main>
        <Hero />

        {/* Divider */}
        <div className="mx-auto max-w-6xl px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
        </div>

        <About />

        <div className="mx-auto max-w-6xl px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
        </div>

        <Skills />

        <div className="mx-auto max-w-6xl px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
        </div>

        <Projects />
      </main>
      <Footer />
    </div>
  )
}
