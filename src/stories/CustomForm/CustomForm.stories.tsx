import { Meta } from '@storybook/react';
import ContextLayout from '../ContextLayout/ContextLayout';
import Layout from '../../homeworks/jsxCss/general/Layout/Layout';
import React from 'react';
import {SingInBlock} from '../../pages/SingInBlock'
import styles from './Layout.module.sass'

const meta: Meta<typeof ContextLayout> = {
  title: 'Homework10_forms/SignInBlock',
  component: ContextLayout,
};
export default meta;

export const primary = {
  args: {
    children: (
        <div className={styles.form}>
            <h2>Авторизация</h2>
            <SingInBlock />
        </div>
      
    ),
  },
};