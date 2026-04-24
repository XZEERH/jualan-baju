interface ProductProps {
  image: string;
  name: string;
  price: string;
  badge?: string;
}

const ProductCard = ({ image, name, price, badge }: ProductProps) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
        {badge && (
          <span className="absolute top-4 left-4 z-10 bg-black text-white text-[10px] px-2 py-1 uppercase tracking-widest">
            {badge}
          </span>
        )}
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover grayscale-hover"
        />
      </div>
      <h3 className="text-sm font-medium tracking-tight">{name}</h3>
      <p className="text-sm text-gray-500 mt-1">{price}</p>
    </div>
  );
};

export default ProductCard;