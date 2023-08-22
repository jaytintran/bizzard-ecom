import React from 'react';
import { urlFor } from '../utils/image'; // Assuming you have this utility function
import type { Product } from '~/utils/sanity'; // Update this import based on your schema
import useCart from '../hooks/useCart';

interface ProductCardProps {
  product: Product; // Assuming you have defined the Product type
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product); // Add the selected product to the cart
  };

  return (
    <div className="border rounded-lg overflow-hidden shadow-md flex">
      {product.mainImage ? (
        <img
          className="w-[300px]"
          src={urlFor(product.mainImage).width(500).height(300).url()}
          alt={product.title}
        />
      ) : (
        <div className="h-32 bg-gray-300" />
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">
          <a className="text-midnight hover:underline" href={`/product/${product.slug.current}`}>
            {product.title}
          </a>
        </h3>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-green-600 font-semibold my-3">${product.price}</p>

        <button
          className="bg-rose-700 text-white px-4 py-2 rounded"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
