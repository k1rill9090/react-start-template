import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Iform } from '../RegFormUseEffect/RegFormNative';
import { useForm } from 'react-hook-form';
import styles from './RegFormSaga.module.sass';
import { clearRegState, getRegInfo, regUser } from 'src/store/slices/registration/registration';
import useCheckRegStatus from 'src/app/hooks/useCheckRegStatus';

const RegFormSaga = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const regStatus = useSelector(getRegInfo)
    const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
    } = useForm<Iform>({ mode: 'onChange' });
  
    const onSubmit = (data: Iform) => {
      dispatch(regUser({email: data.email, password: data.password}))
    };

    useCheckRegStatus(regStatus)
  
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
}

export default RegFormSaga