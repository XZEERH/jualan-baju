import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import About from './components/About'
import SizeChart from './components/SizeChart'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen selection:bg-black selection:text-white">
      <Navbar />
      <main>
        <section id="hero"><Hero /></section>
        <section id="shop" className="py-24 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-2xl font-bold tracking-tighter uppercase mb-2">Our Products</h2>
            <div className="h-px w-12 bg-black"></div>
          </div>
          <ProductGrid />
        </section>
        <About />
        <section id="size-chart" className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-sm font-bold mb-12 tracking-[0.4em] uppercase italic">Size Guide</h2>
            <SizeChart />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App