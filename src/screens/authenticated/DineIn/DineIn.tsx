import { DineInStackProps } from '@/types/navigation';
import Carousel from '@/ui/elements/data-display/Carousel';
import ContentSafeView from '@/ui/elements/layout/ContentSafeView/ContentSafeView.tsx';
import Screen from '@/ui/elements/layout/Screen/Screen.tsx';
import ImageBanner from '@/ui/elements/media-icons/ImageBanner';
import CategoryList from '@/ui/widgets/CategoryList';
import HeaderWithSearchAndAvatar from '@/ui/widgets/HeaderWithSearchAndAvatar/HeaderWithSearchAndAvatar.tsx';
import RestaurantCardList from '@/ui/widgets/RestaurantCardList';
import React, { FC } from 'react';

const imageUrls = [
  'https://b.zmtcdn.com/data/o2_assets/e067a1cf0d3fe27b366402b98b994e9f1716296909.png',
  'https://b.zmtcdn.com/data/o2_assets/e067a1cf0d3fe27b366402b98b994e9f1716296909.png',
  'https://b.zmtcdn.com/data/o2_assets/e067a1cf0d3fe27b366402b98b994e9f1716296909.png'
];

interface DineInProps extends DineInStackProps<'DineIn'> {}

const DineIn: FC<DineInProps> = props => {
  return (
    <Screen preset="auto" safeAreaEdges={['top']} background="white">
      <ContentSafeView>
        <HeaderWithSearchAndAvatar />
        <CategoryList />
        <Carousel pagingEnabled>
          {imageUrls.map((url, index) => (
            <Carousel.Item key={index}>
              <ImageBanner image={url} remote resizeMode="stretch" />
            </Carousel.Item>
          ))}
        </Carousel>
        <RestaurantCardList dineIn title="Restaurants To Explore" orientation="vertical" />
      </ContentSafeView>
    </Screen>
  );
};

export default DineIn;
