import { decorators } from '@.storybook/decorators';
import TextFieldMeta from '@/ui/elements/forms/TextField/TextField.stories';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import SearchBar from './SearchBar';

const meta = {
  title: 'Components/SearchBar',
  component: SearchBar,
  argTypes: {
    ...TextFieldMeta.argTypes
  },
  args: { ...TextFieldMeta.args },
  decorators: decorators
} satisfies Meta<typeof SearchBar>;

export default meta;

type Story = StoryObj<typeof SearchBar>;

const SearchBarTemplate: Story = {
  render: ({ ...args }) => {
    return <SearchBar {...args}>{args.children}</SearchBar>;
  }
};

export const Default: Story = {
  ...SearchBarTemplate
};
