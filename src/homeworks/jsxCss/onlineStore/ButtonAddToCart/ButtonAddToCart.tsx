import React, { FC, useState } from 'react';
import styles from './ButtonAddToCart.module.sass';
import InputAddToCart from './InputAddToCart/InputAddToCart';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from 'src/store/slices/cart/cartSlice';

interface ButtonAddToCartProps {
  count: number;
  idProduct: string;
}

const ButtonAddToCart: FC<ButtonAddToCartProps> = ({ count, idProduct}) => {
  const [qty, setQty] = useState(count);
  const dispatch = useDispatch()
  const changeQty= (newCount: number) => {
    setQty(() => newCount)
  }
  return (
    <div className={styles.card}>
      {qty > 0
        ? 
        <InputAddToCart count={qty} setCount={changeQty} idProduct={idProduct}/> 
        : 
        <button 
          className={styles.cardButton} 
          onClick={() => {
            dispatch(addToCart({id: idProduct, quantity: qty+1}))
            changeQty(qty+1)
          }}
        >Добавить в корзину</button>
      }
    </div>
  );
};

export default ButtonAddToCart;
