import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { decorators } from '@.storybook/decorators';
import ImageBanner from './ImageBanner';

const ImageBannerMeta: Meta<typeof ImageBanner> = {
  title: 'Elements/Media Icons/ImageBanner',
  component: ImageBanner,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'Size variant of the ImageBanner'
    },
    image: {
      control: { type: 'text' },
      description: 'Source of the image'
    },
    alt: {
      control: { type: 'text' },
      description: 'Alternative text for the image'
    }
  },
  args: {
    image:
      'https://cdn.dribbble.com/userupload/13332324/file/original-2e66336d1a2d902cb79d71fa9ea9224e.png?resize=1504x1128',
    alt: 'Sample Image Banner'
  },
  decorators: decorators
};

export default ImageBannerMeta;

type ImageBannerStory = StoryObj<typeof ImageBanner>;

const ImageBannerTemplate: ImageBannerStory = {
  render: ({ ...args }) => <ImageBanner {...args} remote />
};

export const ExtraSmall: StoryObj<typeof ImageBanner> = {
  ...ImageBannerTemplate,
  args: {
    variant: 'xs'
  }
};

export const Small: StoryObj<typeof ImageBanner> = {
  ...ImageBannerTemplate,
  args: {
    variant: 'sm'
  }
};

export const Medium: StoryObj<typeof ImageBanner> = {
  ...ImageBannerTemplate,
  args: {
    variant: 'md'
  }
};

export const Large: StoryObj<typeof ImageBanner> = {
  ...ImageBannerTemplate,
  args: {
    variant: 'lg'
  }
};
