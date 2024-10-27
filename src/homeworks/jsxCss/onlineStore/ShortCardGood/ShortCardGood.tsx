import React, { FC } from 'react';
import styles from './ShortCardGood.module.sass';
import ButtonAddToCart from '../ButtonAddToCart/ButtonAddToCart';

interface ShortCardGoodProps {
  sum: number;
  img: string;
  name: string;
  desc: string;
}

const ShortCardGood: FC<ShortCardGoodProps> = ({ sum, img, name, desc }) => {
  return (
    <div className={styles.mainContent}>
      <img src={img} />
      <div className={styles.goodsInfo}>
        <span>{name}</span>
        <span>
          Цена: <b>{sum} руб.</b>
        </span>
        <div className={styles.desc}>
          Описание:
          <br /> {desc}
        </div>
      </div>
      <ButtonAddToCart count={0} />
    </div>
  );
};

export default ShortCardGood;
