import React, { FC, memo } from 'react';
import styles from './ShortCardGood.module.sass';
import ButtonAddToCart from '../ButtonAddToCart/ButtonAddToCart';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { selectCart } from 'src/store/slices/cart/cartSlice';
import { useNavigate } from 'react-router-dom';


interface ShortCardGoodProps {
  id: string;
  sum: number;
  img: string;
  name: string;
  desc: string;
  theme?: string;
  quantity: number;
}

const ShortCardGood: FC<ShortCardGoodProps> = ({ ...props }) => {
  const token = localStorage.getItem('token')    
  const navigate = useNavigate()

  return (
    <div className={clsx(styles.mainContent)}>
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
      {
        token ?
        <ButtonAddToCart 
          count={props.quantity}
          idProduct={props.id}
        />
        :
        <button className={styles.authBtn} onClick={() => navigate('/login')}>
          Авторизуйтесь для добавления в корзину
        </button>
      }
    </div>
  );
};

export default memo(ShortCardGood);
