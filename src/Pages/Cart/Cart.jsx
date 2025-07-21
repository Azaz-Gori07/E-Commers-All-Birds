import React, { useState } from 'react'
import './Cart.css'

function Cart({ openCart , setOpenCart}) {
  return (
    <>
      {
        openCart && (
          <main className='main'>
            <div className={openCart ? "cart-show" : "cart-hide"}>
              <p onClick={() => setOpenCart(false)} className='font-black mt-7'>X</p>
            </div>
          </main>
        )
      }
    </>
  )
}

export default Cart
