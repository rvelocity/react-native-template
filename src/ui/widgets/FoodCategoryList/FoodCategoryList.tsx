import FoodCategory from '@/ui/components/FoodCategory';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, ScrollView } from 'react-native';
import { FoodCategoryType } from '@/types/foodCategories';
import categoriesArray from '@/data/foodCategories.json';

const FoodCategoryList = () => {
  const navigation = useNavigation();

  const renderFunction = ({ item }: { item: FoodCategoryType }) => {
    return <FoodCategory key={item.id} thumbnail={item.thumbnail} title={item.title} />;
  };

  const numColumns = Math.ceil(categoriesArray.length / 2);

  return (
    <ScrollView
      horizontal
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
      <FlatList
        numColumns={numColumns}
        data={categoriesArray}
        renderItem={renderFunction}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </ScrollView>
  );
};

export default FoodCategoryList;
