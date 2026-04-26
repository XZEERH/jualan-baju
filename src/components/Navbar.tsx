import { useState } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-[100] bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="text-xl font-bold tracking-widest uppercase">Essentials.</div>
        
        <div className="hidden md:flex space-x-8 text-[10px] font-bold uppercase tracking-[0.2em]">
          <a href="#hero" className="hover:text-gray-400 transition">Home</a>
          <a href="#shop" className="hover:text-gray-400 transition">Shop</a>
          <a href="#about" className="hover:text-gray-400 transition">About</a>
        </div>

        <div className="flex items-center space-x-5">
          <a href="#shop" className="hover:opacity-50 transition">
            <ShoppingBag className="w-5 h-5" />
          </a>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Sekarang lebih ramping & kecil */}
      {isOpen && (
        <div className="fixed inset-0 top-16 bg-white z-[99] flex flex-col items-center justify-center space-y-6 text-sm font-bold uppercase tracking-[0.3em] fade-in md:hidden">
          <a href="#hero" onClick={() => setIsOpen(false)} className="hover:text-gray-500">Home</a>
          <a href="#shop" onClick={() => setIsOpen(false)} className="hover:text-gray-500">Shop</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-gray-500">About</a>
          <a href="#footer" onClick={() => setIsOpen(false)} className="hover:text-gray-500">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;