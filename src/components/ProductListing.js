import React from 'react';
import ProductCard from './ProductCard';

function ProductListing({ addToCart }) {
  const products = [
    { id: 1, name: 'Aloe Vera', price: 10, imgSrc: 'path-to-image' },
    { id: 2, name: 'Cactus', price: 15, imgSrc: 'path-to-image' },
    { id: 3, name: 'Succulent', price: 12, imgSrc: 'path-to-image' },
    { id: 4, name: 'Fern', price: 8, imgSrc: 'path-to-image' },
    { id: 5, name: 'Snake Plant', price: 20, imgSrc: 'path-to-image' },
    { id: 6, name: 'Bamboo', price: 18, imgSrc: 'path-to-image' },
  ];

  return (
    <div className="product-listing">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default ProductListing;
