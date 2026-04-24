import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import SizeChart from './components/SizeChart'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="shop" className="py-20 px-6 max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-12 tracking-tighter">NEW ARRIVALS</h2>
          <ProductGrid />
        </section>
        <section id="size-chart" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-8 tracking-tighter text-center">SIZE GUIDE</h2>
            <SizeChart />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App