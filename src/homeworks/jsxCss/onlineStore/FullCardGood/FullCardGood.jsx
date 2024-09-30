import React from 'react'
import styles from './FullCardGood.module.sass'
import ButtonAddToCart from '../ButtonAddToCart/ButtonAddToCart'
import Slider from './Slider/Slider'

const FullCardGood = ({sum, img, name, categoryName, desc}) => {
  return (
    <div className={styles.main}>
      <div className={styles.header}>{name}</div>
      
      <div>
        <Slider imgs={img}/>
        <div className={styles.info}>
          <div>Категория: {categoryName}</div>
          <div>Цена: <b>{sum} руб.</b></div>
        </div>
        <div className={styles.desc}>
          <span>Описание</span>
          {desc}
        </div>
        <ButtonAddToCart />
      </div>
      
    </div>
  )
}

export default FullCardGood