import FoodCategory from '@/ui/components/FoodCategory';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, ScrollView } from 'react-native';

type FoodCategoryType = {
  id: string;
  title: string;
  thumbnail: string;
};

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

const categoriesArray: FoodCategoryType[] = [
  {
    id: '1d8a9f4b',
    thumbnail: 'https://www.themealdb.com/images/category/beef.png',
    title: 'Beef'
  },
  {
    id: '2f3e7c6a',
    thumbnail: 'https://www.themealdb.com/images/category/chicken.png',
    title: 'Chicken'
  },
  {
    id: '3b9d6a7e',
    thumbnail: 'https://www.themealdb.com/images/category/dessert.png',
    title: 'Dessert'
  },
  {
    id: '4c1e9f5d',
    thumbnail: 'https://www.themealdb.com/images/category/lamb.png',
    title: 'Lamb'
  },
  {
    id: '5a7b3d2f',
    thumbnail: 'https://www.themealdb.com/images/category/miscellaneous.png',
    title: 'Miscellaneous'
  },
  {
    id: '6e5f9a4c',
    thumbnail: 'https://www.themealdb.com/images/category/pasta.png',
    title: 'Pasta'
  },
  {
    id: '7f2d8c3e',
    thumbnail: 'https://www.themealdb.com/images/category/pork.png',
    title: 'Pork'
  },
  {
    id: '8a6e4f9b',
    thumbnail: 'https://www.themealdb.com/images/category/seafood.png',
    title: 'Seafood'
  },
  {
    id: '9b4c7e1a',
    thumbnail: 'https://www.themealdb.com/images/category/side.png',
    title: 'Side'
  },
  {
    id: '10d3f2e5',
    thumbnail: 'https://www.themealdb.com/images/category/starter.png',
    title: 'Starter'
  },
  {
    id: '11e8b7a9',
    thumbnail: 'https://www.themealdb.com/images/category/vegan.png',
    title: 'Vegan'
  },
  {
    id: '12f6a3d7',
    thumbnail: 'https://www.themealdb.com/images/category/vegetarian.png',
    title: 'Vegetarian'
  }
];
