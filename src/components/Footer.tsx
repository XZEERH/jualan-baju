import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest mb-6">Contact</h4>
          <p className="text-sm text-gray-500 leading-loose">
            Jakarta, Indonesia<br />
            hello@essentials.com<br />
            +62 812 3456 789
          </p>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest mb-6">Links</h4>
          <ul className="text-sm text-gray-500 space-y-4">
            <li><a href="#" className="hover:text-black transition">Shipping Info</a></li>
            <li><a href="#" className="hover:text-black transition">Returns & Exchanges</a></li>
            <li><a href="#" className="hover:text-black transition">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest mb-6">Follow Us</h4>
          <div className="flex space-x-6">
            <Instagram className="w-5 h-5 cursor-pointer hover:opacity-50 transition" />
            <Facebook className="w-5 h-5 cursor-pointer hover:opacity-50 transition" />
            <Twitter className="w-5 h-5 cursor-pointer hover:opacity-50 transition" />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-gray-50 pt-8 flex justify-between items-center">
        <p className="text-[10px] text-gray-400 uppercase tracking-widest">© 2024 Essentials Studio.</p>
        <p className="text-[10px] text-gray-400 uppercase tracking-widest">Built for Elegance.</p>
      </div>
    </footer>
  );
};

export default Footer;