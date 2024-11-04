import React, { FC, useEffect, useRef, useState } from 'react';
import { createRandomProduct, Product } from '../ts1/3_write';
import ShortCardGood from '../jsxCss/onlineStore/ShortCardGood/ShortCardGood';
import styles from './ListOfGoods.module.sass';
import { useTheme } from '../ThemeSwitcher/ThemeContext/ThemeContext';
import clsx from 'clsx';

interface ListOfGoodsProps {
  goods: Array<Product>;
}

const ListOfGoods: FC<ListOfGoodsProps> = ({ goods }) => {
  const { theme } = useTheme();

  const [goodsArr, setGoodsArr] = useState(goods);
  const addGood = () => {
    const newGood = createRandomProduct('28.10.2024');
    setGoodsArr([...goodsArr, newGood]);
  };

  const lastElem = useRef(null);
  const observer = useRef(null);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();
    const callback = (entries: Array<IntersectionObserverEntry>) => {
      if (entries[0].isIntersecting) {
        addGood();
      }
    };
    observer.current = new IntersectionObserver(callback);
    observer.current.observe(lastElem.current);
  }, [goodsArr]);

  return (
    <div className={styles[`background-${theme}`]}>
      <h2>Список товаров</h2>
      <div>
        {goodsArr.map((p) => (
          <ShortCardGood key={p.id} sum={p.price} img={p.photo} name={p.name} desc={p.desc} theme={theme} />
        ))}
      </div>
      <button className={clsx([styles.btn, styles[`btn-${theme}`]])} onClick={() => addGood()}>
        Показать еще
      </button>
      <div ref={lastElem} className={styles.observerDiv}></div>
    </div>
  );
};

export default ListOfGoods;
