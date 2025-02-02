import React from 'react'
import RegFormUseEffect from '../RegFormUseEffect/RegFormNative'
import styles from './RegForm.module.sass'
import RegFormSaga from '../RegFormSaga/RegFormSaga'
import { useNavigate } from 'react-router-dom'

const RegForm = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.reg}>
        <div className={styles.regComponent}>
            <RegFormSaga />
            <button className={styles.btn} onClick={() => navigate("/login")}>Авторизация</button>
        </div>
    </div>
  )
}

export default RegForm