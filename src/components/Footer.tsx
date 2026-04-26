import { Instagram, Facebook, Twitter, Mail, Phone, Music2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="footer" className="bg-[#f9f9f9] pt-20 pb-10 px-6">
      <div className="max-w-6xl mx-auto bg-[#121212] rounded-[1.5rem] p-10 md:p-14 text-white grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h4 className="text-[9px] font-bold uppercase tracking-[0.3em] text-gray-500 mb-6">Contact</h4>
          <div className="space-y-4">
            <a href="mailto:razeerh08@gmail.com" className="flex items-center space-x-3 hover:text-gray-400 transition">
              <Mail className="w-4 h-4" /> <span className="text-xs tracking-widest">razeerh08@gmail.com</span>
            </a>
            <div className="flex items-center space-x-3">
              <Phone className="w-4 h-4" /> <span className="text-xs tracking-widest">+62 838 6525 5697</span>
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-[9px] font-bold uppercase tracking-[0.3em] text-gray-500 mb-6">Social</h4>
          <div className="flex flex-wrap gap-5">
            <a href="https://instagram.com/razeerh.edukasi" className="flex items-center space-x-2 hover:opacity-50 transition">
              <Instagram className="w-4 h-4" /> <span className="text-[9px] uppercase font-bold tracking-widest">INSTAGRAM</span>
            </a>
            <a href="https://tiktok.com/razeerh.edukasi" className="flex items-center space-x-2 hover:opacity-50 transition">
              <Music2 className="w-4 h-4" /> <span className="text-[9px] uppercase font-bold tracking-widest">TIKTOK</span>
            </a>
            <a href="https://facebook.com" className="flex items-center space-x-2 hover:opacity-50 transition">
              <Facebook className="w-4 h-4" /> <span className="text-[9px] uppercase font-bold tracking-widest">FACEBOOK</span>
            </a>
            <a href="https://twitter.com" className="flex items-center space-x-2 hover:opacity-50 transition">
              <Twitter className="w-4 h-4" /> <span className="text-[9px] uppercase font-bold tracking-widest">TWITTER</span>
            </a>
          </div>
        </div>
      </div>
      <p className="mt-10 text-center text-[8px] text-gray-400 uppercase tracking-[0.4em]">© 2026 Razeerh Shop Studio. All Rights Reserved.</p>
    </footer>
  );
};
export default Footer;