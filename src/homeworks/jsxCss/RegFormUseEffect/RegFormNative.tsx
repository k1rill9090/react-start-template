import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './RegFormNative.module.sass';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { URL } from 'src/constants';


export interface Iform {
  email: string;
  password: string;
}

const RegFormNative: FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Iform>({ mode: 'onChange' });

  const onSubmit = (data: Iform) => {
    axios.post(
      URL,
      {
        email: data.email,
        password: data.password
      }
    ).then(
      (resp) => {
        // console.log(resp)
        alert('Учетная запись создана!')
        navigate('/login')
      }
    ).catch((err) => {
      // console.log(err.response)
      switch (err.message) {
        case 'Network Error': alert('Ошибка загрузки данных'); break;
        default: alert(`ОШИБКА: ${err.response.data.errors[0].message}`); break;
      }
      
    })
  };

  return (
    <>
      <h2>Регистрация</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formContent}>
        <div>
          <input
            placeholder="Email"
            type="text"
            className={errors.email?.type ? styles.errOutline : styles.field}
            {...register('email', {
              required: true,
            })}
          />
        </div>

        <div>
          <input
            placeholder="Password"
            type="password"
            className={errors.password?.type ? styles.errOutline : styles.field}
            {...register('password', {
              required: true,
            })}
          />
        </div>
        <button type="submit">Зарегистрироваться</button>
      </form>
    </>
  );
};

export default RegFormNative;
