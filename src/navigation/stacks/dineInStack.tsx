import React, { type FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DineIn from '@/screens/authenticated/DineIn';
import { type BottomTabNavigatorScreenProps, type DineInStackParamList } from '@/types/navigation';
const Stack = createNativeStackNavigator<DineInStackParamList>();

export const DineInStack: FC<BottomTabNavigatorScreenProps<'DineInStack'>> = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'slide_from_right',
        animationDuration: 0
      }}>
      <Stack.Screen
        name="DineIn"
        component={DineIn}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};
