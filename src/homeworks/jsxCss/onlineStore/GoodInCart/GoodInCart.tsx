import React, { FC } from 'react';
import styles from './GoodInCart.module.sass';
import { useDispatch } from 'react-redux';
import { removeFromCart } from 'src/store/slices/cart/cartSlice';

interface GoodInCartProps {
  sum: number;
  name: string;
  quantity: number;
  id: string;
}

const GoodInCart: FC<GoodInCartProps> = ({ sum, name, quantity, id }) => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(removeFromCart(id))
  }

  return (
    <div className={styles.mainContent}>
      <div className={styles.goodsInfo}>
        <span>{name}</span>
        <span>
          Цена: <b>{sum} руб.</b>
        </span>
        <span> Количество: {quantity}</span>
      </div>
      <button className={styles.cartButton} onClick={handleClick}>Удалить из корзины</button>
    </div>
  );
};

export default GoodInCart;
