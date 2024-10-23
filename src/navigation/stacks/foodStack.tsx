import React, { type FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Food from '@/screens/authenticated/Food';
import { BottomTabNavigatorScreenProps, FoodStackParamList } from '@/types/navigation';

const Stack = createNativeStackNavigator<FoodStackParamList>();

export const FoodStack: FC<BottomTabNavigatorScreenProps<'FoodStack'>> = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'slide_from_right',
        animationDuration: 0
      }}>
      <Stack.Screen
        name="Food"
        component={Food}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};
