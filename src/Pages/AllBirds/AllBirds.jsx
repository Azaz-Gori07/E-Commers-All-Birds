import React from 'react'
import './AllBirds.css'
import ResponsiveCards from '../../Components/SwiperCards/Swiper'
import ResponsiveProducts from '../../Components/SwiperProducts/ProductSlider'
import CardSlider from '../../Components/SlickesCards/Slickes'
import EmailInpute from '../../Components/EmailInput/EmailInput'
import ApproachCard from '../../Components/ApproachCard/ApprochSection'
import LowerNav from '../../Components/Navbar/LowerNav'
import products from '../../APIs/homeProductData.json'
import { Link } from 'react-router-dom'

function AllBirds() {

  return (
    <>
    <LowerNav/>

      <div className="header">
        <img src="25Q2_MemorialDay_Site_HomepageHero_Desktop_2880x1245.avif" className='bgMain' />
        <img className='bgimg' src="25Q2_MemorialDay_Site_HomepageHero_Mobile_860x1078.avif" alt="" />


        <div className="hChild">
          <h1>Memorial Day Sale</h1>
          <p>Kick off summer with the comfiest shoes at the coolest prices.</p>

          <div className="btns">
            <button>MEN'S SALE</button>
            <button>WOMEN'S SALE</button>

            {/* <<<<btns>>>> */}
          </div>

          {/* hChild */}
        </div>

        {/* <<<<header>>>> */}
      </div>

      <ResponsiveCards />

      <div className="attemp-1-0">
        <h1>WE MAKE BETTER THINGS IN A BETTER WAY</h1>
        <p>By looking to the world’s greatest innovator—Nature—we create shoes
          that deliver <br /> unrivaled comfort that you feel good in and feel good about.</p>

        <li><img src="Allbirds_logo_white.png" alt="" /> <span>BY NATURE</span></li>
      </div>

      <div className="attemp-2-0">
        <div className="attemp-2-1">
          <img src="25Q2_RusticOrange_Site_ShoppableFeature_Desktop_US_2000x2000.avif" alt="" />
          <div className="attemp-2-1-1">
            <h1>Rock And Stroll In Comfort</h1>
            <p>Effortlessly comfy styles take color cues from the Southwest’s rustic rock formations.</p>
            <div className="btnsp">
              <button>SHOP MEN</button>
              <button>SHOP WOMEN</button>
            </div>
          </div>
        </div>
        <div className="attemp-2-2">
          {
            products.slice(0, 4).map(item => (
              <Link
              key={item.id}
              to={`/items/home1/${item.id}`}
              >
              <div className="cards">
                <img src={item.image} alt="" />
                <div className="types-or-price">
                  <p className="product_type">{item.title} <span className="price">₹{item.price}</span></p>
                  <p className="product_detail">{item.detail}</p>
                </div>
                <div className="btnss">
                  <button>SHOP MEN</button>
                  <button>SHOP WOMEN</button>
                </div>
              </div>
              </Link>
            ))
          }
            
        </div>

        <div className="attemp-2-2-1">
              <ResponsiveProducts/>
            </div>
      </div>

      <div className="attemp-3">
        <div className="attemp-3-1">
          <img src="attemp-3-1-1.gif" alt="" />
          <div className="text">
            <h1>Card On The Table</h1>
            <p>Hosted by Stanley Tucci</p>
          </div>

          <div className="butn">
            <button>WATCH</button>
          </div>
        </div>
        <div className="attemp-3-2">
          <img src="attemp-3-2.avif" alt="" />
          <div className="text">
            <h1>Canvas Piper</h1>
            <p>Versatile Style, Durable Design</p>
          </div>

          <div className="butn">
            <button>SHOP MEN</button>
            <button>SHOP WOMEN</button>
          </div>
        </div>
      </div>

      <div className="attemp-4">
        <div className="attemp-4-1">
          <p>MORE TO SHOP</p>
        </div>

        <div className="attemp-4-2">
          <CardSlider/>
        </div>
      </div>
      
      <EmailInpute/>
      <ApproachCard/>
    </>
  )
}

export default AllBirds
