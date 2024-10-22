import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Loader from '.';

const meta = {
  title: 'Elements/Feedback/Loader',
  component: Loader,
  argTypes: {}
} satisfies Meta<typeof Loader>;

export default meta;

type Story = StoryObj<typeof Loader>;

const LoaderTemplate: Story = {
  render: ({ ...args }) => {
    return <Loader {...args} />;
  }
};

export const Default: Story = {
  ...LoaderTemplate
};
