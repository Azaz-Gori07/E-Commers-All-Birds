import React from 'react'
import './Mix.css'
import { FiSearch } from "react-icons/fi";
import Products from '../../APIs/mixProducts.json'

function Mix() {
  return (
    <>
      <div className='mix-body'>

        <div className="search-input">

          <h1 className='search-results'>Search Results</h1>
          <div className="search-container">
            <FiSearch className='search-icon' />
            <input type="text" placeholder='Enter Search Term' className='search-term' />

            {/* ////search-container///// */}
          </div>

          {/* /////search-inpute///// */}
        </div>

        <div className="mix-products">
          {Products.map((product) => (
            <div className="mix-card" key={product.id}>
              <div className="mix-card-image">
                <img src={product.image} alt={product.color} />
              </div>

              <div className="mix-card-details">
                <h2 className='mix-card-title'>{product.title}</h2>
                <p className='mix-card-color'>{product.color}</p>
                <p className='mix-card-price'>${product.price} <del>${product.originalPrice}</del></p>
              </div>
            </div>
          ))}

          {/* ////mix-products///// */}
        </div>

        {/* /////mix-body///// */}
      </div>
    </>
  )
}

export default Mix
