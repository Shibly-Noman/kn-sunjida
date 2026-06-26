import Navbar from './components/Navbar'
import ReadingProgress from './components/ReadingProgress'
import Hero from './components/Hero'
import WhatIDo from './components/WhatIDo'
import Work from './components/Work'
import Stories from './components/Stories'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <div className="grain" />
      <ReadingProgress />
      <Navbar />
      <main>
        <Hero />
        <WhatIDo />
        <Work />
        <Stories />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
