interface ProductProps {
  name: string;
  price: string;
  image: string;
  badge?: string;
}

const ProductCard = ({ name, price, image, badge }: ProductProps) => {
  // LOGIKA PINTAR: Cek apakah link sudah punya "?" atau belum
  const separator = image.includes('?') ? '&' : '?';
  const optimizedImage = `${image}${separator}w=400&q=60`;
  
  const waLink = `https://wa.me/6283865255697?text=Halo%20Razeerh%20Shop,%20saya%20tertarik%20dengan%20${name}`;

  return (
    <div className="group fade-in flex flex-col items-center text-center">
      <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-50 mb-4 rounded-sm">
        {badge && (
          <span className="absolute top-3 left-3 z-10 bg-black text-white text-[8px] px-2 py-1 uppercase font-bold tracking-tighter">
            {badge}
          </span>
        )}
        <img 
          src={optimizedImage} 
          alt={name} 
          loading="lazy" 
          className="w-full h-full object-cover grayscale-hover"
          // Jika gambar gagal muat, dia akan pakai placeholder abu-abu
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://via.placeholder.com/400x600?text=Image+Not+Found";
          }}
        />
      </div>
      <h3 className="text-[10px] font-bold uppercase tracking-widest leading-none">{name}</h3>
      <p className="text-[11px] text-gray-400 mt-2">{price}</p>
      <a href={waLink} target="_blank" className="font-signature text-xl text-black mt-2 animate-pulse-soft inline-block">
        pesan sekarang
      </a>
    </div>
  );
};

export default ProductCard;