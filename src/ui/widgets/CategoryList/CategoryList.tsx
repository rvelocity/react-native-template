import mockData from '@/mockData';
import Category from '@/ui/components/Category';
import React, { FC } from 'react';
import { FlatList, ScrollView } from 'react-native';

type CategoryListProps = {
  data: any[];
  onPress: () => void;
};

const CategoryList: FC<CategoryListProps> = ({ data, onPress }) => {
  const renderFunction = ({ item }) => {
    return <Category key={item.id} data={item} onPress={onPress} />;
  };

  const numColumns = Math.ceil(mockData.categories.length / 2);

  return (
    <ScrollView
      horizontal
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
      <FlatList
        numColumns={numColumns}
        data={data}
        renderItem={renderFunction}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </ScrollView>
  );
};

export default CategoryList;
