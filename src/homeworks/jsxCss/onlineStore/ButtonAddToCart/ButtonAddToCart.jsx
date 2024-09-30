import React from 'react'
import styles from './ButtonAddToCart.module.sass'
import InputAddToCart from './InputAddToCart/InputAddToCart'

const ButtonAddToCart = ({count}) => {

  return (
    <div className={styles.card}>
      {
        count > 0
        ? <InputAddToCart count={count}/>
        : <button className={styles.cardButton}>Добавить в корзину</button>
      }
    </div>
  )
}

export default ButtonAddToCart