import { Meta } from '@storybook/react';
import ContextLayout from '../../../stories/ContextLayout/ContextLayout';
import React from 'react';
import styles from './ProductForm.module.sass';
import ProductForm from './ProductForm';

const meta: Meta<typeof ContextLayout> = {
  title: 'Homework10_forms/CreateProductForm',
  component: ContextLayout,
};
export default meta;

export const primary = {
  args: {
    children: (
      <div className={styles.story}>
        <ProductForm />
      </div>
    ),
  },
};
