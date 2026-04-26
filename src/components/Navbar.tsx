import { useState } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Fungsi untuk scroll tanpa merubah URL (menghilangkan #hero, #shop, dll)
  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Menghilangkan hash dari URL setelah scroll
      window.history.pushState("", document.title, window.location.pathname + window.location.search);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-[100] bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between relative">
        {/* LOGO */}
        <div className="text-lg font-bold tracking-widest uppercase">Essentials.</div>
        
        {/* DESKTOP MENU */}
        <div className="hidden md:flex space-x-8 text-[10px] font-bold uppercase tracking-[0.2em]">
          <button onClick={() => scrollToSection('hero')} className="hover:text-gray-400 transition">Home</button>
          <button onClick={() => scrollToSection('shop')} className="hover:text-gray-400 transition">Shop</button>
          <button onClick={() => scrollToSection('about')} className="hover:text-gray-400 transition">About</button>
        </div>

        {/* ICONS AREA */}
        <div className="flex items-center space-x-5">
          <button onClick={() => scrollToSection('shop')} className="hover:opacity-50 transition">
            <ShoppingBag className="w-5 h-5" />
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden p-1 hover:bg-gray-50 rounded-md transition"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* MOBILE MENU DROPDOWN - Perbaikan: Card Pas (w-fit) */}
        {isOpen && (
          <div className="absolute top-[70px] right-6 w-fit min-w-[120px] bg-white border border-gray-100 shadow-2xl rounded-lg py-4 px-5 flex flex-col space-y-4 md:hidden fade-in text-right">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-[10px] font-bold uppercase tracking-[0.2em] border-b border-gray-50 pb-2 hover:text-gray-400 whitespace-nowrap"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('shop')}
              className="text-[10px] font-bold uppercase tracking-[0.2em] border-b border-gray-50 pb-2 hover:text-gray-400 whitespace-nowrap"
            >
              Shop
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-[10px] font-bold uppercase tracking-[0.2em] border-b border-gray-50 pb-2 hover:text-gray-400 whitespace-nowrap"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('footer')}
              className="text-[10px] font-bold uppercase tracking-[0.2em] hover:text-gray-400 whitespace-nowrap"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;