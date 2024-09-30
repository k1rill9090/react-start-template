import React from 'react'
import styles from './ShortCardGood.module.sass'
import ButtonAddToCart from '../ButtonAddToCart/ButtonAddToCart'

const ShortCardGood = ({sum, img, name, desc}) => {
  return (
    <div className={styles.mainContent}>
      <img src={img}/>
      <div className={styles.goodsInfo}>
        <span>{name}</span>
        <span>Цена: <b>{sum} руб.</b></span>
        <div className={styles.desc}>Описание:<br /> {desc}</div>
      </div>
      <ButtonAddToCart />
    </div>
  )
}

export default ShortCardGood