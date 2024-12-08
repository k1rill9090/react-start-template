import React, { FC, memo } from 'react';
import styles from './ShortCardGood.module.sass';
import ButtonAddToCart from '../ButtonAddToCart/ButtonAddToCart';
import clsx from 'clsx';

interface ShortCardGoodProps {
  sum: number;
  img: string;
  name: string;
  desc: string;
  theme?: string;
}

const ShortCardGood: FC<ShortCardGoodProps> = ({ ...props }) => {
  return (
    <div className={clsx(styles.mainContent, styles[`mainContent-${props.theme}`])}>
      <img src={props.img} alt="фото товара" />
      <div className={styles.goodsInfo}>
        <span>{props.name}</span>
        <span>
          Цена: <b>{props.sum} руб.</b>
        </span>
        <div className={styles.desc}>
          Описание:
          <br /> {props.desc}
        </div>
      </div>
      <ButtonAddToCart count={0} />
    </div>
  );
};

export default memo(ShortCardGood);
