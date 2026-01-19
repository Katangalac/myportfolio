import Hero from '@/app/components/sections/Hero'
import About from '@/app/components/sections/About'
import ProjectsOverview from '@/app/components/sections/ProjectsOverview'
import ProjectDetails from '@/app/components/sections/ProjectDetails'
import Contact from '@/app/components/sections/Contact'

export default function Home() {
  return (
      <>
        <Hero />
        <About />
        <ProjectsOverview />
        <ProjectDetails />
        <Contact />
      </>
  )
}
