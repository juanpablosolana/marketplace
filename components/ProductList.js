import ProductCard from './ProductCard';

export function ProductList({ products }) {
  return (
    <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
      {products.map(({ title, description, published, category, media }) => (
        <ProductCard
          key={title}
          product={{ title, media, description, published, category }}
        />
      ))}
    </div>
  );
}