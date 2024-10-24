import { FlatList, ScrollView, View } from 'react-native';
import React from 'react';
import RestaurantCard from '@/ui/components/RestaurantCard/RestaurantCard';
import Text from '@/ui/elements/Text';

type RestaurantListType = {
  id: string;
  name: string;
  foodCategories: string[];
  distance: number;
  deliveryTime: string;
  thumbnail: string;
  rating: number;
};

const RestaurantList = () => {
  const renderFunction = ({ item }: { item: RestaurantListType }) => {
    return (
      <RestaurantCard
        key={item.id}
        thumbnail={item.thumbnail}
        name={item.name}
        distance={item.distance}
        foodCategories={item.foodCategories}
        deliveryTime={item.deliveryTime}
        rating={item.rating}
        id={item.id}
      />
    );
  };

  return (
    <View>
      <Text variant="titleLarge">Top Rated Restaurants</Text>
      <ScrollView
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <FlatList
          numColumns={restaurantsArray.length}
          data={restaurantsArray}
          renderItem={renderFunction}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
    </View>
  );
};

export default RestaurantList;

const restaurantsArray: RestaurantListType[] = [
  {
    id: '1d8a9f4b',
    name: 'Amazing Chinese',
    foodCategories: ['Chinese', 'Thai'],
    distance: 1.5,
    deliveryTime: '30-45 mins',
    thumbnail: 'https://www.themealdb.com/images/media/meals/kos9av1699014767.jpg',
    rating: 4.2
  },
  {
    id: '2f3e7c6a',
    name: 'Spicy South Indian',
    foodCategories: ['South Indian'],
    distance: 2.8,
    deliveryTime: '40-50 mins',
    thumbnail: 'https://www.themealdb.com/images/media/meals/ebvuir1699013665.jpg',
    rating: 4.8
  },
  {
    id: '3b9d6a7e',
    name: 'Burgerlicious',
    foodCategories: ['Fastfood'],
    distance: 0.7,
    deliveryTime: '20-30 mins',
    thumbnail: 'https://www.themealdb.com/images/media/meals/vdwloy1713225718.jpg',
    rating: 4.1
  },
  {
    id: '1d8a9f4btt',
    name: 'Amazing Chinese',
    foodCategories: ['chinese', 'Indo Chinese'],
    distance: 1.5,
    deliveryTime: '30-45 mins',
    thumbnail: 'https://www.themealdb.com/images/media/meals/vdwloy1713225718.jpg',
    rating: 4.2
  },
  {
    id: '2f3e7c666',
    name: 'Spicy South Indian',
    foodCategories: ['South Indian'],
    distance: 2.8,
    deliveryTime: '40-50 mins',
    thumbnail: 'https://www.themealdb.com/images/media/meals/7n8su21699013057.jpg',
    rating: 4.8
  },
  {
    id: '3b9d6a777',
    name: 'Burgerlicious',
    foodCategories: ['Fastfood', 'Thai'],
    distance: 0.7,
    deliveryTime: '20-30 mins',
    thumbnail: 'https://www.themealdb.com/images/media/meals/zadvgb1699012544.jpg',
    rating: 4.1
  }
];
