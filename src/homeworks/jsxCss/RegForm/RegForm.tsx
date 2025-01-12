import React from 'react'
import RegFormUseEffect from '../RegFormUseEffect/RegFormNative'
import styles from './RegForm.module.sass'
import RegFormSaga from '../RegFormSaga/RegFormSaga'

const RegForm = () => {
  return (
    <div className={styles.reg}>
        <div className={styles.regComponent}>
            <span>Регистрация (вызов апи внутри компонента)</span>
            <RegFormUseEffect />
        </div>
        <br/>
        <br/>
        <br/>
        <div className={styles.regComponent}>
            <span>Регистрация (вызов апи через redux saga)</span>
            <RegFormSaga />
        </div>
    </div>
  )
}

export default RegForm