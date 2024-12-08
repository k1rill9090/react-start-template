import { Meta } from '@storybook/react';
import ContextLayout from './ContextLayout';
import Layout from '../../homeworks/jsxCss/general/Layout/Layout';
import React from 'react';
import LayoutBody from './LayoutBody';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '../../homeworks/ThemeSwitcher/ThemeContext/ThemeContext';


const meta: Meta<typeof ContextLayout> = {
  title: 'Homework4_React_Hooks/General/ContextLayout',
  component: ContextLayout,
};
export default meta;

export const primary = {
  args: {
    children: (
      <BrowserRouter>
      <ThemeProvider>
        <Layout>
          <LayoutBody />
        </Layout>
      </ThemeProvider>
      </BrowserRouter>
    ),
  },
};
