import React, { useState, useEffect } from 'react'
import { FiSearch, FiUser, FiShoppingBag, } from 'react-icons/fi'
import { MdHelpOutline } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";
import './Navbar.css'
import { FaChevronRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Navbar({ HandleDrop, HandleDrop2, HandleDrop3, }) {

  const [openClose, setOpen] = useState(false)

  const HandleNav = () => {
    setOpen(prev => !prev)
  };

  const [drop, setDrop] = useState(null)

  const handleDrop = () => {
    setDrop(prev => (prev === "" ? "men" : ""));
  };


  useEffect(() => {
    if (drop) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [drop]);

  return (
    <>

      <div className='navbar'>
        <i className="fa-solid fa-bars" onClick={HandleNav}></i>
        <div className="nav1">
          <ul>
            <li className='menDrop' onClick={ () =>  setDrop(prev => (prev === null ? "men" : null)) }>MEN</li>
            <li onMouseEnter={ () =>  setDrop (prev === null ? 'women' : null) }
            onMouseLeave={ ()=> setDrop('')}
              >WOMEN</li>
            <Link to='/socks'><li>SOCKS</li></Link>
            <Link to='/new-arrivals'><li>NEW ARRIVALS </li></Link>
          </ul>
        </div>
        <div className="logo">
          <Link to='/'><img src="Allbirds_logo.png" alt="" /></Link>
        </div>
        <div className="nav2">
          <ul>
            <li onClick={ () =>  setDrop(prev => (prev === null ? "sustainability" : null)) }>SUSTAINABILITY</li>
            <Link to='/reburn'><li>REBURN</li></Link>
            <Link to='/stores'><li>STORES</li></Link>
            <Link to='/mix'><FiSearch className='icons' /></Link>
            <Link to='/user'><FiUser className='icons' /></Link>
            <Link to='/help'><MdHelpOutline className='icons' /></Link>
            <Link to='/cart'><BsCart3 className='icons' /></Link>
          </ul>
        </div>
        <div className="iconsN">
          <Link to='/mix'><FiSearch className='icons' /></Link>
          <Link to='/cart'><BsCart3 className='icons' /></Link>
        </div>
      </div>


      {openClose && (

        <div className="sidenav">

          <li>MEN  <FaChevronRight /></li>
          <Link to='/women'><li>WOMEN  <FaChevronRight /></li></Link>
          <Link to='/socks'><li>SOCKS  <FaChevronRight /></li></Link>
          <Link to='/new-arrivals'><li>NEW ARRIVALS <FaChevronRight /></li></Link>
          <Link to='/sustainability'><li>SUSTAINABILITY  <FaChevronRight /></li></Link>
          <Link to='/reburn'><li>REBURN  <FaChevronRight /></li></Link>
          <Link to='/stores'><li>STORES  <FaChevronRight /></li></Link>
          <Link to='/user'><li>Account  <FaChevronRight /></li></Link>
          <Link to='/help'><li>Help <FaChevronRight /></li></Link>
        </div>
      )}



      {drop === 'men' && (
          <div className='main-1'>
            <div className="links">
              <h1>SHOES</h1>

              <ul>
                <li>Sneakers</li>
                <li>Slip Ons</li>
                <li>High Tops</li>
                <li>Sandals</li>
                <li>All-Weather</li>
                <li>Sale</li>
                <li>Shop All</li>
              </ul>
            </div>
            <div className="links">
              <h1>BESTSELLERS</h1>

              <ul>
                <li>Tree Runner Go</li>
                <li>Tree Dasher 2</li>
                <li>Canvas Piper</li>
                <li>Tree Runner</li>
                <li>Tree Glider</li>
                <li>Tree Dasher Relay</li>
                <li>Wool Runner Go</li>
                <li>Shop All</li>
              </ul>
            </div>
            <div className="links">
              <h1>APPAREL & MORE</h1>

              <ul>
                <li>Socks</li>
                <li>Tees</li>
                <li>Sweats</li>
                <li>Bags</li>
                <li>Hats</li>
                <li>Insoles</li>
                <li>Gift Cards</li>
              </ul>
            </div>
            <div className="featureCom">
              <h1>FEATURED</h1>

              <div className="mens-Arrivals">
                <div className="arrivals-1">
                  <img src="Mens_New_Arrivals_25Q2_UtilityCollection_Site_NavTile_Mens_Desktop_1125x324.avif" alt="" />
                  <p>MEN'S NEW ARRIVALS</p>
                </div>
                <div className="arrivals-1">
                  <img src="25Q2_White_Sneakers_Season_Site_NavTile_Mens_Desktop_1125x324.avif" alt="" />
                  <p>TRENDING: WHITE SNEAKS</p>
                </div>
              </div>
            </div>
          </div>
      )}

      {drop === 'women' && (
          <div className='main-1'>
            <div className="links">
              <h1>SHOES</h1>

              <ul>
                <li>Sneakers</li>
                <li>Slip Ons</li>
                <li>High Tops</li>
                <li>Flats</li>
                <li>Sandals</li>
                <li>All-Weather</li>
                <li>Sale</li>
                <li>Shop All</li>
              </ul>
            </div>
            <div className="links">
              <h1>BESTSELLERS</h1>

              <ul>
                <li>Tree Runner Go</li>
                <li>Tree Dasher 2</li>
                <li>Canvas Piper</li>
                <li>Tree Runner</li>
                <li>Tree Glider</li>
                <li>Tree Dasher Relay</li>
                <li>Wool Runner Go</li>
                <li>Shop All</li>
              </ul>
            </div>
            <div className="links">
              <h1>APPAREL & MORE</h1>

              <ul>
                <li>Socks</li>
                <li>Tees</li>
                <li>Sweats</li>
                <li>Bags</li>
                <li>Hats</li>
                <li>Insoles</li>
                <li>Gift Cards</li>
              </ul>
            </div>
            <div className="featureCom">
              <h1>FEATURED</h1>

              <div className="mens-Arrivals">
                <div className="arrivals-1">
                  <img src="Mens_New_Arrivals_25Q2_UtilityCollection_Site_NavTile_Mens_Desktop_1125x324.avif" alt="" />
                  <p>MEN'S NEW ARRIVALS</p>
                </div>
                <div className="arrivals-1">
                  <img src="25Q2_White_Sneakers_Season_Site_NavTile_Mens_Desktop_1125x324.avif" alt="" />
                  <p>TRENDING: WHITE SNEAKS</p>
                </div>
              </div>
            </div>
          </div>
      )}

      {drop === 'sustainability' && (
        <div className='main-1-SustainAbility'>
      <div className="links">
        <h1>SHOES</h1>

        <ul>
          <li>Our Sustainability Strategy</li>
          <li>M0.0NSHOT</li>
          <li>How We Operate</li>
          <li>Carbon Footprint</li>
          <li>Renewable Materials</li>
          <li>Carbon Offsets</li>
          <li>Responsible Energy</li>
        </ul>
      </div>

      <div className="featureCom">
        <h1>FEATURED</h1>

        <div className="mens-Arrivals">
          <div className="arrivals-1">
            <img src="23Q2-Earth_Day-Site-Nav_Tile-1125x324.avif" alt="" />
            <p>OUR SUSTAINABILITY STRATEGY</p>
          </div>
          <div className="arrivals-1">
            <img src="ReRun-Site-NavTiles-Web.avif" alt="" />
            <p>ALLBURDS ReRUN™ MARKETPLACE</p>
          </div>
        </div>
      </div>
    </div>
      )}
    </>
  )
}

export default Navbar
