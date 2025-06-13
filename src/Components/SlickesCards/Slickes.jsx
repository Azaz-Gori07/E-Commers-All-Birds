import React from "react";
import './Slickes.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'

const cardData = [
  {
    id: 1,
    image: "Mix (1).avif",
    detail: "Premium Shoe Model 1",
    title: "High Heels",
    price: 186.4
  },
  {
    id: 2,
    image: "Mix (2).avif",
    detail: "Premium Shoe Model 2",
    title: "Loafers",
    price: 1486.49
  },
  {
    id: 3,
    image: "Mix (3).avif",
    detail: "Luxury Shoe Model 3",
    title: "Sandals",
    price: 762.5
  },
  {
    id: 4,
    image: "Mix (4).avif",
    detail: "Sport Shoe Model 4",
    title: "Boots",
    price: 672.35
  },
  {
    id: 5,
    image: "Mix (5).avif",
    detail: "Urban Shoe Model 5",
    title: "Sandals",
    price: 1187.82
  },
  {
    id: 6,
    image: "Mix (6).avif",
    detail: "Luxury Shoe Model 6",
    title: "Loafers",
    price: 1541.76
  },
  {
    id: 7,
    image: "Mix (7).avif",
    detail: "Urban Shoe Model 7",
    title: "Sneakers",
    price: 1948.56
  },
  {
    id: 8,
    image: "Mix (8).avif",
    detail: "Sport Shoe Model 8",
    title: "Running Shoes",
    price: 1170.99
  },
  {
    id: 9,
    image: "Mix (9).avif",
    detail: "Premium Shoe Model 9",
    title: "Loafers",
    price: 1487.35
  },
  {
    id: 10,
    image: "Mix (10).avif",
    detail: "Sport Shoe Model 10",
    title: "Sandals",
    price: 1179.42
  },
  {
    id: 11,
    image: "Mix (11).avif",
    detail: "Limited Edition Shoe Model 11",
    title: "Boots",
    price: 1902.04
  },
  {
    id: 12,
    image: "Mix (12).avif",
    detail: "Classic Shoe Model 12",
    title: "Running Shoes",
    price: 654.04
  },
  {
    id: 13,
    image: "Mix (13).avif",
    detail: "Limited Edition Shoe Model 13",
    title: "Boots",
    price: 1892.58
  },
  {
    id: 14,
    image: "Mix (14).avif",
    detail: "Sport Shoe Model 14",
    title: "Derby",
    price: 715.57
  },
  {
    id: 15,
    image: "Mix (15).avif",
    detail: "Urban Shoe Model 15",
    title: "Loafers",
    price: 603.39
  },
  {
    id: 16,
    image: "Mix (16).avif",
    detail: "Urban Shoe Model 16",
    title: "Boots",
    price: 1293.99
  },
  {
    id: 17,
    image: "Mix (17).avif",
    detail: "Limited Edition Shoe Model 17",
    title: "Running Shoes",
    price: 1242.56
  },
  {
    id: 18,
    image: "Mix (18).avif",
    detail: "Designer Shoe Model 18",
    title: "Loafers",
    price: 441.96
  },
  {
    id: 19,
    image: "Mix (19).avif",
    detail: "Classic Shoe Model 19",
    title: "Loafers",
    price: 1573.8
  },
  {
    id: 20,
    image: "Mix (20).avif",
    detail: "Urban Shoe Model 20",
    title: "Oxford",
    price: 276.11
  }
];

const CardSlider = () => {

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className='slick-Right' onClick={onClick}>
        <FaChevronRight />
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="slick-Left" onClick={onClick}>
        <FaChevronLeft />
      </div>
    );
  };



  const settings = {
    dots: false,
    infinite: false,
    speed: 800,
    slidesToShow: 4, // Desktop
    slidesToScroll: 4,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768, // Small Tablet
        settings: {
          speed: 400,
          slidesToShow: 2.5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480, // Mobile
        settings: {
          speed: 300,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="slider" style={{ maxWidth: '1400px', margin: 'auto' }}>
      <Slider {...settings}>
        {cardData.map((card) => (
          <div key={card.id} className="slicker-card">
            <div className="img-div">
              <img src={card.image} alt={card.title} className="image-s" />
            </div>
            <div className="props">
              <h3 className="detail-s">{card.detail}</h3>
              <p className="title-s">{card.title}</p>
              <p className="price-s">{card.price}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;
