import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import Icon from '../../media-icons/Icon';

import Chip from './Chip';

import { decorators } from '@.storybook/decorators';

const meta = {
  title: 'Elements/Data Display/Chip',
  component: Chip,
  argTypes: {
    variant: {
      control: 'select',
      options: ['contained', 'outlined']
    },
    children: {
      control: 'text',
      description: 'Content inside the Chip'
    },
    onPress: { action: 'clicked' }
  },
  args: {
    children: 'Chip Text',
    variant: 'contained'
  },
  decorators: decorators
} satisfies Meta<typeof Chip>;

export default meta;

type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  render: args => <Chip {...args} />
};

export const WithLeftIcon: Story = {
  render: args => (
    <Chip
      {...args}
      left={() => <Icon icon="menu" type="feather" variant="vector" size={16} color="gray" />}
    />
  ),
  args: {
    children: 'Left Icon',
    variant: 'outlined'
  }
};

export const WithRightIcon: Story = {
  render: args => (
    <Chip
      {...args}
      right={() => (
        <Icon icon="chevron-down" type="feather" variant="vector" size={16} color="gray" />
      )}
    />
  ),
  args: {
    children: 'Sort by',
    variant: 'contained'
  }
};

export const WithBothIcons: Story = {
  render: args => (
    <Chip
      {...args}
      left={() => <Icon icon="menu" type="feather" variant="vector" size={16} color="gray" />}
      right={() => <Icon icon="close" type="feather" variant="vector" size={16} color="gray" />}
    />
  ),
  args: {
    children: 'Both Icons',
    variant: 'outlined'
  }
};
