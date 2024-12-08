import React from 'react'
import GoodInCart from 'src/homeworks/jsxCss/onlineStore/GoodInCart/GoodInCart'
import styles from './Cart.module.sass'

const Cart = () => {
  return (
    <div className={styles.mainContent}>
     <h2>Корзина</h2>
     <GoodInCart name='phone' sum={150} />
     <GoodInCart name='phone' sum={150} />
     <GoodInCart name='phone' sum={150} />
     <GoodInCart name='phone' sum={150} />
     <GoodInCart name='phone' sum={150} />
    </div>
   
  )
}

export default Cart