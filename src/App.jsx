import React, { useState } from 'react'
import TopGreen from './Pages/TopGreen/TopGreen'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Men from './Pages/Men/Men'
import Women from './Pages/Women/Women'
import Socks from './Pages/Socks/Socks'
import NewArrivals from './Pages/New-Arrivals/NewArrivals'
import AllBirds from './Pages/AllBirds/AllBirds'
import SustainAbility from './Pages/SustainAbility/SustainAbility'
import Reburn from './Pages/Reburn/Reburn'
import Stores from './Pages/Stores/Stores'
import User from './Pages/User/User'
import Help from './Pages/Help/Help'
import Cart from './Pages/Cart/Cart'
// import SideNavbar from './Pages/Navbar/SideNavbar'
import Mix from './Pages/Mix-Products/Mix'
import Footer from './Components/Footer/Footer'


function App() {

  const [openNav, setOpenNav] = useState(false)

  const HandleNav = () => {
    setOpenNav(prev => !prev)
  };

  return (
    <>
      <Router>
        <TopGreen />
        <Navbar naV={HandleNav} openClose={openNav} />
        {/* <SideNavbar openClose={openNav} /> */}
        <Routes>
          <Route path='/men' element={<Men />} />
          <Route path='/women' element={<Women />} />
          <Route path='/socks' element={<Socks />} />
          <Route path='/new-arrivals' element={<NewArrivals />} />
          <Route path='/' element={<AllBirds />} />
          <Route path='/sustainability' element={<SustainAbility />} />
          <Route path='/reburn' element={<Reburn />} />
          <Route path='/stores' element={<Stores />} />
          <Route path='/user' element={<User />} />
          <Route path='/help' element={<Help />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/mix' element={<Mix />}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
