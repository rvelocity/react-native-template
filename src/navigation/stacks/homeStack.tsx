import React, { type FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '@/screens/authenticated/Home';
import { type BottomTabNavigatorScreenProps, type HomeStackParamList } from '@/types/navigation';
import { NAVIGATIONS } from '@/constants/navigation';

const Stack = createNativeStackNavigator<HomeStackParamList>();

export const HomeStack: FC<BottomTabNavigatorScreenProps<`${NAVIGATIONS.HOME}Stack`>> = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'slide_from_right',
        animationDuration: 0
      }}>
      <Stack.Screen
        name={NAVIGATIONS.HOME}
        component={Home}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};
