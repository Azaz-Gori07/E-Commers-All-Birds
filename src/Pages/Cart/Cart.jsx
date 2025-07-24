import React, { useEffect } from 'react'
import './Cart.css'
import { GrClose } from "react-icons/gr";
import { useCart } from '../../Components/CartContext/cartContext'
import { FaPlus } from "react-icons/fa6";
import { LuMinus } from "react-icons/lu";

function Cart({ openCart, setOpenCart }) {

  useEffect(() => {
    if (openCart) {
      document.body.classList.add("no-scroll")
    } else {
      document.body.classList.remove("no-scroll")
    }
  }, [openCart]);

  const { cartContext, increaseQuantity, decreaseQuantity, deleteProduct } = useCart();

  const getTotalPrice = () => {
    return cartContext.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  return (
    <>
      <div className={openCart ? "cart-show" : "cart-hide"}>
        <div className="index">
          <div className="values">
            <h2 className='cart'>
              CART ({cartContext.reduce((total, item) => total + item.quantity, 0)})
            </h2>
            <p className='note'>You've earned free shipping!</p>
            <div id='close'><GrClose onClick={() => setOpenCart((prev => !prev))} /></div>
          </div>
          <div className="devider"></div>
        </div>

        <div className="added-items">
          {
            cartContext.map((item) => (
              <div className="items" key={item.id}>
                <img src={
                item?.image
                  ? item.image.startsWith('http')
                    ? item.image
                    : `/${item.image}`
                  : '/fallback.jpg' // Put a fallback.jpg in public/
              } className='item-image' />
                <div className="details">
                  <h3 >{item.title}</h3>
                  <p className='p1'>Color: {item.color} {item.detail}</p>
                  <p className='size'>Size: {item.size}</p>
                  <p className='quantity'>
                    <LuMinus id='decrease' onClick={() => decreaseQuantity(item.id)} />
                    &nbsp;{item.quantity}&nbsp;
                    <FaPlus id='increase' onClick={() => increaseQuantity(item.id)} />
                  </p>
                </div>

                <div className="remove">
                  <h3>US${Math.trunc(item.price * item.quantity)}</h3>
                  <GrClose onClick={() => deleteProduct(item.id)} className='cursor-pointer' />
                </div>
              </div>
            ))
          }
        </div>

        <div className="paymentSection">
          <p className='headline'><span>Add Gift Note & Logo Free Packaging +</span></p>
          <div className="total-price">
            <h1 className='subtotal'><b>Subtotal</b> <b>US${Math.trunc(getTotalPrice())}</b></h1>
            <button className='checkout'>CHECKOUT</button>
          </div>
          <div className="payment-option">
            <button className='amazone-pay'><img src="./src/assest/Amazon_Pay__Black.svg" alt="" /></button>
            <button className='paypal'><img src="./src/assest/PayPal_-_Color.svg" alt="" /></button>
            <button className='shoppay'><img src="./src/assest/ShopPay_-_White.svg" alt="" /></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
