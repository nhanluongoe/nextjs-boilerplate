import { Metadata } from 'next';
import ProductCard from './components/ProductCard';

export const metadata: Metadata = {
  title: 'Product Page',
  description: 'Description of the product page',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    // ... add more open graph meta tags
  },
};

const MOCK_PRODUCTS = [
  {
    id: '1',
    name: 'Product 1',
    price: 100,
    description: 'Description of product 1',
  },
  {
    id: '2',
    name: 'Product 2',
    price: 200,
    description: 'Description of product 2',
  },
  {
    id: '3',
    name: 'Product 3',
    price: 300,
    description: 'Description of product 3',
  },
];

export default function ProductPage() {
  return (
    <div>
      <h1>Product Page</h1>
      <div className="flex gap-2">
        {MOCK_PRODUCTS.map((product) => (
          <ProductCard
            name={product.name}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}
