// ProductPage.jsx
import React from 'react';
import './ProductPage.css'
// import Products from '../../APIs/mixProducts.json'
import { useParams } from 'react-router-dom';

export default function ProductPage() {

  const { id } = useParams();
  const product = Products.find((p) => p.id === parseInt(id));


  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Product Image Section */}
        <div className="space-y-4">
          <img
            src={product.image}
            alt={product.title}
            className="w-full rounded-xl shadow-sm"
          />
          <div className="flex gap-2">
            {[1, 2, 3].map((i) => (
              <img
                key={i}
                src={`https://via.placeholder.com/80?text=Img+${i}`}
                alt="Thumbnail"
                className="w-20 h-20 rounded-md object-cover border hover:border-black"
              />
            ))}
          </div>
        </div>

        {/* Product Info Section */}
        <div className="flex flex-col justify-between space-y-4">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">{product.title}</h1>
            <p className="text-gray-600 text-lg mt-1">{product.price}</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Color:</label>
            <div className="flex gap-2">
              <div className="w-6 h-6 rounded-full bg-black border border-gray-300 cursor-pointer"></div>
              <div className="w-6 h-6 rounded-full bg-gray-400 border border-gray-300 cursor-pointer"></div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Size:</label>
            <select className="w-full p-2 rounded-md border border-gray-300">
              <option>Choose size</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </select>
          </div>

          <button className="mt-4 bg-black text-white py-2 px-6 rounded-xl hover:bg-gray-900 transition">
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
}
