import React, { useState } from 'react'
// import MensLink from './Link-Droper/Men/Men'
import TopGreen from './Components/TopGreen/TopGreen'
import Navbar from './Components/Navbar/Navbar'
// import WomenLink from './Link-Droper/Women/Women'
// import Sustainability from './Link-Droper/Sustainability/Sustainability'


function LinkDrops() {

  const [drop, setDrop] = useState()

  const HandleDrop = () => {
    setDrop(prev => !prev)
  };

  const [drop2, setDrop2] = useState()

  const HandleDrop2 = () => {
    setDrop2(prev => !prev)
  };

  const [drop3, setDrop3] = useState()

  const HandleDrop3 = () => {
    setDrop3(prev => !prev)
  }


  return (
    <>
      <TopGreen />
      <Navbar HandleDrop={HandleDrop} HandleDrop2={HandleDrop2} HandleDrop3={HandleDrop3} drop={drop}/>
      {/* <MensLink drop={drop} /> */}
      {/* <WomenLink drop={drop2}/>
      <Sustainability drop={drop3}/> */}
    </>
  )
}

export default LinkDrops
