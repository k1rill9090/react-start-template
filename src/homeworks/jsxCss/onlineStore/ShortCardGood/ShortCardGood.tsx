import React, { FC } from 'react';
import styles from './ShortCardGood.module.sass';
import ButtonAddToCart from '../ButtonAddToCart/ButtonAddToCart';
import clsx from 'clsx';

interface ShortCardGoodProps {
  sum: number;
  img: string;
  name: string;
  desc: string;
  theme: string;
}

const ShortCardGood: FC<ShortCardGoodProps> = ({ sum, img, name, desc, theme }) => {
  return (
    <div className={clsx(styles.mainContent, styles[`mainContent-${theme}`])}>
      <img src={img} alt='фото товара'/>
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
