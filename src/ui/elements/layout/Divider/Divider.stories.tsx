import { decorators } from '@.storybook/decorators';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Divider from '.';

const meta = {
  title: 'Elements/Layout/Divider',
  component: Divider,
  argTypes: {
    variant: { control: { type: 'select' }, options: ['line', 'dotted', 'dashed'] },
    align: { control: { type: 'select' }, options: ['horizontal', 'vertical'] }
  },
  args: {
    variant: 'line',
    align: 'horizontal'
  },
  decorators: decorators
} satisfies Meta<typeof Divider>;

export default meta;

type Story = StoryObj<typeof Divider>;

const DividerTemplate: Story = {
  render: args => {
    return <Divider {...args} />;
  }
};

export const Default = {
  ...DividerTemplate
};

export const Horizontal = {
  ...DividerTemplate,
  args: {
    variant: 'line',
    align: 'horizontal'
  }
};

export const Vertical = {
  ...DividerTemplate,
  args: {
    variant: 'line',
    align: 'vertical'
  }
};
