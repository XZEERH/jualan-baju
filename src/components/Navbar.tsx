import { ShoppingBag, Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="text-xl font-bold tracking-widest">ESSENTIALS.</div>
        
        <div className="hidden md:flex space-x-8 text-xs font-medium uppercase tracking-widest">
          <a href="#hero" className="hover:text-gray-500 transition">Home</a>
          <a href="#shop" className="hover:text-gray-500 transition">Shop</a>
          <a href="#size-chart" className="hover:text-gray-500 transition">Size Guide</a>
        </div>

        <div className="flex items-center space-x-4">
          <ShoppingBag className="w-5 h-5 cursor-pointer" />
          <Menu className="w-5 h-5 md:hidden cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;