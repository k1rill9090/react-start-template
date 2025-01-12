import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import styles from './MyAuthForm.module.sass';
import { useDispatch } from 'react-redux';
import { generateToken } from 'src/store/slices/token/token';
import { validateUser } from './validateUser';
import { setProfile } from 'src/store/slices/profile/profile';
import { useNavigate } from 'react-router-dom';


export interface Iform {
  email: string;
  password: string;
}

const MyAuthForm: FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Iform>({ mode: 'onChange' });

  const onSubmit = (data: Iform) => {
    if (validateUser(data)) {
      dispatch(setProfile(data))
      dispatch(generateToken())
      reset();
      navigate('/profile')
    } else {
      alert('Invalid email or password');
    }

  };

  const validation = (err: string, fields: { name: string; value?: string }) => {
    switch (err) {
      case 'required':
        return <span className={styles.errorText}>{fields.name} required</span>;
      case 'pattern':
        return (
          <span className={styles.errorText}>
            {fields.name} {fields.value}
          </span>
        );
      default:
        return <span className={styles.errorText} />;
    }
  };

  return (
    <div className={styles.mainContent}>
      <h2>Авторизация</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formContent}>
        <div>
          <input
            placeholder="Email"
            type="text"
            className={errors.email?.type ? styles.errOutline : styles.field}
            {...register('email', {
              required: true,
              pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            })}
          />
          {validation(errors.email?.type, { name: 'Email', value: 'invalid' })}
        </div>

        <div>
          <input
            placeholder="Password"
            type="password"
            className={errors.password?.type ? styles.errOutline : styles.field}
            {...register('password', {
              required: true,
              pattern: /^(?=.*[A-Z])(?=.*[\W_]).{8,}$/,
            })}
          />
          {validation(errors.password?.type, {
            name: 'Password',
            value: 'must be 8 characters long, contain a capital letter and a special characters',
          })}
        </div>
        <button type="submit">Войти</button>
      </form>
      <div className={styles.regButton} onClick={() => navigate("/register")}>Зарегистрироваться</div>
    </div>
  );
};

export default MyAuthForm;
