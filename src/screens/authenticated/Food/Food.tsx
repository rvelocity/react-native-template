import React from 'react';
import { useStyles } from 'react-native-unistyles';

import mockData from '@/mockData';
import Carousel from '@/ui/elements/data-display/Carousel';
import Screen from '@/ui/elements/layout/Screen/Screen';
import ImageBanner from '@/ui/elements/media-icons/ImageBanner';
import CategoryList from '@/ui/widgets/CategoryList';
import HeaderWithSearchAndAvatar from '@/ui/widgets/HeaderWithSearchAndAvatar/HeaderWithSearchAndAvatar.tsx';
import RestaurantList from '@/ui/widgets/RestaurantList';

import stylesheet from './styles';

type FoodProps = {
  // Define props here
};

const imageUrls = [
  'https://cdn.dribbble.com/userupload/13332324/file/original-2e66336d1a2d902cb79d71fa9ea9224e.png?resize=1504x1128',
  'https://cdn.dribbble.com/userupload/13439869/file/original-597288c4b05840181ad1d20220f5fdd4.png?resize=1504x1128',
  'https://cdn.dribbble.com/userupload/11834110/file/original-c623235e002c982448afb55ad42dd610.png?resize=1504x1128',
  'https://cdn.dribbble.com/userupload/10379652/file/original-2d43b2b2145bc99a1eca4bcbaccbd478.png?resize=1504x1128'
];

const Food: React.FC<FoodProps> = props => {
  const { styles } = useStyles(stylesheet);

  return (
    <Screen
      preset="auto"
      safeAreaEdges={['top']}
      background="white"
      contentContainerStyle={styles.screenContent}>
      <HeaderWithSearchAndAvatar />
      <CategoryList data={mockData.categories} onPress={() => {}} />
      <Carousel pagingEnabled>
        {imageUrls.map((url, index) => (
          <Carousel.Item key={index}>
            <ImageBanner image={url} remote resizeMode="cover" />
          </Carousel.Item>
        ))}
      </Carousel>

      <RestaurantList
        title="Top Rated Restaurants"
        orientation="horizontal"
        data={mockData.restaurants}
        onPress={() => {}}
      />
      <RestaurantList
        title="Restaurants To Explore"
        orientation="vertical"
        data={mockData.restaurants}
        onPress={() => {}}
      />
    </Screen>
  );
};

export default Food;
