import SmoothScroll from './components/SmoothScroll'
import MagicCursor from './components/MagicCursor'
import WandTrail from './components/WandTrail'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Esperienza from './components/Esperienza'
import Location from './components/Location'
import DateIscrizioni from './components/DateIscrizioni'
import Evento from './components/Evento'
import Contatti from './components/Contatti'
import Footer from './components/Footer'

function App() {
  return (
    <SmoothScroll>
      <MagicCursor />
      <WandTrail />
      <Navbar />
      <main>
        <Hero />
        <Esperienza />
        <Evento />
        <Location />
        <DateIscrizioni />
        <Contatti />
      </main>
      <Footer />
    </SmoothScroll>
  )
}

export default App
