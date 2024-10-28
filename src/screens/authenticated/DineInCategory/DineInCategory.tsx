import React from 'react';
import useHeader from '@/hooks/useHeader';
import { DineInStackProps } from '@/types/navigation';
import ContentSafeView from '@/ui/elements/layout/ContentSafeView/ContentSafeView.tsx';
import Header from '@/ui/elements/layout/Header';
import Screen from '@/ui/elements/layout/Screen/Screen.tsx';
import Text from '@/ui/elements/Text';
import Filters from '@/ui/widgets/Filters';
import RestaurantCardList from '@/ui/widgets/RestaurantCardList';

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
    <Screen preset="auto" background="white" contentContainerStyle={{ gap: 24 }}>
      <ContentSafeView>
        <Text variant="titleExtraLarge">Rooftop</Text>
      </ContentSafeView>
      <Filters />
      <RestaurantCardList dineIn title="Restaurants To Explore" orientation="vertical" />
    </Screen>
  );
};

export default DineInCategory;
