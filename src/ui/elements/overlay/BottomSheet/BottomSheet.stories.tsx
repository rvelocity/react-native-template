/* eslint-disable react-hooks/rules-of-hooks */
import { decorators } from '@.storybook/decorators.tsx';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button, Text, View } from 'react-native';
import ContentSafeView from '../../layout/ContentSafeView';
import BottomSheet from './BottomSheet';

const meta = {
  title: 'Elements/Overlay/BottomSheet',
  component: BottomSheet,
  argTypes: {
    isVisible: { control: 'boolean' }
  },
  decorators: decorators
} satisfies Meta<typeof BottomSheet>;

export default meta;

type Story = StoryObj<typeof BottomSheet>;

export const Basic: Story = {
  render: args => {
    const [isVisible, setIsVisible] = React.useState<boolean>(args.isVisible);

    const toggleBottomSheet = () => {
      setIsVisible(!isVisible);
    };

    return (
      <View>
        <Button title="Open Bottom Sheet" onPress={toggleBottomSheet} />
        <BottomSheet isVisible={isVisible} onClose={toggleBottomSheet}>
          <ContentSafeView>
            <View>
              <Text>This is the content inside the bottom sheet.</Text>
              <Text>This is the content inside the bottom sheet.</Text>
              <Text>This is the content inside the bottom sheet.</Text>
              <Text>This is the content inside the bottom sheet.</Text>
              <Text>This is the content inside the bottom sheet.</Text>
              <Text>This is the content inside the bottom sheet.</Text>
              <Text>This is the content inside the bottom sheet.</Text>
              <Text>This is the content inside the bottom sheet.</Text>
              <Text>This is the content inside the bottom sheet.</Text>
              <Text>This is the content inside the bottom sheet.</Text>
              <Text>This is the content inside the bottom sheet.</Text>
            </View>
          </ContentSafeView>
        </BottomSheet>
      </View>
    );
  },
  args: {
    isVisible: false
  }
};
