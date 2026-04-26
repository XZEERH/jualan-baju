import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import SizeChart from './components/SizeChart'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section id="hero"><Hero /></section>
        <section id="shop" className="py-32 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-20 text-center">
            <h2 className="text-3xl font-bold tracking-tighter uppercase mb-2">New Arrivals</h2>
            <div className="h-px w-20 bg-black"></div>
          </div>
          <ProductGrid />
        </section>
        <About />
        <section id="size-chart" className="py-32 bg-[#f4f4f4]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-xl font-bold mb-12 tracking-[0.3em] uppercase italic">Size Guide</h2>
            <SizeChart />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App