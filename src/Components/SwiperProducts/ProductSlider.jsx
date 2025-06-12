import React from 'react';
import './ProductSlider.css';

const products = [
  {
      id: 1,
      image: "Mix (1).avif",
      detai: "Premium Shoe Model 1",
      title: "High Heels",
      price: 186.4
    },
    {
      id: 2,
      image: "Mix (2).avif",
      detai: "Premium Shoe Model 2",
      title: "Loafers",
      price: 1486.49
    },
    {
      id: 3,
      image: "Mix (3).avif",
      detai: "Luxury Shoe Model 3",
      title: "Sandals",
      price: 762.5
    },
    {
      id: 4,
      image: "Mix (4).avif",
      detai: "Sport Shoe Model 4",
      title: "Boots",
      price: 672.35
    },
    {
      id: 5,
      image: "Mix (5).avif",
      detai: "Urban Shoe Model 5",
      title: "Sandals",
      price: 1187.82
    },
    {
      id: 6,
      image: "Mix (6).avif",
      detai: "Luxury Shoe Model 6",
      title: "Loafers",
      price: 1541.76
    },
    {
      id: 7,
      image: "Mix (7).avif",
      detai: "Urban Shoe Model 7",
      title: "Sneakers",
      price: 1948.56
    },
    {
      id: 8,
      image: "Mix (8).avif",
      detai: "Sport Shoe Model 8",
      title: "Running Shoes",
      price: 1170.99
    },
    {
      id: 9,
      image: "Mix (9).avif",
      detai: "Premium Shoe Model 9",
      title: "Loafers",
      price: 1487.35
    },
    {
      id: 10,
      image: "Mix (10).avif",
      detai: "Sport Shoe Model 10",
      title: "Sandals",
      price: 1179.42
    },
    {
      id: 11,
      image: "Mix (11).avif",
      detai: "Limited Edition Shoe Model 11",
      title: "Boots",
      price: 1902.04
    },
    {
      id: 12,
      image: "Mix (12).avif",
      detai: "Classic Shoe Model 12",
      title: "Running Shoes",
      price: 654.04
    },
    {
      id: 13,
      image: "Mix (13).avif",
      detai: "Limited Edition Shoe Model 13",
      title: "Boots",
      price: 1892.58
    },
    {
      id: 14,
      image: "Mix (14).avif",
      detai: "Sport Shoe Model 14",
      title: "Derby",
      price: 715.57
    },
    {
      id: 15,
      image: "Mix (15).avif",
      detai: "Urban Shoe Model 15",
      title: "Loafers",
      price: 603.39
    },
    {
      id: 16,
      image: "Mix (16).avif",
      detai: "Urban Shoe Model 16",
      title: "Boots",
      price: 1293.99
    },
    {
      id: 17,
      image: "Mix (17).avif",
      detai: "Limited Edition Shoe Model 17",
      title: "Running Shoes",
      price: 1242.56
    },
    {
      id: 18,
      image: "Mix (18).avif",
      detai: "Designer Shoe Model 18",
      title: "Loafers",
      price: 441.96
    },
    {
      id: 19,
      image: "Mix (19).avif",
      detai: "Classic Shoe Model 19",
      title: "Loafers",
      price: 1573.8
    },
    {
      id: 20,
      image: "Mix (20).avif",
      detai: "Urban Shoe Model 20",
      title: "Oxford",
      price: 276.11
    },
    {
      id: 21,
      image: "Mix (21).avif",
      detai: "Classic Shoe Model 21",
      title: "Derby",
      price: 900.11
    },
]

const ProductSlider = () => {
  return (
    <div className="slider-container">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>{product.subtitle}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductSlider;
