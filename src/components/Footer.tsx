import { Instagram, Facebook, Twitter, Mail, Phone, Music2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="footer" className="bg-[#f9f9f9] pt-20 pb-12 px-6">
      <div className="max-w-6xl mx-auto bg-[#121212] rounded-[2rem] p-10 md:p-16 text-white grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 mb-8">Contact & Support</h4>
          <div className="space-y-6">
            <a href="mailto:hello@ramashop.com" className="flex items-center space-x-4 hover:text-gray-400 transition group">
              <div className="p-3 border border-gray-800 rounded-full group-hover:border-white">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-sm tracking-widest uppercase">hello@ramashop.com</span>
            </a>
            <div className="flex items-center space-x-4 group">
              <div className="p-3 border border-gray-800 rounded-full">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-sm tracking-widest uppercase">+62 812 3456 789</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 mb-8">Social Connections</h4>
          <div className="grid grid-cols-2 gap-6">
            <a href="https://instagram.com" className="flex items-center space-x-3 hover:opacity-50 transition">
              <Instagram className="w-5 h-5" /> <span className="text-[10px] uppercase tracking-widest font-bold">Instagram</span>
            </a>
            <a href="https://tiktok.com" className="flex items-center space-x-3 hover:opacity-50 transition">
              <Music2 className="w-5 h-5" /> <span className="text-[10px] uppercase tracking-widest font-bold">TikTok</span>
            </a>
            <a href="https://facebook.com" className="flex items-center space-x-3 hover:opacity-50 transition">
              <Facebook className="w-5 h-5" /> <span className="text-[10px] uppercase tracking-widest font-bold">Facebook</span>
            </a>
            <a href="https://twitter.com" className="flex items-center space-x-3 hover:opacity-50 transition">
              <Twitter className="w-5 h-5" /> <span className="text-[10px] uppercase tracking-widest font-bold">Twitter</span>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-12 text-center">
        <p className="text-[9px] text-gray-400 uppercase tracking-[0.5em]">© 2024 Rama Shop Studio. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;