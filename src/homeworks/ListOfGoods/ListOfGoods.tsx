import React, { FC, useRef, useState } from 'react';
import { createRandomProduct, Product } from '../ts1/3_write';
import ShortCardGood from '../jsxCss/onlineStore/ShortCardGood/ShortCardGood';
import styles from './ListOfGoods.module.sass';
import { useTheme } from '../ThemeSwitcher/ThemeContext/ThemeContext';
import clsx from 'clsx';
import { useObserver } from './useObserver';



const ListOfGoods = () => {
  const { theme } = useTheme();

  const [goodsArr, setGoodsArr] = useState([]);
  const addGood = () => {
    const newGood = createRandomProduct('28.10.2024');
    setGoodsArr([...goodsArr, newGood]);
  };

  const lastElem = useRef(null);

  useObserver(lastElem, addGood, goodsArr);

  return (
    <div >
      <h2>Список товаров</h2>
      <div>
        {goodsArr.map((p) => (
          <ShortCardGood key={p.id} sum={p.price} img={p.photo} name={p.name} desc={p.desc} theme={theme} />
        ))}
      </div>
      <button className={clsx([styles.btn])} onClick={() => addGood()}>
        Показать еще
      </button>
      <div ref={lastElem} className={styles.observerDiv}></div>
    </div>
  );
};

export default ListOfGoods;
