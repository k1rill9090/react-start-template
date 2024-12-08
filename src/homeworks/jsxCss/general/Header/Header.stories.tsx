import type { Meta } from '@storybook/react';
import Header from './Header';
import ContextLayout from '../../../../stories/ContextLayout/ContextLayout';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

const meta: Meta<typeof ContextLayout> = {
  title: 'Homework2/General/Header',
  component: ContextLayout
};

export default meta;

export const primary = {
  args: {
    children: (
      <BrowserRouter 
        future={{
          v7_relativeSplatPath: true,
          v7_startTransition: true
        }}
      >
        <ContextLayout>
          <Header/>
        </ContextLayout>
      </BrowserRouter>
    ),
  },
};
