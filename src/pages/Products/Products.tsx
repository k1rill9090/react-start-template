import React, { useEffect, useState } from 'react'
import styles from './Products.module.sass'
import { useLocation, useNavigate } from 'react-router-dom'
import ListOfGoods from 'src/homeworks/ListOfGoods/ListOfGoods'
import Portal from 'src/homeworks/jsxCss/general/Modal/Portal'
import Modal from 'src/homeworks/jsxCss/general/Modal/Modal'
import ProductForm from 'src/homeworks/jsxCss/ProductForm/ProductForm'

const Products = () => {
  const navigate = useNavigate();
  const currentUrl = useLocation()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (currentUrl.pathname === '/create-product') {
      setIsVisible(true)
    }
  },[])

  const openModal = (state: boolean) => {
    navigate('/create-product')
    setIsVisible(state)
  }
  const closeModal = (state: boolean) => {
    navigate('/products')
    setIsVisible(state)
  }
  return (
    <div className={styles.mainContent}>
      <div>
        <button 
          className={styles.addProductButton}
          onClick={() => openModal(true)}
        >
          Добавить товар
        </button>
        {isVisible &&         <Portal container={document.body}>
            {
                () => 
                    <Modal visible={isVisible} setUnvisible={closeModal}>
                        <ProductForm/>
                    </Modal>
            }
        </Portal>}
      </div>
      <ListOfGoods/>
    </div>
    
  )
}

export default Products