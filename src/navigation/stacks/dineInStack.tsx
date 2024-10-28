import DineIn from '@/screens/authenticated/DineIn';
import DineInCategory from '@/screens/authenticated/DineInCategory';
import DineInRestaurant from '@/screens/authenticated/DineInRestaurant';
import { type BottomTabNavigatorScreenProps, type DineInStackParamList } from '@/types/navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { type FC } from 'react';

const Stack = createNativeStackNavigator<DineInStackParamList>();

export const DineInStack: FC<BottomTabNavigatorScreenProps<'DineInStack'>> = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'default',
        animationDuration: 0
      }}>
      <Stack.Screen
        name="DineIn"
        component={DineIn}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="DineInCategory"
        component={DineInCategory}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="DineInRestaurant"
        component={DineInRestaurant}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};
