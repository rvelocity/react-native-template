import React, { type FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Food from '@/screens/authenticated/Food';
import { BottomTabNavigatorScreenProps, FoodStackParamList } from '@/types/navigation';
import { NAVIGATIONS } from '@/constants/navigation';

const Stack = createNativeStackNavigator<FoodStackParamList>();

export const FoodStack: FC<BottomTabNavigatorScreenProps<`${NAVIGATIONS.FOOD}Stack`>> = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'slide_from_right',
        animationDuration: 0
      }}>
      <Stack.Screen
        name={NAVIGATIONS.FOOD}
        component={Food}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};
