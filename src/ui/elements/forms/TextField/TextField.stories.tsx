import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import TextField from '.';
import { decorators } from '@.storybook/decorators';
import { type Icon as IconType } from '@assets/constants/icons';

const meta = {
  title: 'Elements/Forms/Text Field',
  component: TextField,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['default', 'outlined', 'underlined']
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg']
    },
    placeholder: {
      control: { type: 'text' }
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'danger', 'warning']
    },
    startIcon: {
      control: { type: 'text' }
    },
    endIcon: {
      control: { type: 'text' }
    },
    onChange: { action: 'change' },
    onBlur: { action: 'blur' }
  },
  args: {
    variant: 'default',
    size: 'md',
    color: 'secondary',
    placeholder: 'Placeholder',
    startIcon: '' as IconType,
    endIcon: '' as IconType
  },
  decorators: decorators
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof TextField>;

const TextFieldTemplate: Story = {
  render: ({ ...args }) => {
    return <TextField {...args}>{args.children}</TextField>;
  }
};

export const Default: Story = {
  ...TextFieldTemplate
};

export const WithStartIcon: Story = {
  ...TextFieldTemplate,
  args: {
    ...TextFieldTemplate.args,
    startIcon: 'menu' // Replace with actual icon component
  }
};

export const WithEndIcon: Story = {
  ...TextFieldTemplate,
  args: {
    ...TextFieldTemplate.args,
    endIcon: 'menu' // Replace with actual icon component
  }
};

export const WithoutIcon: Story = {
  ...TextFieldTemplate,
  args: {
    ...TextFieldTemplate.args
  }
};
