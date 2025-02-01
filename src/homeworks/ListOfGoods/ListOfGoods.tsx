import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { createRandomProduct, Product } from '../ts1/3_write';
import ShortCardGood from '../jsxCss/onlineStore/ShortCardGood/ShortCardGood';
import styles from './ListOfGoods.module.sass';
import { useTheme } from '../ThemeSwitcher/ThemeContext/ThemeContext';
import clsx from 'clsx';
import { useObserver } from './useObserver';
import { useDispatch, useSelector } from 'react-redux';
import { changePage, clearAddPRoductStatus, clearProducts, initialGetProductsSaga, selectProducts } from 'src/store/slices/products/productsSlice';
import { productInCart, productInCartType, selectCart } from 'src/store/slices/cart/cartSlice';



const ListOfGoods = () => {
  const dispatch = useDispatch()
  const listProducts = useSelector(selectProducts)
  const cartContent = useSelector(productInCart)
  const { theme } = useTheme();

  const lastElem = useRef(null);

  let totalPages = listProducts.getProducts.totalPages

  const addGood = () => {
    dispatch(initialGetProductsSaga());
    dispatch(clearAddPRoductStatus());
  };

  useEffect(() => {
    if (listProducts.getProducts.error !== '') {
      alert(listProducts.getProducts.error);
      dispatch(clearAddPRoductStatus());
    }
  }, [listProducts.getProducts.error]);

  useObserver(
    lastElem, 
    listProducts.getProducts.page <= totalPages, 
    addGood,
    listProducts.getProducts.products
  );

  return (
    <div >
      <h2>Список товаров</h2>
      <div>
        {
        listProducts.getProducts.products.length === 0 ? <span>нет данных</span> :
        listProducts.getProducts.products.map((p) => (
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
      {
        listProducts.getProducts.page <= listProducts.getProducts.totalPages &&
        <button className={clsx([styles.btn])} onClick={() => addGood()}>
          Показать еще
        </button>
      }
      <div ref={lastElem} className={styles.observerDiv}></div>
    </div>
  );
};

export default ListOfGoods;
