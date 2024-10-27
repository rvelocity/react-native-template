import React from 'react';

import { DineInStackProps } from '@/types/navigation';
import ContentSafeView from '@/ui/elements/layout/ContentSafeView/ContentSafeView.tsx';
import Screen from '@/ui/elements/layout/Screen/Screen.tsx';
import RestaurantCardList from '@/ui/widgets/RestaurantCardList';
import Header from '@/ui/elements/layout/Header';
import useHeader from '@/hooks/useHeader';
import Text from '@/ui/elements/Text';
import { View } from 'react-native';
import Chip from '@/ui/elements/data-display/Chip';
import Icon from '@/ui/elements/media-icons/Icon';
import Filters from '@/ui/widgets/Filters';

interface DineInCategoryProps extends DineInStackProps<'DineInCategory'> {}

const ShopHeader = () => {
  return (
    <Header>
      <Header.BackAction />
    </Header>
  );
};

const DineInCategory: React.FC<DineInCategoryProps> = props => {
  useHeader(ShopHeader);

  return (
    <Screen preset="auto" background="white">
      <ContentSafeView>
        <Text variant="titleExtraLarge">Rooftop</Text>
        <Filters />
        <RestaurantCardList dineIn title="Restaurants To Explore" orientation="vertical" />
      </ContentSafeView>
    </Screen>
  );
};

export default DineInCategory;
