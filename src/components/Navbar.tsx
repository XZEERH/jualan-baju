import { useState } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-[100] bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between relative">
        {/* LOGO */}
        <div className="text-lg font-bold tracking-widest uppercase">Essentials.</div>
        
        {/* DESKTOP MENU */}
        <div className="hidden md:flex space-x-8 text-[10px] font-bold uppercase tracking-[0.2em]">
          <a href="#hero" className="hover:text-gray-400 transition">Home</a>
          <a href="#shop" className="hover:text-gray-400 transition">Shop</a>
          <a href="#about" className="hover:text-gray-400 transition">About</a>
        </div>

        {/* ICONS AREA */}
        <div className="flex items-center space-x-5">
          <a href="#shop" className="hover:opacity-50 transition">
            <ShoppingBag className="w-5 h-5" />
          </a>
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden p-1 hover:bg-gray-50 rounded-md transition"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* MOBILE MENU DROPDOWN (Perbaikan: Sejajar di bawah Hamburger) */}
        {isOpen && (
          <div className="absolute top-16 right-6 w-48 bg-white border border-gray-100 shadow-xl rounded-sm py-4 px-6 flex flex-col space-y-4 md:hidden fade-in text-right">
            <a 
              href="#hero" 
              onClick={() => setIsOpen(false)}
              className="text-[10px] font-bold uppercase tracking-[0.2em] border-b border-gray-50 pb-2 hover:text-gray-400"
            >
              Home
            </a>
            <a 
              href="#shop" 
              onClick={() => setIsOpen(false)}
              className="text-[10px] font-bold uppercase tracking-[0.2em] border-b border-gray-50 pb-2 hover:text-gray-400"
            >
              Shop
            </a>
            <a 
              href="#about" 
              onClick={() => setIsOpen(false)}
              className="text-[10px] font-bold uppercase tracking-[0.2em] border-b border-gray-50 pb-2 hover:text-gray-400"
            >
              About
            </a>
            <a 
              href="#footer" 
              onClick={() => setIsOpen(false)}
              className="text-[10px] font-bold uppercase tracking-[0.2em] hover:text-gray-400"
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;