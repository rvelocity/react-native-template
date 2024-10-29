import React from 'react';
import { useStyles } from 'react-native-unistyles';

import useHeader from '@/hooks/useHeader';
import mockData from '@/mockData';
import { DineInStackProps } from '@/types/navigation';
import ContentSafeView from '@/ui/elements/layout/ContentSafeView/ContentSafeView';
import Header from '@/ui/elements/layout/Header';
import Screen from '@/ui/elements/layout/Screen/Screen';
import Text from '@/ui/elements/Text';
import Filters from '@/ui/widgets/Filters';
import RestaurantList from '@/ui/widgets/RestaurantList';

import stylesheet from './styles';

type DineInCategoryProps = DineInStackProps<'DineInCategory'>;

function ShopHeader() {
  return (
    <Header>
      <Header.BackAction />
    </Header>
  );
}

const DineInCategory: React.FC<DineInCategoryProps> = ({ navigation }) => {
  const { styles } = useStyles(stylesheet);
  const { navigate } = navigation;

  useHeader(ShopHeader);

  const navigateToRestaurant = () => {
    navigate('DineInRestaurant');
  };

  return (
    <Screen
      preset="auto"
      background="white"
      contentContainerStyle={styles.screenContent}
      barBackground="white">
      <ContentSafeView>
        <Text variant="titleExtraLarge">Rooftop</Text>
      </ContentSafeView>
      <Filters />
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

export default DineInCategory;
