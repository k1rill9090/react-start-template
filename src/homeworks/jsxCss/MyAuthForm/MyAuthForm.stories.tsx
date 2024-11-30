import { Meta } from '@storybook/react';
import ContextLayout from '../../../stories/ContextLayout/ContextLayout';
import React from 'react';
import styles from './MyAuthForm.module.sass';
import MyAuthForm from './MyAuthForm';

const meta: Meta<typeof ContextLayout> = {
  title: 'Homework10_forms/MyAuthForm',
  component: ContextLayout,
};
export default meta;

export const primary = {
  args: {
    children: (
      <div className={styles.story}>
        <MyAuthForm />
      </div>
    ),
  },
};
