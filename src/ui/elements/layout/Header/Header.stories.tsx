import { decorators } from '@.storybook/decorators';
import { NavigationContainer } from '@react-navigation/native';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import IconButton from '../../media-icons/IconButton';
import Header from './Header';

const meta: Meta<typeof Header> = {
  title: 'Elements/Layout/Header',
  component: Header,
  decorators: decorators
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Basic: Story = {
  render: () => (
    <Header>
      <Header.Content title="Home" />
    </Header>
  )
};

export const WithBackAction: Story = {
  render: () => (
    <NavigationContainer>
      <Header>
        <Header.BackAction />
        <Header.Content title="Profile" />
      </Header>
    </NavigationContainer>
  )
};

export const WithActions: Story = {
  render: () => (
    <NavigationContainer>
      <Header>
        <Header.BackAction />
        <Header.Content title="Settings" subTitle="Manage your preferences" />
        <Header.Action icon="arrowleft" variant="vector" type="ant" />
      </Header>
    </NavigationContainer>
  )
};

export const CustomChildren: Story = {
  render: () => (
    <NavigationContainer>
      <Header>
        <Header.BackAction />
        <Header.Content title="Search" />
        <IconButton size={24} variant="vector" type="ant" icon="customerservice" />
      </Header>
    </NavigationContainer>
  )
};
