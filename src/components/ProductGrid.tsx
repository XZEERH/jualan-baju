import ProductCard from './ProductCard';

const products = [
  { id: 1, name: "Luxury Essential Tee", price: "IDR 249.000", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop", badge: "Best Seller" },
  { id: 2, name: "Midnight Hoodie", price: "IDR 599.000", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop" },
  { id: 3, name: "Signature Shirt", price: "IDR 349.000", image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop", badge: "Rare" },
  { id: 4, name: "Classic Chino", price: "IDR 449.000", image: "https://www.image2url.com/r2/default/images/1777175454552-2bdbff64-42ad-4370-86d0-07a0f62a3149.jpg" },
];

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-12">
      {products.map((product) => <ProductCard key={product.id} {...product} />)}
    </div>
  );
};
export default ProductGrid;