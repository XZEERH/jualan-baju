import ProductCard from './ProductCard';

const products = [
  { 
    id: 1, 
    name: "Luxury Essential Tee", 
    price: "IDR 249.000", 
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop", 
    badge: "Best Seller" 
  },
  { 
    id: 2, 
    name: "Midnight Hoodie", 
    price: "IDR 599.000", 
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop" 
  },
  { 
    id: 3, 
    name: "Signature Shirt", 
    price: "IDR 349.000", 
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop", 
    badge: "Rare" 
  },
  { 
    id: 4, 
    name: "Classic Chino", 
    price: "IDR 449.000", 
    // GANTI LINK DI BAWAH INI (Pastikan pakai tanda kutip dan koma di akhir)
    image: "https://www.image2url.com/r2/default/images/1777175934831-7099b418-3313-4ae3-8e02-e38f9e2ca17f.jpg" 
  },
  // CARA TAMBAH PRODUK BARU (TINGGAL COPAS DAN GANTI ID NYA)
  { 
    id: 5, 
    name: "New Summer Short", 
    price: "IDR 199.000", 
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop",
    badge: "New"
  },
];

const ProductGrid = () => {
  return (
    // grid-cols-2 artinya 2 gambar kesamping di HP, md:grid-cols-4 artinya 4 gambar di Laptop
    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-12">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductGrid;