import React, { FC, useEffect, useRef, useState } from 'react';
import { createRandomProduct, Product } from '../ts1/3_write';
import ShortCardGood from '../jsxCss/onlineStore/ShortCardGood/ShortCardGood';
import styles from './ListOfGoods.module.sass';
import { useTheme } from '../ThemeSwitcher/ThemeContext/ThemeContext';
import clsx from 'clsx';
import { useObserver } from './useObserver';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, initialGetProductsSaga, selectProducts } from 'src/store/slices/products/productsSlice';
import { productInCart, productInCartType, selectCart } from 'src/store/slices/cart/cartSlice';



const ListOfGoods = () => {
  const dispatch = useDispatch()
  const listProducts = useSelector(selectProducts)
  const cartContent = useSelector(productInCart)
  const { theme } = useTheme();

  const addGood = () => {
    dispatch(initialGetProductsSaga());
  };

  const lastElem = useRef(null);

  useObserver(lastElem, addGood, listProducts.products);

  return (
    <div >
      <h2>Список товаров</h2>
      <div>
        {listProducts.products.map((p) => (
          <ShortCardGood 
            key={p.id} 
            id={p.id} 
            sum={p.price} 
            img={p.photo} 
            name={p.name} 
            desc={p.desc} 
            theme={theme} 
            quantity={cartContent.find((elem: productInCartType) => elem.id === p.id)
              ?
                cartContent.find((elem: productInCartType) => elem.id === p.id).quantity
              : 
                0
              } 
          />))}
      </div>
      <button className={clsx([styles.btn])} onClick={() => addGood()}>
        Показать еще
      </button>
      <div ref={lastElem} className={styles.observerDiv}></div>
    </div>
  );
};

export default ListOfGoods;
