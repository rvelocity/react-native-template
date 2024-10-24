import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { decorators } from '@.storybook/decorators.tsx';
import IconMeta from '../Icon/Icon.stories.tsx';
import IconButton from './IconButton.tsx';

const meta = {
  title: 'Elements/Media Icons/IconButton',
  component: IconButton,
  argTypes: {
    ...IconMeta.argTypes,
    iconStyle: {
      control: { type: 'radio' },
      options: ['default', 'contained', 'outlined']
    },
    disabled: {
      control: { type: 'boolean' }
    }
  },
  args: {
    ...IconMeta.args
  },
  decorators: decorators
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof IconButton>;

const IconButtonTemplate: Story = {
  render: ({ ...args }) => {
    return <IconButton {...args} />;
  }
};

export const Image: Story = {
  ...IconButtonTemplate,
  args: {
    variant: 'image',
    icon: 'avatar'
  }
};

export const Vector: Story = {
  ...IconButtonTemplate,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: [
        'ant',
        'entypo',
        'evil',
        'fa',
        'fa5',
        'feather',
        'fontisto',
        'foundation',
        'ionicon',
        'material',
        'materialCommunity',
        'octicon',
        'simpleLine',
        'zocial'
      ]
    }
  },
  args: {
    variant: 'vector',
    icon: 'arrowleft',
    type: 'ant'
  }
};

export const Svg: Story = {
  ...IconButtonTemplate,
  args: {
    variant: 'svg',
    icon: 'menu'
  }
};
