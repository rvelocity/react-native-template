import {Meta, StoryObj} from '@storybook/react';
import React from 'react';
import {Button, View} from 'react-native';
import Loader from '../../src/ui/elements/feedback/Loader';

const meta = {
  title: 'Elements/Feedback/Loader',
  component: Loader,
  argTypes: {},
} satisfies Meta<typeof Loader>;

export default meta;

type Story = StoryObj<typeof Loader>;

const LoaderTemplate: Story = {
  render: ({...args}) => {
    return <Loader {...args} />;
  },
};

export const Default: Story = {
  ...LoaderTemplate,
};
