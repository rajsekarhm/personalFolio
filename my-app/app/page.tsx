import { Navbar } from '.././components/Navbar'
import Hero from '.././components/Hero'
import Projects from '.././components/Projects'
import Experience from '.././components/Experience'
import Resume from '.././components/Resume'
import Contact from '.././components/Contact'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Resume />
        <Contact />
      </main>
    </div>
  )
}

