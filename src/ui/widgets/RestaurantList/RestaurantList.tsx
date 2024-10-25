import { FlatList, ScrollView, View } from 'react-native';
import React from 'react';
import RestaurantCard from '@/ui/components/RestaurantCard/RestaurantCard';
import Text from '@/ui/elements/Text';
import restaurantsArray from '@/data/restaurants.json';
import { RestaurantType } from '@/types/restaurant';

const RestaurantList = () => {
  const typedRestaurantsArray: RestaurantType[] = restaurantsArray;

  const renderFunction = ({ item }: { item: RestaurantType }) => {
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
          numColumns={typedRestaurantsArray.length}
          data={typedRestaurantsArray}
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
