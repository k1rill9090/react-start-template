import React, { FC } from 'react';
import styles from './GoodInCart.module.sass';

interface GoodInCartProps {
  sum: number;
  name: string;
}

const GoodInCart: FC<GoodInCartProps> = ({ sum, name }) => {
  return (
    <div className={styles.mainContent}>
      <div className={styles.goodsInfo}>
        <span>{name}</span>
        <span>
          Цена: <b>{sum} руб.</b>
        </span>
      </div>
      <button className={styles.cartButton}>Удалить из корзины</button>
    </div>
  );
};

export default GoodInCart;
