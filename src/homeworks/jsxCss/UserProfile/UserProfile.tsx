import React, { useEffect } from 'react';
import styles from './UserProfile.module.sass'
import { useDispatch, useSelector } from 'react-redux';
import { removeProfile, selectProfile } from 'src/store/slices/profile/profile';
import { removeToken } from 'src/store/slices/token/token';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const user = useSelector(selectProfile)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    // если не авторизован, то редирект на страницу логина
    if (user === null) {
      navigate('/login')
    }
  }, [])

  return (
    <div className={styles.userProfile}>
      <button className={styles.btn} onClick={() => {
        dispatch(removeToken());
        dispatch(removeProfile())
        navigate('/login')
      }}>выйти</button>
      <h2>Профиль пользователя</h2>

      { user !== null 
        ?
        <div>
          <p><strong>Имя:</strong> {user.name}</p>
          <p><strong>Электронная почта:</strong> {user.email}</p>
          <p><strong>Тип профиля:</strong> {user.role}</p>
        </div>
        : <p>Нет данных по пользователю</p>
      }
    </div>
  );
};

export default UserProfile;