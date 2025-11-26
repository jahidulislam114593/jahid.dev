import About from './components/About'
import Activities from './components/Activities'
import Education from './components/Education'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import SEOHead from './components/SEOHead'

function App() {
  return (
    <>
    <SEOHead/>
    <Header/>
    <Hero/>
    <About/>
    <Projects/>
    <Experience/>
    <Education/>
    <Activities/>
    <Footer/>
    </>
  )
}

export default App
