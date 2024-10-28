import React, { FC } from 'react';
import { useStyles } from 'react-native-unistyles';

import mockData from '@/mockData';
import { DineInStackProps } from '@/types/navigation';
import ImageSlider from '@/ui/components/ImageSlider';
import Carousel from '@/ui/elements/data-display/Carousel';
import Screen from '@/ui/elements/layout/Screen/Screen.tsx';
import ImageBanner from '@/ui/elements/media-icons/ImageBanner';
import CategoryList from '@/ui/widgets/CategoryList';
import HeaderWithSearchAndAvatar from '@/ui/widgets/HeaderWithSearchAndAvatar/HeaderWithSearchAndAvatar.tsx';
import RestaurantList from '@/ui/widgets/RestaurantList';

import stylesheet from './styles';

const imageUrls = [
  'https://b.zmtcdn.com/data/o2_assets/e067a1cf0d3fe27b366402b98b994e9f1716296909.png',
  'https://b.zmtcdn.com/data/o2_assets/e067a1cf0d3fe27b366402b98b994e9f1716296909.png',
  'https://b.zmtcdn.com/data/o2_assets/e067a1cf0d3fe27b366402b98b994e9f1716296909.png'
];

type DineInProps = DineInStackProps<'DineIn'>;

const DineIn: FC<DineInProps> = ({ navigation }) => {
  const { styles } = useStyles(stylesheet);
  const { navigate } = navigation;

  const navigateToCategory = () => {
    navigate('DineInCategory');
  };

  const navigateToRestaurant = () => {
    navigate('DineInRestaurant');
  };

  return (
    <Screen
      preset="scroll"
      safeAreaEdges={['top']}
      background="white"
      contentContainerStyle={styles.screenContent}>
      <HeaderWithSearchAndAvatar />
      <CategoryList data={mockData.categories} onPress={navigateToCategory} />
      <Carousel pagingEnabled>
        {imageUrls.map((url, index) => (
          <Carousel.Item key={index}>
            <ImageBanner image={url} remote resizeMode="stretch" />
          </Carousel.Item>
        ))}
      </Carousel>
      <ImageSlider title="Must Try Places" data={mockData.restaurants} />
      <RestaurantList
        dineIn
        title="Restaurants To Explore"
        orientation="vertical"
        data={mockData.restaurants}
        onPress={navigateToRestaurant}
      />
    </Screen>
  );
};

export default DineIn;
