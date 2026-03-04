import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Esperienza from './components/Esperienza'
import Location from './components/Location'
import DateIscrizioni from './components/DateIscrizioni'
import Genitori from './components/Genitori'
import Gallery from './components/Gallery'
import Recensioni from './components/Recensioni'
import ChiSiamo from './components/ChiSiamo'
import Contatti from './components/Contatti'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-night-dark">
      <Navbar />
      <Hero />
      <Esperienza />
      <Location />
      <DateIscrizioni />
      <Genitori />
      <Gallery />
      <Recensioni />
      <ChiSiamo />
      <Contatti />
      <Footer />
    </div>
  )
}

export default App
