import React, { useState } from 'react'
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
import Mix from './Pages/Mix-Products/Mix'
import Footer from './Components/Footer/Footer'
import Terms from './Pages/TermsPage/Terms'
import Privacy from './Pages/PrivacyPage/Privacy'
import Accessibility from './Pages/AccessibilityPage/Accessibility'
import LinkDrops from '../src/LinkDrops'




function App() {

  

  return (
    <>
      <Router>
        <LinkDrops/>
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
          <Route path='/Terms' element={<Terms/>}/>
          <Route path='/Privacy' element={<Privacy/>}/>
          <Route path='/Accessibility' element={<Accessibility/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
