import React from 'react'
import GoodInCart from 'src/homeworks/jsxCss/onlineStore/GoodInCart/GoodInCart'
import styles from './Cart.module.sass'
import { useDispatch, useSelector } from 'react-redux'
import { productInCart, productInCartType, selectCart } from 'src/store/slices/cart/cartSlice'
import { createOrder, TypeOrderPayload } from 'src/store/slices/order/orderSlice'
import useCheckCreateOrder from 'src/app/hooks/useCheckCreateOrder'

const Cart = () => {
  const listCart = useSelector(productInCart);
  const dispatch = useDispatch()

  const calcSum = (goods: productInCartType[]) => {
    return goods.reduce(
      (sum: number, current: productInCartType) => sum + (current.price * current.quantity), 0
    )
  }

  const addOrder = (productsInCart: productInCartType[]) => {
    const orderPayload = {
      products: productsInCart.map(
        (item) => {return({id: item.id, quantity: item.quantity})}
      )
    };
    dispatch(createOrder(orderPayload))
  }

  useCheckCreateOrder();

  return (
    <>
    <div className={styles.mainContent}>
     <h2>Корзина</h2>
     {listCart.map(
      (item: productInCartType) => 
        <GoodInCart 
        key={item.id} 
        id = {item.id}
        sum={item.price} 
        name={item.name} 
        quantity={item.quantity}
      />)}
      
    </div>
    <div className={styles.orderLayout}>
    <div className={styles.order}>
    {
      listCart.length > 0 ?
      <div>
        <span><h3>Информация о заказе</h3></span>
        <span>Заказ на сумму: <b>{
            calcSum(listCart)
          }</b> Руб.
        </span>
        <button 
          className={styles.orderBtn}
          onClick={() => addOrder(listCart)}
        >Оформить заказ</button>
      </div>
      : 
      <div className={styles.emptyCart}>В корзине нет товаров</div>
    }
  </div>
  </div>
  </>
  )
}

export default Cart