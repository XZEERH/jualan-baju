import ProductCard from './ProductCard';

const products = [
  { id: 1, name: "Premium Cotton Tee", price: "IDR 249.000", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80", badge: "Best Seller" },
  { id: 2, name: "Heavyweight Hoodie", price: "IDR 599.000", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80" },
  { id: 3, name: "Oversized Shirt", price: "IDR 349.000", image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80" },
  { id: 4, name: "Minimalist Chino", price: "IDR 449.000", image: "https://images.unsplash.com/photo-1473966968600-fa804b86932b?auto=format&fit=crop&q=80", badge: "New" },
];

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-12">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductGrid;