import { Meta } from '@storybook/react';
import ContextLayout from '../../../../stories/ContextLayout/ContextLayout';
import Layout from '../Layout/Layout';
import React from 'react';
import ToolTip from './ToolTip';
import { BrowserRouter } from 'react-router-dom';

const meta: Meta<typeof ContextLayout> = {
  title: 'Homework7_practice1/General/ToolTip',
  component: ContextLayout,
};
export default meta;

export const primary = {
  args: {
    children: (
      <BrowserRouter>
        <Layout>
          <ToolTip tip="some text for tip">
            {({ ref, show, hide }) => (
              <span style={{ border: 'solid 1px black' }} ref={ref} onMouseEnter={show} onMouseLeave={hide}>
                hover me
              </span>
            )}
          </ToolTip>
          <div style={{ padding: ' 0 100px 0' }}>
            <ToolTip tip="some text for tip">
              {({ ref, show, hide }) => (
                <div
                  style={{ border: 'solid 1px black', textAlign: 'center' }}
                  ref={ref}
                  onMouseEnter={show}
                  onMouseLeave={hide}
                >
                  one more Tooltip
                </div>
              )}
            </ToolTip>
          </div>
        </Layout>
      </BrowserRouter>
    ),
  },
};
