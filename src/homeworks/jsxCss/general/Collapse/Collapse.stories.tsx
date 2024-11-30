import { Meta } from '@storybook/react';
import ContextLayout from '../../../../stories/ContextLayout/ContextLayout';
import Layout from '../Layout/Layout';
import React from 'react';
import Collapse from '../Collapse/Collapse';

const meta: Meta<typeof ContextLayout> = {
  title: 'Homework8_practice2/General/Collapse',
  component: ContextLayout,
};
export default meta;

export const primary = {
  args: {
    children: (
      <Layout>
        <Collapse>
          <ul>
            <li>page1</li>
            <li>page2</li>
            <li>page3</li>
            <li>page4</li>
          </ul>
        </Collapse>
      </Layout>
    ),
  },
};
