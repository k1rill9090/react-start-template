import React from 'react'
import GoodInCart from 'src/homeworks/jsxCss/onlineStore/GoodInCart/GoodInCart'
import styles from './Cart.module.sass'
import { useSelector } from 'react-redux'
import { productInCart, productInCartType, selectCart } from 'src/store/slices/cart/cartSlice'

const Cart = () => {
  const listCart = useSelector(productInCart)

  return (
    <div className={styles.mainContent}>
     <h2>Корзина</h2>
     {listCart.map(
      (item: productInCartType) => 
        <GoodInCart 
        key={item.id} 
        id = {item.id}
        sum={item.price} 
        name={item.name} 
        quantity={item.quantity}
      />)}
    </div>
   
  )
}

export default Cart