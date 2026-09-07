import { Footer, Header } from '@/components/layout'
import {
  Contact,
  Experience,
  Expertise,
  Hero,
  Impact,
  Testimonials,
  Work,
  Writing,
} from '@/components/sections'

/**
 * Page composition only.
 * Reorder or remove a section here; edit its copy in `src/content`.
 */
export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Impact />
        <Work />
        <Experience />
        <Expertise />
        <Writing />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
