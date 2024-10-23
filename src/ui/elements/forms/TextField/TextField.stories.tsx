import { decorators } from '@.storybook/decorators';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import TextField from '.';

const meta = {
  title: 'Elements/Forms/Text Field',
  component: TextField,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['contained', 'outlined', 'underlined']
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg']
    },
    placeholder: {
      control: { type: 'text' }
    },
    onChange: { action: 'change' },
    onBlur: { action: 'blur' }
  },
  args: {
    variant: 'contained',
    size: 'md',
    placeholder: 'Placeholder'
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
    ...TextFieldTemplate.args
  }
};

export const WithEndIcon: Story = {
  ...TextFieldTemplate,
  args: {
    ...TextFieldTemplate.args
  }
};
