import React, { useState } from 'react'
import { FiSearch, FiUser, FiShoppingBag, } from 'react-icons/fi'
import { MdHelpOutline } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";
import './Navbar.css'
import {FaChevronRight} from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Navbar({ naV, openClose }) {

// const [update , setUpdate] = useState(false)

  return (
    <>

      <div className='navbar'>
        <i className="fa-solid fa-bars" onClick={naV}></i>
        <div className="nav1">
          <ul>
            <Link to='/men'><li>MEN</li></Link>
            <Link to='/women'><li>WOMEN</li></Link>
            <Link to='/socks'><li>SOCKS</li></Link>
            <Link to='/new-arrivals'><li>NEW ARRIVALS </li></Link>
          </ul>
        </div>
        <div className="logo">
          <Link to='/'><img src="Allbirds_logo.png" alt="" /></Link>
        </div>
        <div className="nav2">
          <ul>
            <Link to='/sustainability'><li>SUSTAINABILITY</li></Link>
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

      
      { openClose && (

          <div className="sidenav">
          
            <li>MEN  <FaChevronRight /></li>
            <Link to='/women'><li>WOMEN  <FaChevronRight/></li></Link>
            <Link to='/socks'><li>SOCKS  <FaChevronRight/></li></Link>
            <Link to='/new-arrivals'><li>NEW ARRIVALS <FaChevronRight/></li></Link>
            <Link to='/sustainability'><li>SUSTAINABILITY  <FaChevronRight/></li></Link>
            <Link to='/reburn'><li>REBURN  <FaChevronRight/></li></Link>
            <Link to='/stores'><li>STORES  <FaChevronRight/></li></Link>
            <Link to='/user'><li>Account  <FaChevronRight/></li></Link>
            <Link to='/help'><li>Help <FaChevronRight/></li></Link>
        </div>
        ) }
    </>
  )
}

export default Navbar
