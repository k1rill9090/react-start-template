import React, { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styles from './ProductForm.module.sass';
import { createRandomProduct, Product } from 'src/homeworks/ts1/3_write';
import { useDispatch } from 'react-redux';
import { addProduct, clearAddPRoductStatus, getProduct, initialGetProductsSaga } from 'src/store/slices/products/productsSlice';
import useCheckCreateProductStatus from 'src/app/hooks/useCheckCreateProductStatus';
import { useNavigate } from 'react-router-dom';

interface Iform {
  name: string;
  photo: string;
  desc: string;
  price: number;
  category: Product['category']["name"];
}


const ProductForm: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Iform>({ mode: 'onSubmit' });

  const onSubmit = (data: Iform) => {
    dispatch(addProduct({
      name: data.name,
      photo: data.photo,
      desc: data.desc,
      price: data.price,
      categoryId: "6515abc8351375825319dcc5",
    }));
    reset();
  };

  useCheckCreateProductStatus();

  const validation = (err: string, fields: { name: string; value?: string }) => {
    switch (err) {
      case 'required':
        return <span className={styles.errorText}>{fields.name} required</span>;
      case 'maxLength':
        return <span className={styles.errorText}>Max lenght {fields.value}</span>;
      case 'min':
        return (
          <span className={styles.errorText}>
            {fields.name} can't be less {fields.value}
          </span>
        );
      default:
        return <span className={styles.errorText} />;
    }
  };
  

  return (
    <div className={styles.layout}>
      <h3>Create product</h3>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formContent}>
        <div>
          <input
            placeholder="Name"
            type="text"
            className={errors.name?.type ? styles.errOutline : styles.field}
            {...register('name', {
              required: true,
              maxLength: 20,
            })}
          />
          {validation(errors.name?.type, { name: 'Name', value: '20' })}
        </div>

        <div>
          <input
            placeholder="Photo (url)"
            type="text"
            className={errors.photo?.type ? styles.errOutline : styles.field}
            {...register('photo', {
              required: true,
            })}
          />
          {validation(errors.photo?.type, { name: 'Photo' })}
        </div>

        <div>
          <textarea
            placeholder="Description"
            className={errors.desc?.type ? styles.errOutline : styles.field}
            {...register('desc', {
              required: true,
            })}
          />
          {validation(errors.desc?.type, { name: 'Description' })}
        </div>

        <div>
          <input
            placeholder="Price"
            type="number"
            step="0.01"
            className={errors.price?.type ? styles.errOutline : styles.field}
            {...register('price', {
              required: true,
              min: 0,
            })}
          />
          {validation(errors.price?.type, { name: 'Price', value: '0' })}
        </div>

        <div>
          {/* <input
            placeholder="Category"
            type="text"
            className={errors.category?.type ? styles.errOutline : styles.field}
            {...register('category', {
              required: true,
            })}
          /> */}
          {validation(errors.category?.type, { name: 'Category' })}
        </div>

        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default ProductForm;
