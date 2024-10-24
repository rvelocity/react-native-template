import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { View } from 'react-native';
import ImageBanner from '../../media-icons/ImageBanner';
import Carousel, { IndicatorType } from './Carousel';

type CarouselStory = StoryObj<typeof Carousel>;

const CarouselMeta = {
  title: 'elements/data-display/Carousel',
  component: Carousel,
  argTypes: {
    indicator: {
      control: { type: 'radio' },
      options: [IndicatorType.DOT, IndicatorType.LINE]
    },
    pagingEnabled: {
      control: { type: 'boolean' }
    },
    snapToInterval: {
      control: { type: 'number' }
    }
  },
  args: {
    indicator: IndicatorType.DOT,
    pagingEnabled: false,
    snapToInterval: undefined
  },
  decorators: Story => (
    <View style={{ marginTop: 16 }}>
      <Story />
    </View>
  )
} satisfies Meta<typeof Carousel>;

export default CarouselMeta;

const CarouselTemplate: CarouselStory = {
  render: args => (
    <Carousel {...args}>
      <Carousel.Item>
        <ImageBanner
          remote
          image="https://cdn.dribbble.com/userupload/13332324/file/original-2e66336d1a2d902cb79d71fa9ea9224e.png?resize=1504x1128"
          resizeMode="cover"
        />
      </Carousel.Item>
      <Carousel.Item>
        <ImageBanner
          remote
          image="https://cdn.dribbble.com/userupload/13332324/file/original-2e66336d1a2d902cb79d71fa9ea9224e.png?resize=1504x1128"
          resizeMode="cover"
        />
      </Carousel.Item>
      <Carousel.Item>
        <ImageBanner
          remote
          image="https://cdn.dribbble.com/userupload/13332324/file/original-2e66336d1a2d902cb79d71fa9ea9224e.png?resize=1504x1128"
          resizeMode="cover"
        />
      </Carousel.Item>
    </Carousel>
  )
};

export const DotIndicator: CarouselStory = {
  ...CarouselTemplate,
  args: {
    indicator: IndicatorType.DOT,
    pagingEnabled: true
  }
};

export const LineIndicator: CarouselStory = {
  ...CarouselTemplate,
  args: {
    indicator: IndicatorType.LINE,
    pagingEnabled: true
  }
};

export const WithSnapToInterval: CarouselStory = {
  ...CarouselTemplate,
  args: {
    indicator: IndicatorType.DOT,
    pagingEnabled: true,
    snapToInterval: 300
  }
};
