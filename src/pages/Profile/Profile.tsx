import React from 'react'
import styles from './Profile.module.sass'
import MyAuthForm from 'src/homeworks/jsxCss/MyAuthForm/MyAuthForm'


const Profile = () => {

  return (
    <div className={styles.form}>
      <MyAuthForm/>
    </div>
    
  )
}

export default Profile