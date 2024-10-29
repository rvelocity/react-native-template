import React, { type FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Courier from '@/screens/authenticated/Courier';
import CourierCart from '@/screens/authenticated/CourierCart';
import { type BottomTabNavigatorScreenProps, type CourierStackParamList } from '@/types/navigation';

const Stack = createNativeStackNavigator<CourierStackParamList>();

export const CourierStack: FC<BottomTabNavigatorScreenProps<'CourierStack'>> = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'default',
        animationDuration: 0
      }}>
      <Stack.Screen
        name="Courier"
        component={Courier}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="CourierCart"
        component={CourierCart}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};
