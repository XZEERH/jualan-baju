interface ProductProps {
  name: string;
  price: string;
  image: string;
  badge?: string;
}

const ProductCard = ({ name, price, image, badge }: ProductProps) => {
  const waLink = `https://wa.me/628123456789?text=Halo%20Rama%20Shop,%20saya%20tertarik%20dengan%20${name}`;

  return (
    <div className="group fade-in">
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-5 rounded-sm">
        {badge && (
          <span className="absolute top-4 left-4 z-10 bg-black text-white text-[9px] px-2 py-1 uppercase tracking-widest font-bold">
            {badge}
          </span>
        )}
        <img src={image} alt={name} className="w-full h-full object-cover grayscale-hover" />
      </div>
      <h3 className="text-[11px] font-bold uppercase tracking-widest">{name}</h3>
      <p className="text-sm text-gray-400 mt-1">{price}</p>
      <a 
        href={waLink} 
        target="_blank" 
        className="font-signature text-xl text-black block mt-2 animate-pulse-soft hover:text-gray-500"
      >
        pesan sekarang
      </a>
    </div>
  );
};

export default ProductCard;